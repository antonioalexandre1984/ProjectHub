export default interface IPaginated<T> {
  data: T[];
  totalElements: number;
  page: number;
  take: number;
  skip: number;
  elements: number;
  elementsPerPage: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}
