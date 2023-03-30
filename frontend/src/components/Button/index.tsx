import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
}
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

export function Button({ children, ...rest }: IButtonProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
