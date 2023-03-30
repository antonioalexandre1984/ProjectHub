import { Button } from '../../../../components/Button';
import { Container } from './styles';

interface HeaderProps {
  title: string;
  buttonText: string;
  action: () => void;

}

export function PageHeader({ title, buttonText, action }: HeaderProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <Button onClick={action}>{buttonText}</Button>
    </Container>
  );
}
