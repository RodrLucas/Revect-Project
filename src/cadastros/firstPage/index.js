import React from "react";
import { Link } from "react-router-dom";

import {Container, Title, Input, Button, Img} from '../firstPage/styles'

import RevectLogo from '../../assets/LogoRevect2.svg'

function FirstPage(){



    return(
        <Container>
            <Title>O cadastro é rapidinho</Title>

            <div>
                <Input type='email' placeholder='escreva seu e-mail'/>
                <Button><Link style={{ color: 'white' }}>Continuar</Link></Button>
            </div>

            <Img src={RevectLogo} alt='Logo Revect'/>
        </Container>
    )
}

export default FirstPage



