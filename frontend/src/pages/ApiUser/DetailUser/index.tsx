import { ReactNode } from 'react';
import { Container } from './styles';
import React from 'react';

interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
}

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => {
  return (
    <Container>
      <button onClick={onClose}>Fechar</button>
      <h2>{user.name.first} {user.name.last}</h2>
      <img src={user.picture.thumbnail} alt={`Foto de ${user.name.first}`} />
      <p>Email: {user.email}</p>
    </Container>
  );
};

export default UserDetails;