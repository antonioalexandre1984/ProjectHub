import AppError from 'src/errors/AppError';
import Client from 'src/models/Client';
import IClientRepository from 'src/repositories/IClientRepository';

interface Request {
  name: string;
  email: string;
  telephone: string;
  cpf: string;
  address: string;
}

class CreateClientService {
  private clientRepository: IClientRepository;

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository;
  }

  public async execute({ name, email, telephone, cpf, address }: Request): Promise<Client> {
    const verifyClient = await this.clientRepository.findByEmail(email);
    if (verifyClient) {
      throw new AppError('Email address already used.!', 400);
    }

    const client = await this.clientRepository.create({
      name,
      email,
      telephone,
      cpf,
      address,
    });
    return client;
  }
}

export default CreateClientService;
