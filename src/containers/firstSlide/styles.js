import styled from 'styled-components'

import Background1 from '../../assets/background1.svg'



export const Container = styled.div`
    background-image: url(${Background1});
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const ContainerSkip = styled.div`
    text-align: right;
    padding: 4rem 1.5rem;
`

export const ContainerImgText = styled.div`
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25rem;

    div {
        margin-left: 2rem;
    }
`

export const RevectImg = styled.img``

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 24px;
    color: #FAFAFA;
    margin-bottom: .3rem;
`

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: .9rem;
    line-height: 18px;
    color: #FAFAFA;
`


export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin-top: 2rem;

    div {
        display: flex;

        div{
            width: .8rem;
            height: .8rem;
            background: #FAFAFA;
            margin: 0px .5rem;
            border-radius: .8rem;
        }

        .firstDot {
            background: #FF4701;
        }
    }

`

export const Next = styled.button`
    width: 10rem;
    height: 3rem;
    background: #FF4701;
    border-radius: 6rem;
    font-style: normal;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 135%;
    text-align: center;
    border: none;

    &:active {
        opacity: 0.6;
    }
`