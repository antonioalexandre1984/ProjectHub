import IClient from "src/interfaces/IClient.";
import IPaginated from "../interfaces/IPaginated";
import Client from "../models/Client";
import IClientRepository from "../repositories/IClientRepository";

interface IRequest {
    page: number;
}

/* class PaginatedClientService {
    private clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    }

    public async execute({ page }: IRequest): Promise<IPaginated<Client>> {
        const [clients, total] = await this.clientRepository.findAllPaginated(page * 10);

        const totalPages = Math.ceil(total / 10);

        const response: IPaginated<Client> = {
            data: clients,
            totalElements: total,
            page,
            take: 10,
            skip: page * 10,
            elements: clients.length,
            elementsPerPage: 10,
            totalPages,
            firstPage: page === 0,
            lastPage: page === totalPages + 1,
        };

        return response;
    }

} */

class PaginatedClientService {
    private clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    }

    public async execute({ page }: IRequest): Promise<IPaginated<Client>> {
        const pageToShow = Math.max(0, page - 1);
        const [clients, total] = await this.clientRepository.findAllPaginated(pageToShow * 10);

        const totalPages = Math.ceil(total / 10);

        const elementsPerPage = (page === totalPages && total % 10 !== 0) ? total % 10 : 10;

        const response: IPaginated<Client> = {
            data: clients,
            totalElements: total,
            page: pageToShow + 1,
            take: 10,
            skip: pageToShow * 10,
            elements: clients.length,
            elementsPerPage,
            totalPages,
            firstPage: pageToShow === 0,
            lastPage: pageToShow + 1 === totalPages,
        };

        return response;
    }
}
export default PaginatedClientService;

//Aqui estamos usando Math.max para garantir que a página seja pelo menos 1. Além disso, estamos verificando se a página atual é a última e se o número de elementos restantes é menor que 10. Se sim, atribuímos esse valor a elementsPerPage para garantir que a última página mostre apenas os elementos restantes.