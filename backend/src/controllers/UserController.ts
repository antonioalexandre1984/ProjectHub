import { Request, Response } from 'express';
import EnableUserService from 'src/services/EnableUserService';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListuserService';
import UserRepository from '../repositories/UserRepository';


class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const listUsers = new ListUserService(userRepository);
    const users = await listUsers.execute();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const userRepository = new UserRepository();
    const createUser = new CreateUserService(userRepository);
    const user = await createUser.execute({
      name,
      email,
      password,
    });
    return res.json(user);
  }

  public async enable(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userRepository = new UserRepository();
    const enableUser = new EnableUserService(userRepository);
    const user = await enableUser.execute({
      id,
    });
    return res.json(user);
  }
}

export default UserController;
