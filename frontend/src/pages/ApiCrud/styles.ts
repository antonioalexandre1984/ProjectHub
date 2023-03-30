import styled, { css } from 'styled-components';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isSelect?: boolean;
}

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
}

export const ClientsPageContainer = styled.div`
width: 100%;
max-width: 80rem;
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 2rem 1rem;
`;

export const TableContainer = styled.table`
border-collapse: separate;
width: 100%;
border-spacing: 0 0.75rem;
margin-top: 40px;

th{
    text-align: center;
    background-color: #6b6570;
    padding: 1rem 2rem; 
    font-size: 1.5rem;
    color: #111;
}

td{
    text-align: center;
    padding: 1rem 2rem;
    border: 0;
    background-color: #6b6570;
    color: #fff;    
    font-size: 1.2rem;

    &:first-child{
        border-radius: 6px 0 0 6px;
    }

    &:last-child{
        border-radius: 0 6px 6px 0;
    }
}
`;

export const ActionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
`;

export const ActionsButton = styled.button<ActionButtonProps>`
display: flex;
align-items: center;
cursor: pointer;
border: none;
padding: 0.5rem 1rem;
border-radius: 0.25rem;
transition: all 0.2s;

Background: ${props => props.color};

svg{
    color: #fff;
}

&:active{
    transform: scale(0.9);
}
`;
export const NewUser = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #00e676 !important;
    color: #6b6570;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    


    &:hover{
        background-color: #00c853;
        color: #000;
    }

`;

export const Pagination = styled.div`
    display: flex;
    min-width: 900px;
    justify-content: space-between;
    font-size: 1.5rem;
    border: none;
    margin-top: 20px;

`;

export const PaginationButtonItem = styled.div<ActionButtonProps>`
margin: 0 20px;
border: none;


${props => props.isSelect && css`
    color: #fff;
    background-color: #644aff;
    border-radius: 6px;
    padding: 5px 20px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
 
    &:hover{
        background-color: #4ed8c7;
        color: #fff;
        opacity: 0.8;
    }
`}

`;

export const PaginationButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
background: transparent;
color: #fff;
border: none;
 span{
    background: transparent;
    color: #fff;
    transition:all 0.2s;
    padding: 5px 20px;
    &:hover{
        background-color: #644aff;
        color: #fff;
        opacity: 0.8;
        border-radius: 6px;
    }
 }

`;

export const Select = styled.select`
width: 100px;
height: 30px;
border: none;
border-radius: 5px;
color: #fff;
font-size: 16px;
font-weight: bold;
cursor: pointer;
transition: 0.2s;
padding: 0 10px;


`;

export const InfoContent = styled.div`
display: flex;
justify-content: space-between;
`;
