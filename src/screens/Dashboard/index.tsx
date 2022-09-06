import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";


import {
    Container,
    Header,
    UserInfo,
    UserWrapper,
    Photo,
    User,
    Greeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton,
    LoadContainer,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
    id: string;
}

interface HighlightProps {
    amount: string;
}

interface HighlightData {
    entries: HighlightProps;
    expense: HighlightProps;
    total: HighlightProps;
}

export function Dashboard(){
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

    const theme = useTheme();

    async function loadTransaction(){
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];

        let entriesTotal = 0;
        let expenseTotal = 0;

        const transactionsFormatted: DataListProps[] = transactions
        .map((item: DataListProps) => {

            if(item.type === 'positive'){
                entriesTotal += Number(item.amount);
            } else {
                expenseTotal += Number(item.amount);
            };

            const amount = Number(item.amount)
            .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            const date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format(new Date(item.date));

            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                category: item.category,
                date,
            }

        });

        setTransactions(transactionsFormatted);

        const total = entriesTotal - expenseTotal;

        setHighlightData({
            entries: {
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            expense: {
                amount: expenseTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            total: {
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            }
        });

        setIsLoading(false);
    }
    
    useEffect(() => {
        loadTransaction();
    },[]);

    useFocusEffect(useCallback(() => {
    loadTransaction();
    },[]));

    return(
        <Container>
            {
                isLoading ?
                <LoadContainer>
                    <ActivityIndicator
                    color={theme.colors.primary}
                    size="large"
                    />
                </LoadContainer>  :
            <>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/109987257?v=4'}} 
                        />
                        <User>
                            {/* Depois utilizar o horario do dia para modificar a saudação, conforme app anterior */}
                            <Greeting> Olá, </Greeting>
                            <UserName> Filipe </UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => {}}>
                        <Icon name="power"/>
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas" 
                    amount={highlightData.entries.amount}
                    lastTransaction="Última entrada dia 23 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas" 
                    amount={highlightData.expense.amount} 
                    lastTransaction="Última saída dia 13 de abril"
                />
                <HighlightCard
                    type="total"
                    title="Total" 
                    amount={highlightData.total.amount}  
                    lastTransaction="01 à 25 de abril"
                    
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />               
            </Transactions>
        </>
        }
        </Container>
    )
}