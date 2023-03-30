import { FaCat, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { GiHollowCat, GiSittingDog } from 'react-icons/gi';
import { RiFileUserLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/tech1.png';
import { useUser } from '../hooks/useUser';
import { MenuItem } from './components/MenuItem';
import { UserInfo } from './components/UserInfo';
import { Container, Menu, MenuItemLogOut } from './styles';

export function Header() {
  const navigate = useNavigate();
  const { signOutDev } = useUser();
  return (
    <Container>
      <Link to='/dashboard'>
        <img src={logoImg} alt="" />
      </Link>
      <Menu>
        <MenuItem
          title="Dashboard"
          icon={FaHome}
          action={() => navigate('/dashboard')}
        />
        <MenuItem
          title="ApiUsers"
          icon={FaUsers}
          action={() => navigate('/user')}
        />

        <MenuItem
          title="DogApi"
          icon={GiSittingDog}
          action={() => navigate('/dog')}
        />
        <MenuItem
          title="CatApi"
          icon={FaCat}
          action={() => navigate('/cat')}
        />
        <MenuItem
          title="ApiCrud"
          icon={RiFileUserLine}
          action={() => navigate('/crud')}
        />
      </Menu>
      <MenuItemLogOut>
        <MenuItem
          title="Exit"
          icon={FaSignOutAlt}
          action={signOutDev}
        />
        <UserInfo />
      </MenuItemLogOut>
    </Container>
  );
}
