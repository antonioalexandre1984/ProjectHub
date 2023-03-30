import AppError from 'src/errors/AppError';
import { hash } from 'bcryptjs';
import IUsersRepository from '../repositories/IUserRepository';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}
class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ name, email, password }: Request): Promise<User> {
    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }
    const passwordHash = await hash(password, 8);
    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;
