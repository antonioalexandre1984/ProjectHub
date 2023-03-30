import IUser from "../interfaces/IUser";
import User from "../models/User";

export default interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    create(user: IUser): Promise<User>;
    save(user: IUser): Promise<User>;

}