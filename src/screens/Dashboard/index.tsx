import React from "react";
import { HighlightCard } from "../../components/HighlightCard";


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
} from "./styles";

export function Dashboard(){
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
        </Container>
    )
}