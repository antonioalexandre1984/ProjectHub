import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IEntryCardItemProps {
  color?: string;
  background?: string;
}


export const Container = styled.div`
width: 100%;
max-width: 80rem;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
flex-direction: column;


img{
  width: 400px;
  margin: 0 auto;
}
`;

export const EntryCard = styled.div`
padding: 50px;
background: #18314f;
border-radius: 4px;
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const EntryCardItem = styled.div<IEntryCardItemProps>`
width: 200px;
height: 230px;
padding: 10px;
border-radius: 4px;
color:  #240b36;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
transition: all 0.2s;
margin: 10px;
cursor: pointer;

span{
  font-size: 1.2rem;
}

${props => props.color && css`
  color: ${props.color};
`}


${props =>
    props.background
      ? css`
          background: ${props.background};

          &:hover {
            background: ${shade(0.2, props.background)};
          }
        `
      : css`
          background: #00e676;

          &:hover {
            background: ${shade(0.2, '#00e676')};
          }
        `}
`;
