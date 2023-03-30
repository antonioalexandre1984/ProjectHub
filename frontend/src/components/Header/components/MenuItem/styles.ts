import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.li`
border-radius: 7px;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
transition: all 0.2s;

svg{
    font-size: 2rem;
}

&:hover{
    background-color: ${shade(0.2, "#00E676")}
}

`;
