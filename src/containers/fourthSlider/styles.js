import styled from 'styled-components'

import Background4 from '../../assets/background4.svg'



export const Container = styled.div`
    background-image: url(${Background4});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContainerImgText = styled.div`
    padding-top: 200px;
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
`

export const StartNow = styled.button`
    width: 300px;
    height: 58px;
    background: #FF4701;
    border-radius: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;
    border: none;

    &:active {
        opacity: 0.6;
    }
`

export const AlreadyHaveAccount = styled.button`
    width: 300px;
    height: 58px;
    background: transparent;
    border-radius: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;


    &:active {
        opacity: 0.6;
    }
`

