import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
max-width: 60rem;
margin: 0 auto;
height: 100vh;
display: flex;
margin-top: 5rem; 
align-items: center;
flex-direction: column;
`;

export const Submit = styled.button`
width: 150px;
height: 50px;
border: none;
border-radius: 5px;
background-color: #00e676;
color: #fff;
font-size: 1.2rem;
font-weight: 600;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    background-color: #00c853;
}

`;

export const Back = styled.button`
width: 150px;
height: 50px;
border: none;
border-radius: 5px;
background-color: #00e676;
color: #fff;
font-size: 1.2rem;
font-weight: 600;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    background-color: #00c853;
}

`;

export const ButtonGroup = styled.div`
display: flex;
gap: 1rem;
`;
