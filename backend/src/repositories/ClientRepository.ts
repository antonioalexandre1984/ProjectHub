import { EntityRepository, Like, Repository, getRepository } from 'typeorm';
import Client from '../models/Client';
import IClientRepository from './IClientRepository';
import IClient from "src/interfaces/IClient.";


class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findAll(): Promise<Client[]> {
    return this.ormRepository.find();

  }

  public async findAllPaginated(page: number): Promise<[Client[], number]> {
    return this.ormRepository.findAndCount({
      skip: page,
      take: 10,
    });
  }

  public async findById(id: string): Promise<Client | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async findByName(name: string): Promise<Client[] | undefined> {
    return this.ormRepository.find({
      name: Like(`%${name}%`),
    });
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    return this.ormRepository.findOne({
      where: { email },
    });
  }

  public async findByCpf(cpf: string): Promise<Client | undefined> {
    return this.ormRepository.findOne({
      where: { cpf },
    });
  }

  public async create({ name, email, telephone, cpf, address }: IClient): Promise<Client> {
    const client = this.ormRepository.create({
      name,
      email,
      telephone,
      cpf,
      address,
    });
    return this.ormRepository.save(client);
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

}
export default ClientRepository;
