import AppError from "src/errors/AppError";
import IClientRepository from "src/repositories/IClientRepository";

interface IRequest {
    id: string;
}

class DeleteClientService {
    private clientsRepository: IClientRepository;

    constructor(clientsRepository: IClientRepository) {
        this.clientsRepository = clientsRepository;
    }

    public async execute({ id }: IRequest): Promise<void> {
        const client = await this.clientsRepository.findById(id);

        if (!client) {
            throw new AppError('Client not found.', 400);
        }

        await this.clientsRepository.delete(id);
    }
}

export default DeleteClientService;