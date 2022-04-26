import React from "react";

import RevectImage from '../../assets/LogoRevect.svg'
import { Container, ContainerImgText, RevectImg, ContainerButton, StartNow, AlreadyHaveAccount } from '../fourthSlider/styles'

import { Link } from "react-router-dom";

function Inicio() {

    return (
        <Container>
            <ContainerImgText>
                <RevectImg src={RevectImage} alt='Logo Revect' />
            </ContainerImgText>

            <ContainerButton>
                <StartNow><Link to='/firstPageCadastros' style={{ color: 'white' }}>Começar agora</Link></StartNow>
                
                <AlreadyHaveAccount><Link to='/fifth' style={{ color: 'white' }}>Já tenho uma conta</Link></AlreadyHaveAccount>

            </ContainerButton>
        </Container>
    )
}

export default Inicio
