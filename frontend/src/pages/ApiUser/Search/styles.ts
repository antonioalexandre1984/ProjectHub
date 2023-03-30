import styled from 'styled-components'

export const SearchFormContainer = styled.form`
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
