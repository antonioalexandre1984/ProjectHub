import IClient from "src/interfaces/IClient.";
import Client from "src/models/Client";

export default interface IClientRepository {
    findAll(): Promise<Client[]>;
    findAllPaginated(page: number): Promise<[Client[], number]>;
    findByName(name: string): Promise<Client[]>;
    findById(id: string): Promise<Client | undefined>;
    findByEmail(email: string): Promise<Client | undefined>;
    findByCpf(cpf: string): Promise<Client | undefined>;
    create(client: IClient): Promise<Client>;
    save(client: IClient): Promise<Client>;
    delete(id: string): Promise<void>;
}