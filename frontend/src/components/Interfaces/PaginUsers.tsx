export interface PaginUsers {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}