import { Request, Response } from 'express';
import ClientRepository from 'src/repositories/ClientRepository';
import CreateClientService from 'src/services/CreateClientService';
import DeleteClientService from 'src/services/DeleteClientService';
import PaginatedClientService from 'src/services/PaginatedClientService';
import ShowClientService from 'src/services/ShowClientService';
import UpdateClientService from 'src/services/UpdateClientService';
import ListClientService from '../services/ListClientService';

class ClientController {
  public async index(req: Request, res: Response): Promise<Response> {
    const clientRepository = new ClientRepository();
    const listClients = new ListClientService(clientRepository);
    const users = await listClients.execute();
    return res.status(201).json(users);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const clientRepository = new ClientRepository();
    const listClients = new ShowClientService(clientRepository);
    const user = await listClients.execute({ id });
    return res.status(201).json(user);
  }


  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, telephone, cpf, address } = req.body;
    const clientRepository = new ClientRepository();
    const createClient = new CreateClientService(clientRepository);
    const user = await createClient.execute({
      name,
      email,
      telephone,
      cpf,
      address
    });
    return res.status(201).json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, telephone, cpf, address } = req.body;
    const clientRepository = new ClientRepository();
    const updateClient = new UpdateClientService(clientRepository);
    const user = await updateClient.execute({
      id,
      name,
      email,
      telephone,
      cpf,
      address
    });
    return res.status(200).json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const clientRepository = new ClientRepository();
    const destroyClient = new DeleteClientService(clientRepository);
    await destroyClient.execute({ id });
    return res.status(204).json();
  }

  public async paginated(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { page } = request.query;
    const clientRepository = new ClientRepository();
    const clientsPaginated = new PaginatedClientService(clientRepository);
    const clients = await clientsPaginated.execute({
      page: page !== undefined ? parseInt(page.toString(), 10) : 1,
    });

    return response.json(clients);
  }

  public async search(req: Request, res: Response): Promise<Response> {
    const { name } = req.query;
    const clientRepository = new ClientRepository();
    const clients = await clientRepository.findByName(
      name?.toString() || '',);
    return res.json(clients);
  }
}

export default ClientController;
