import styled from 'styled-components'

import Background2 from '../../assets/background2.svg'



export const Container = styled.div`
    background-image: url(${Background2});
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const ContainerSkip = styled.div`
    text-align: right;
    padding: 64px 25px;

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FAFAFA;
    }
`

export const ContainerImgText = styled.div`
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 230px;

    div {
        margin-left: 32px;
    }
`

export const RevectImg = styled.img``

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FAFAFA;
    margin-bottom: 8px;
`

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #FAFAFA;
`


export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    margin-top: 20px;

    div {
        display: flex;

        div{
            width: 12px;
            height: 12px;
            background: #FAFAFA;
            margin: 0px 8px;
            border-radius: 12px;
        }

        .seccondDot {
            background: #FF4701;
        }
    }
`


export const Next = styled.button`
    width: 146px;
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