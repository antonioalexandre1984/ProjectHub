import { ClientsApi } from '../../../components/Interfaces/ClientsApi';
import { Container, CardItem, CardItemImage, CardItemTitle, CardItemInfo, CarItemUserName } from './styles';

interface CardProps {
  user: ClientsApi;
}

export function Card({ user }: CardProps) {
  return (
    <Container>
      <CardItem>
        <CardItemImage>
          <img src={user.picture.thumbnail} alt={`Foto de ${user.name.first}`} />
        </CardItemImage>
        <CardItemTitle>
          <h3>{user.name.first} {user.name.last}</h3>
        </CardItemTitle>
        <CardItemInfo>
          <h4>Age: {user.dob.age}</h4>
          <h3>Email:<br /> {user.email}</h3>
        </CardItemInfo>
        <CarItemUserName>
          <h3><span>Username:</span><br />{user.login.username}</h3>
        </CarItemUserName>
      </CardItem>

    </Container>
  );
}
