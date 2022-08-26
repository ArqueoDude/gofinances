import React from "react";

import {
    Container,
    Header,
    UserInfo,
    UserWrapper,
    Photo,
    User,
    Greeting,
    UserName,
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
                </UserWrapper>
            </Header>
            
        </Container>
    )
}