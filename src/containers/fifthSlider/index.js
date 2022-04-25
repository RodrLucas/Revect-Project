import React from "react";

import RevectImage from '../../assets/LogoRevect.svg'
import { Container, ContainerImgText, RevectImg, ContainerButton, Label, Input, Login, Facebook, Gmail } from '../fifthSlider/styles'

import { Link } from "react-router-dom";
import FacebookImg from '../../assets/facebook.svg'
import GamilImg from '../../assets/gmail.svg'






function Inicio() {

    return (
        <Container>
            <ContainerImgText>
                <RevectImg src={RevectImage} alt='Logo Revect' />
            </ContainerImgText>

            <ContainerButton>

                <div>
                    <Label>Login</Label>
                    <Input type='email' />
                    <Label>Senha</Label>
                    <Input type='password' />
                </div>

                <Login><Link to='/third' style={{ color: 'white' }}>Fazer Login</Link></Login>

                <Facebook><Link to='/seccond' style={{ color: 'white' }}>
                    <div>
                        <img src={FacebookImg} alt='Facebook-logo'/>
                        Entrar com o Facebook
                    </div>
                </Link></Facebook>

                <Gmail><Link to='/seccond' style={{ color: 'white' }}>
                    <div>
                        <img src={GamilImg} alt='Facebook-logo'/>
                        Entrar com o Gmail
                    </div>
                </Link></Gmail>

            </ContainerButton>
        </Container>
    )
}

export default Inicio
