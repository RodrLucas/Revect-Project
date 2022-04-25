import styled from 'styled-components'

import Background1 from '../../assets/background1.svg'



export const Container = styled.div`
    background-image: url(${Background1});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContainerImgText = styled.div`
    padding-top: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 230px;

    div {
        margin-left: 32px;
    }
`

export const RevectImg = styled.img``



export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 28px;
    margin-top: 20px;

    div{
        display: flex;
        flex-direction: column;

    }
`

export const Label = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 28px;
    color: #FFFFFF;
    margin-left: 15px;
    margin-bottom: 10px;
`


export const Input = styled.input`
    width: 300px;
    height: 58px;
    border-radius: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: black;
    border: none;
    margin-bottom: 20px;

    &:active {
        opacity: 0.6;
    }
`


export const Login = styled.button`
    width: 300px;
    height: 58px;
    background: #FF4701;
    border-radius: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;
    border: none;

    &:active {
        opacity: 0.6;
    }
`

export const Facebook = styled.button`
    width: 300px;
    height: 58px;
    background: #4568AD;
    border-radius: 20px;
    border: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    &:active {
        opacity: 0.6;
    }
`

export const Gmail = styled.button`
    width: 300px;
    height: 58px;
    background: #E63736;
    border-radius: 20px;
    border: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    &:active {
        opacity: 0.6;
    }
`
