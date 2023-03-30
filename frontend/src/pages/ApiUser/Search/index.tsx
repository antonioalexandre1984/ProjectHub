import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchFormContainer } from './styles';
import { Input } from '../../../components/Input';



interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  username: string;
  dob: {
    age: number;
  }
}

interface UsersState {
  users: User[];
  pageCount: number;
}

export function Search() {
  const [state, setState] = useState<UsersState>({
    users: [],
    pageCount: 0
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('https://randomuser.me/api', {
      params: {
        results: 10,
        page: 1,
        name: searchTerm
      }
    })
      .then((response: AxiosResponse<any>) => {
        const users = response.data.results.map((result: any) => {
          return {
            name: { first: result.name.first, last: result.name.last },
            email: result.email,
            username: result.login.username,
            dob: { age: result.dob.age }
          }
        });
        const pageCount = Math.ceil(response.data.info.results / 10);
        setState({ users, pageCount });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Busque por transações"
        onChange={handleSearch}
      />

      <button type="submit" /* disabled={isSubmitting} */>
        {/*   <MagnifyingGlass size={20} /> */}
        Pesquisar
      </button>
    </SearchFormContainer>
  );
}