import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ClientsApi } from '../../components/Interfaces/ClientsApi';
import { Container, CardContainer, Pagination, SearchBar } from './styles';
import { Search } from './Search';
import { Card } from './Card';
import { Spinner } from '../../components/Spinner';

interface UsersListProps {
  onSelectUser: (user: ClientsApi) => void;

}

export function ApiUser({ onSelectUser }: UsersListProps) {
  const [users, setUsers] = useState<ClientsApi[]>([]);
  const [searchTerm, setSearchTerm] = useState('');// Adicionar um estado para o termo de pesquisa
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      axios
        .get(`https://randomuser.me/api?page=${page}&results=9`)
        .then(response => {
          console.log(response.data.results);
          setUsers(response.data.results);
          setLoading(false);
        });
    } catch (e) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }, [page]);

  useEffect(() => {
    loadUsers();
  }, [page]);

  const filteredUsers = users.filter(user => {
    return user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.login.username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>User Search</h1>
      {/* <Search /> */}

      <SearchBar>
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      <CardContainer>
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id.value} onClick={() => onSelectUser(user)}>
              <Card user={user} />
            </li>
          ))}
        </ul>
        <Pagination>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Anterior
          </button>
          <button
            onClick={() => setPage(page + 1)}
          >
            Próximo
          </button>
        </Pagination>
        <Pagination />
      </CardContainer>
    </Container>
  );
};



