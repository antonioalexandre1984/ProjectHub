import { ChangeEvent, FormEvent, SetStateAction, useCallback, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Store } from 'react-notifications-component';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/hooks/useUser';
import { IClient } from '../../components/Interfaces/Client';
import { api } from '../../services/api';
import { ClientsPageContainer, TableContainer, ActionsContainer, ActionsButton, NewUser, Pagination, PaginationButton, PaginationButtonItem, InfoContent } from './styles';

export function CrudApi() {

  const navigate = useNavigate()
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { token } = useUser();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(0);
  const elementsPerPage = 10;


  const loadClients = useCallback(async () => {
    try {
      const Auth = `Bearer ${token}`;
      setLoading(true);
      const res = await api.get(`http://localhost:3010/api/v1/clients/paginated?page=${currentPage}&elementsPerPage=${elementsPerPage}&skip=${skip}`, {
        headers: { Authorization: Auth, },
      });

      setLoading(false);
      setError(false);
      console.log(res.data);
      setClients(res.data.data);
      setTotalPages(res.data.totalPages);
      setPage(res.data.page);


    } catch (e) {
      setLoading(false);
      setError(true);
      console.error(e);
      Store.addNotification({
        title: "Error!",
        message: "Failed to list user!",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  }, [currentPage, elementsPerPage, skip, token]);


  function handleDeleteClient(id: string) {
    api.delete(`http://localhost:3010/api/v1/clients/${id}`);
    loadClients();
  }

  function handleEditClient(id: string) {
    navigate(`/form/${id}`);
  }

  function handleNewTask() {
    navigate('/form')
  }

  useEffect(() => { loadClients() }, [loadClients]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar clientes</div>;
  }

  const pages = Array.from({ length: Math.ceil(totalPages) }, (_, i) => i + 1);


  return (
    <ClientsPageContainer>
      <InfoContent>
        <NewUser onClick={handleNewTask}>Add User</NewUser>
      </InfoContent>
      <TableContainer>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Address</th>
            <th>CPF</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>{user.address}</td>
                <td>{user.cpf}</td>
                <td>
                  <ActionsContainer>
                    <ActionsButton
                      color="#1565c0"
                      onClick={() => handleEditClient(user.id)}
                    ><FaEdit /></ActionsButton>
                    <ActionsButton
                      color="#c62828"
                      onClick={() => handleDeleteClient(user.id)}
                    >
                      <FaTrash />
                    </ActionsButton>
                  </ActionsContainer>
                </td>
              </tr>
            ))}
        </tbody>
      </TableContainer>
      <Pagination>
        <div>
          Total of Users: {clients.length}
        </div>
        <PaginationButton>
          {currentPage !== 1 && (
            <PaginationButtonItem
              onClick={() => handlePageChange(currentPage - 1)}
              color='primary'
            >
              <span>Previous</span>
            </PaginationButtonItem>
          )}
          {pages.map((pageNumber) => (

            <PaginationButtonItem
              color='primary'
              key={pageNumber}
              isSelect={pageNumber === currentPage}
              onClick={() => handlePageChange(page)}
            >{pageNumber}</PaginationButtonItem>
          ))}

          {currentPage < pages.length && (
            <PaginationButtonItem
              onClick={() => handlePageChange(currentPage + 1)}
              color='primary'
            >
              <span>Next</span>
            </PaginationButtonItem>
          )}
        </PaginationButton>
      </Pagination>
    </ClientsPageContainer >
  );
}
