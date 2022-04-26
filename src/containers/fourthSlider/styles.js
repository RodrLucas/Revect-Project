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
    padding-top: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RevectImg = styled.img``



export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 1.5rem;
    margin-top: 2rem;
`

export const StartNow = styled.button`
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

export const AlreadyHaveAccount = styled.button`
    width: 18rem;
    height: 3.5rem;
    background: transparent;
    border-radius: 1.5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;


    &:active {
        opacity: 0.6;
    }
`

