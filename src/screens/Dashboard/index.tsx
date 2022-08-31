import React from "react";

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
} from "./styles";

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
        const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de Site",
            amount: "R$ 12.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2022",
        },
        {
            id: '2',
            type: 'negative',
            title: "Hamburgueria",
            amount: "R$ 59,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "10/04/2022"
        },
        {
            id: '3',
            type: 'negative',
            title: "Aluguel",
            amount: "R$ 1.200,00",
            category: {
                name: 'Casa',
                icon: 'home'
            },
            date: "10/04/2022"
        }
    ];

    return(
        <Container>
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
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 23 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Última saída dia 13 de abril"
                />
                <HighlightCard
                    type="total"
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 à 25 de abril"
                    
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />               
            </Transactions>

        </Container>
    )
}