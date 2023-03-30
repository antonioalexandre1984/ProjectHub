import User from '../models/User';
import UsersRepository from '../repositories/UserRepository';

class ListUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();
    return users ? users : [];
  }
}

export default ListUserService;
