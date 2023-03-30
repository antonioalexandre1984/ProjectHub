import { useCallback } from 'react';
import { FaUserEdit, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Container, EntryCard, EntryCardItem } from './styles';
import { SiDatadog } from 'react-icons/si';
import { GiCat } from 'react-icons/gi';

export function Dashboard() {
  const navigate = useNavigate();

  const ApiUser = useCallback(() => {
    navigate('/user');
  }, [navigate]);

  const DogApi = useCallback(() => {
    navigate('/dog');
  }, [navigate]);

  const CatApi = useCallback(() => {
    navigate('/cat');
  }, [navigate]);

  const ApiCrud = useCallback(() => {
    navigate('/crud');
  }, [navigate]);

  return (
    <Container>

      <EntryCard>
        <EntryCardItem
          onClick={ApiUser}
        >
          <FaUsers size={50} />
          <span>ApiUser</span>
        </EntryCardItem>
        <EntryCardItem
          onClick={DogApi}
          color="#fff"
          background="#111"
        >
          <SiDatadog size={50} />
          <span>DogApi</span>
        </EntryCardItem>
        <EntryCardItem
          onClick={CatApi}
        >
          <GiCat size={50} />
          <span>CatApi</span>
        </EntryCardItem>
        <EntryCardItem
          onClick={ApiCrud}
          color="#fff"
          background="#111"
        >
          <FaUserEdit size={50} />
          <span>CrudUser</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
}
