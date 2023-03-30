import { IShowUser } from "../interfaces/IShowClient";
import Client from "../models/Client";
import ClientRepository from "../repositories/ClientRepository";

class ShowClientService {
    private clientRepository: ClientRepository;

    constructor(clientsRepository: ClientRepository) {
        this.clientRepository = clientsRepository;
    }

    public async execute({ id }: IShowUser): Promise<Client> {
        const user = await this.clientRepository.findById(id);

        if (!user) {
            throw new Error('User not found');
        }

        return user;

    }
}

export default ShowClientService;