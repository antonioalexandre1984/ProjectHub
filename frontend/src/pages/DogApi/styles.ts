
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 25rem;
  height: 80vh;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #9da5d1;

  @media (max-width: 768px) {
    max-width: 20rem;
    height: 50vh;
  }

  img {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  background-color: #2b3566;

  h1 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    margin: 10px 20px;
    max-height: 50vh;
    border: 1px solid #644aff;
  }

  @media (max-width: 768px) {
     img {
        max-width: 70%;
     }
  }
`;

export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  margin-top: 10px;
  width: 80px;
  height: 30px;
  border: 4px solid #644aff;
  border-radius: 10px;
  background: #644aff;
  color: #fff;
  font-size: 0.8rem;
  transition: all 0.2s;

  &:hover {
    background: #fff;
    color: #644aff;
  }
`;