import { ReactNode } from 'react';
import { AdminLayout } from '../AdminLayout';
import { useUser } from '../hooks/useUser';

import { Container } from './styles';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = useUser();
  return (
    <Container>
      <>
        {user ? <AdminLayout>{children}</AdminLayout> : <> {children} </>}
        {children}
      </>
    </Container>
  );
}
