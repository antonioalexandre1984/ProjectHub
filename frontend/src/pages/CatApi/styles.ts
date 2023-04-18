import styled from 'styled-components';

export const HttpCatContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: stretch;

  
    img{
        width: 70%;
        margin: 10px 20px;
        max-height: 60vh;
        border: 1px solid #644aff;
        border-radius: 10px;
    }
`;

export const HttpCatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  width: 100%;
  max-width: 90%;
  height: 80%;
  background-color: #9da5d1;

  input {
    width: 20%;
    height: 50px;
    border-radius: 10px;
    background: #644aff;
    font-size: 1.2rem;
    margin-top: 20px;
    padding: 0 20px;
    transition: all 0.2s;
    text-align: center;

    &:focus {
      width: 30%;
      border: 4px solid #644aff;
      text-align: center;
      color: #fff;
    }

  }
`;


