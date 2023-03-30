import styled from 'styled-components';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isSelect?: boolean;
}
export const Container = styled.div`

`;

export const PaginationItem = styled.div<ActionButtonProps>`

Background: ${props => props.color};

svg{
    color: #fff;
}

&:active{
    transform: scale(0.9);
}

`;
