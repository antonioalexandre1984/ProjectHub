import AppError from "src/errors/AppError";
import Client from "src/models/Client";
import IClientsRepository from "../repositories/IClientRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    telephone: string;
    cpf: string;
    address: string;
}

class UpdateClientService {
    private clientsRepository: IClientsRepository;

    constructor(clientsRepository: IClientsRepository) {
        this.clientsRepository = clientsRepository;
    }

    public async execute({ id, name, email, telephone, cpf, address }: IRequest): Promise<Client> {
        const client = await this.clientsRepository.findById(id);

        console.log(client);
        if (!client) {
            throw new AppError('Client does not exist.', 400);
        }
        if (email !== client.email) {
            const verifyEmail = await this.clientsRepository.findByEmail(email);

            if (verifyEmail) {
                throw new AppError('Email already in use.', 400);
            }
        }

        client.name = name;
        client.email = email;
        client.telephone = telephone;
        client.cpf = cpf;
        client.address = address;

        await this.clientsRepository.save(client);
        return client;

    }
}

export default UpdateClientService;