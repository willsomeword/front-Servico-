
export default class UserRepo {
    
    async findUserById(userId: string): Promise<UserType | undefined> {
        const token = sessionStorage.getItem("token");

        if (!token) return;
        console.log(userId);
        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        

        const options: RequestInit = {
            method: "GET",
            headers: header,
            mode: "cors",

        };

        const response = await fetch(
            `http://localhost:3002/funcionario/${userId}`,
            options
        );

        if (response.ok) {
            return (await response.json()) as UserType;
        } else {
            return undefined;
        }
    };
    async findAll(){
        const token = sessionStorage.getItem("token");

        if (!token)return;

        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options: RequestInit ={
            method:"GET",
            headers:header,
            mode:"cors",
        };

        const response = await fetch("http://localhost:3002/funcionario", options)
      
        if(response.ok){
            return(await response.json()) as UserType[];
        }else {
            return undefined;
        }
    }
    
    async createFuncionario(data:UserType): Promise<UserType | undefined>{
        const token = sessionStorage.getItem("token");

        if (!token)return;

        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options: RequestInit ={
            method:"POST",
            headers:header,
            mode:"cors",
            body: JSON.stringify(data),
        };

        const response = await fetch("http://localhost:3002/funcionario", options);
    
        if(response.ok){
            return(await response.json()) as UserType;
        }else {
            return undefined;
        }
    }


    async updateFuncionario(data:UserType, id:string): Promise<UserType | undefined>{
        const token = sessionStorage.getItem("token");

        if (!token)return;

        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options: RequestInit ={
            method:"put",
            headers:header,
            mode:"cors",
            body: JSON.stringify(data),
        };

        const response = await fetch(`http://localhost:3002/funcionario/${id}`, options);
    
        if(response.ok){
            return(await response.json()) as UserType;
        }else {
            return undefined;
        }
    }
}