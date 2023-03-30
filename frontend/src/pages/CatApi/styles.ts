import styled from 'styled-components';

export const HttpCatContainer = styled.div`
width: 100%;
max-width: 80rem;
margin: 0 auto;
height: 100vh;
display: flex;
align-items: stretch;
`;

export const HttpCatItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin: 0 auto;
width: 100%;
max-width: 50rem;
height: 100vh;
background-color: #9da5d1;

input{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: #644aff;
    font-size: 1.5rem;
    margin-top: 20px;
    padding: 0 20px;
    transition: all 0.2s;
    text-align: center;

    &:focus{
        width: 300px;
        border: 4px solid #644aff;
        text-align: center;
        color: #fff;
    }

}
`;


