import React from "react";

import RevectImage from '../../assets/LogoRevect.svg'
import { Container, ContainerSkip, ContainerImgText, RevectImg, Title, Paragraph, ContainerButton, Next } from '../firstSlide/styles'

import { Link } from "react-router-dom";

function Inicio() {

    return (
        <Container>
            <ContainerSkip>
                <Link style={{textDecoration: 'none', color: '#FAFAFA'}} to='/fifth'>skip</Link>
            </ContainerSkip>


            <ContainerImgText>
                <RevectImg src={RevectImage} alt='Logo Revect' />
                <div>
                    <Title>Treinos exclusivos para você</Title>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                </div>
            </ContainerImgText>
            
            <ContainerButton>
                <div>
                    <Link to='/'>
                        <div className="firstDot" />
                    </Link>
                    <Link to='/seccond'>
                        <div />
                    </Link>
                    <Link to='/third'>
                        <div />
                    </Link>
                </div>
                <Next><Link to='/seccond' style={{color: 'white'}}>Próximo</Link></Next>
            </ContainerButton>
        </Container>
    )
}

export default Inicio
