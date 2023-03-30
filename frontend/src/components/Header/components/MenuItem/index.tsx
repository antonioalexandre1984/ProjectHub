import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IProps {
  title: string;
  icon: ComponentType<IconBaseProps>
  action(): void;
}
export function MenuItem(props: IProps) {
  const { title, icon: Icon, action } = props;
  return (
    <Container title={title} onClick={action}>
      <Icon />
    </Container>
  );
}
