import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 80rem;
margin: 0 auto;
height: 100vh;
display: flex;
align-items: stretch;
`;

export const ContentItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
max-width: 32rem;
height: 80vh;
margin: 0 auto;
border-radius: 10px;
background-color: #9da5d1;

`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
max-width: 80rem;
margin: 0 auto;
background-color: #2b3566;

h1{
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 20px;

}
img{
    width: 100%;
    margin: 10px 20px;
    height: 32rem;
    border: 1px solid #644aff;
}
`;

export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
margin-top: 20px;
width: 150px;
height: 50px;
border: 4px solid #644aff;
border-radius: 10px;
background: #644aff;
color: #fff;
font-size: 1.5rem;
transition: all 0.2s;

&:hover {
    background: #fff;
    color: #644aff;
}
`;