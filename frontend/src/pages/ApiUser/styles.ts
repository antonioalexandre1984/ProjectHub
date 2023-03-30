import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Container = styled.div`
margin: 0 auto;
width: 100%;
max-width: 80rem;
display: flex;	
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 10px;
`;

export const CardContainer = styled.div`
margin: auto;
width: 100%;
padding: 100px 50px;
ul{
    margin-left: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
`;


export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    justify-content: space-between;
    gap:2rem;   
    margin: 0 auto;
    
    button{
        background-color: #644aff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            background-color: #4ed8c7;
            color: #fff;
            opacity: 0.8;
        }
            &.active {
            background-color: #644aff;
            color: #fff;
            opacity: 0.8;
        }
    }


`;

export const SearchBar = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 1.5rem;
  display: flex;
  padding: 0 1.5rem;
  gap: 1rem;
  padding-top: 150px;

  input {
    width: 800px;
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: #9da5d1;
    color:  #2b3566;
    padding: 1rem;

    &::placeholder {
      color: #2b3566;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  button {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 0;
    padding: 1rem;
    background: #644aff;
    color: #fff;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disable {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`

