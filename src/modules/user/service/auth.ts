import { authRepo } from "../repository";

export default class AuthService{
     static Login(credencial: { email: string; senha: string; }) {
         throw new Error('Method not implemented.');
     }
     async Login(LoginDTO:Login):Promise<TokenResponse | undefined>{
        return authRepo.Login(LoginDTO);

     }
}