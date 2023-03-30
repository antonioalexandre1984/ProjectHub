import styled, { css } from 'styled-components';

interface InputProps {
    isFilled: boolean;
    isFocused: boolean;
}

export const Container = styled.div<InputProps>`
display: flex;
align-items: center;
flex-direction: row;
border: 2px solid #44355b;
background-color:#000;
border-radius: 4px;
width:300px;
height: 42px;
padding: 10px 15px;
margin-bottom: 10px;

svg{
    margin-right: 10px;
    color: #a5a5a5;
}

${(props) => props.isFocused && css`
svg{
    color: #00e676;
}
border-color: #00e676;
`}

${(props) => props.isFilled && css`
svg{
    color: #00e676;
}
`}

input{
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 0;
    color: #fff;
    font-size: 12px;
    padding-left: 15px;
    
    &::placeholder{
        color: #a5a5a5;
    }
    &:focus{
        outline: none;
        cursor: pointer;
    }
}


`;
