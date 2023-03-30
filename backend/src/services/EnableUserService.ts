import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';
import AppError from 'src/errors/AppError';

interface Request {
    id: string;
}

class EnableUserService {
    private usersRepository: UserRepository;

    constructor(usersRepository: UserRepository) {
        this.usersRepository = usersRepository;
    }

    public async execute({ id }: Request): Promise<User> {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new AppError('User does not exist.', 400);
        }
        user.active = !user.active;

        await this.usersRepository.save(user);
        return user;
    }
}

export default EnableUserService;
