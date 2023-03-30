import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 80rem;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
background-color: #18314f;
height: 150px;

img{
    width: 230px;
    height: 200px;
    padding: 0;
    margin: 0;
}
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
gap: 1.5rem;
list-style: none;
`;

export const MenuItemLogOut = styled.div`
display: flex;
align-items: center;
`;


