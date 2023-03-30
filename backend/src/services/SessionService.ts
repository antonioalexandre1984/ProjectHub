import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';
import User from '../models/User';
import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import IUser from '../interfaces/IUser';


interface ICreateSession {
    email: string;
    password: string;
}

interface IUserAuthenticated {
    token: string;
    user: IUser;
}
class SessionService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ email, password }: ICreateSession): Promise<IUserAuthenticated> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Credenciais inválidas', 401);
        }

        const passwordCompare = await compare(password, user.password);

        if (!passwordCompare) {
            throw new AppError('Credenciais inválidas', 401);
        }

        if (!user.active) {
            throw new AppError('Usuário inativo', 401);
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id,
            expiresIn: authConfig.jwt.expiresIn,
        });

        return {
            token,
            user,
        };
    }
}

export default SessionService;
