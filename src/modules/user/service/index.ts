import UserRepo from "../repository/user";



export default class User{
    static findUserById(currentUserId: string) {
      throw new Error('Method not implemented.');
    }
    async findUserById(userId: string): Promise<UserType | undefined>{
        const userRepo = new UserRepo(); // Instantiate UserRepo
       const gettingUserById = userRepo.findUserById(userId);
        return gettingUserById;
    }
    async findAll(): Promise<UserType[] | undefined>{
      const userRepo = new UserRepo();
      const gettingUser = await userRepo.findAll();
      return gettingUser;
  }
  async createFuncionario(data:UserType): Promise<UserType | undefined>{
    const FuncRepo = new UserRepo();
    const FuncionarioCreate = await FuncRepo.createFuncionario(data);
    return FuncionarioCreate;
  }
  async updateFuncionario (data:UserType, id:string) : Promise<UserType | undefined>{
    const Funcionario = new UserRepo();
    const postFuncionario = await Funcionario.updateFuncionario(data,  id);
    return postFuncionario;
  }
   
}