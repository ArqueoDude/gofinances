import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Alert } from 'react-native'

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'

import { useAuth } from "../../hooks/auth";

import { SingInSocialButton } from "../../components/SingInSocialButton";

import { 
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,

 } from "./styles";

export function SignIn(){
    const { signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle();

        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel conectar a conta Google');
        }   
    }
    
    return(

        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />

                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>      
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SingInSocialButton 
                        title="Entrar com Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                    <SingInSocialButton 
                        title="Entrar com Apple"
                        svg={AppleSvg}
                    />
                </FooterWrapper>
            </Footer>
        </Container>

    );
}