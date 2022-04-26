import styled from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.74) 99.99%, rgba(18, 18, 18, 0.9) 100%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {    
        display: flex;
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;

`
export const Input = styled.input`
    width: 20rem;
    height: 3rem;
    background: #CCCCCC;
    opacity: 0.2;
    border: 1px solid #3C3C3C;
    border-radius: 1rem;
    padding: .8rem;
    margin-top: 6rem;
    margin-bottom: 3rem;

    &::placeholder {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 135%;
        text-align: left;
    }
`
export const Button = styled.button`
    width: 20rem;
    height: 3rem;
    background: transparent;
    border: 2px solid #FFFFFF;
    border-radius: 1rem;
    font-size: 1rem;
    margin-bottom: 10rem;
`

export const Img = styled.img``