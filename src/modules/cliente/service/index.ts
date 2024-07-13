import UserRepoCliente from "../repository/user";


export default class UserServiceCliente {
  static findUserById(currentUserId: string) {
    throw new Error('Method not implemented.');
  }
  async findUserById(userId: string): Promise<UserType | undefined> {
    const userRepo = new UserRepoCliente(); // Instantiate UserRepo
    const gettingUserById = userRepo.findUserById(userId);
    return gettingUserById;
  }
  async findAll(): Promise<ClienteType[] | undefined> {
    const userRepo = new UserRepoCliente();
    const gettingUser = await userRepo.findAll();
    return gettingUser;

  }
  async createServicoCliente(data:ClienteType): Promise<ClienteType | undefined>{
    const userRepo = new UserRepoCliente();
    const gettingCliente = await userRepo.createCliente(data);
    return gettingCliente;

  }

  async updateCliente(data:ClienteType, idcliente:string):  Promise<ClienteType | undefined>{
    const userRepo = new UserRepoCliente();
    const updateCliente = await userRepo.UpdateCliente(data, idcliente);
    return updateCliente;
  }



}