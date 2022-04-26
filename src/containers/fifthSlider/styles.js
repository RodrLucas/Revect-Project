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
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const RevectImg = styled.img``

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: .9rem;
    align-items: center;
    padding: 2rem;
    margin-top: 2rem;

    div{
        display: flex;
        flex-direction: column;

    }
`

export const Label = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 28px;
    color: #FFFFFF;
    margin-left: 1.1rem;
    margin-bottom: 1rem;
`


export const Input = styled.input`
    width: 18rem;
    height: 3.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 135%;
    text-align: center;
    color: black;
    border: none;
    margin-bottom: 2rem;

    &:active {
        opacity: 0.6;
    }
`


export const Login = styled.button`
    width: 18rem;
    height: 3.5rem;
    background: #FF4701;
    border-radius: 1.5rem;
    font-style: normal;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;
    border: none;

    &:active {
        opacity: 0.6;
    }
`

export const Facebook = styled.button`
    width: 18rem;
    height: 3.5rem;
    background: #4568AD;
    border-radius: 1.5rem;
    border: none;
    font-style: normal;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }

    &:active {
        opacity: 0.6;
    }
`

export const Gmail = styled.button`
    width: 18rem;
    height: 3.5rem;
    background: #E63736;
    border-radius: 1.5rem;
    border: none;
    font-style: normal;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }

    &:active {
        opacity: 0.6;
    }
`
