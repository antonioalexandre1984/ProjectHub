import { ReactNode } from 'react';
import { Header } from '../Header';


import { Container, Main } from './styles';

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Container>
      <Header />
    </Container>
  );
}
