import styled from 'styled-components';

interface PaginationItemProps {
    isSelect: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 50px;
    margin-top: 20px;
    
`;

export const PaginationButton = styled.li`
display: flex;

`;

export const PaginationItem = styled.div<PaginationItemProps>`
margin: 0 20px;
cursor: pointer;
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;


${props => props.isSelect && {
        background: '#00e676',
        color: '#fff',
        borderRadius: '5px',
        padding: '5px',
        fontWeight: 'bold',
        fontSize: '20px',
        transition: '0.2s',
        '&:hover': {
            background: '#00c853',
            color: '#000',
        }
    }
    }

`;

export const Select = styled.select`
    margin-top: 50px;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #247ba0 !important;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
`;

