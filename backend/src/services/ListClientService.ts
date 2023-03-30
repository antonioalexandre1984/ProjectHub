import Client from 'src/models/Client';
import ClientRepository from '../repositories/ClientRepository';

class ListClientService {
  private clientRepository: ClientRepository;

  constructor(clientsRepository: ClientRepository) {
    this.clientRepository = clientsRepository;
  }

  public async execute(): Promise<Client[]> {
    const clients = await this.clientRepository.findAll();
    return clients ? clients : [];
  }
}

export default ListClientService;
