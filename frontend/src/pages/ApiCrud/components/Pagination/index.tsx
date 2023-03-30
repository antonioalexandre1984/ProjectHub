import { Container, PaginationItem } from './styles';

interface PaginationProps {
  clientsPerPage: number;
  totalClients: number;
  paginate: (number: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

export const Paginate = ({ clientsPerPage, totalClients, paginate, previousPage, nextPage }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <PaginationItem
        isSelect={true}
        onClick={previousPage}
      >
        Prev
      </PaginationItem>
      {pageNumbers.map((number) => (
        <li key={number}
          className="page-number"
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}
      <PaginationItem
        isSelect={true}
        className="page-number"
        onClick={nextPage}
      >
        Prev
      </PaginationItem>
    </Container>
  );
}
