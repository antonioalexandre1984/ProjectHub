export default interface IPaginated<T> {
  data: T[];
  totalElements: number;//
  page: number;//pagina atual no front
  take: number;//
  skip: number;//
  elements: number;//total de elementos na query
  elementsPerPage: number;//total de elementos por pagina
  totalPages: number;//total de paginas
  firstPage: boolean;//se é a primeira pagina
  lastPage: boolean;//
}
