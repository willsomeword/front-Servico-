
export default class UserRepoCliente {
    
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
            `http://localhost:3002/cliente/${userId}`,
            options
        );

        if (response.ok) {
            return (await response.json()) as UserType;
        } else {
            return undefined;
        }
    }
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

        const response = await fetch("http://localhost:3002/cliente", options)
  
        if(response.ok){
            return(await response.json()) as ClienteType[];
        }else {
            return undefined;
        }
    }
    async createCliente(data: ClienteType): Promise<ClienteType | undefined> {
        const token = sessionStorage.getItem("token");


        if (!token) return;


        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options: RequestInit = {
            method: "post",
            headers: header,
            mode: 'cors',
            body: JSON.stringify(data),
        };


        const response = await fetch(
            `http://localhost:3002/cliente`,

            options
        );

        if (response.ok) {
            return (await response.json()) as ClienteType;

        } else {
            return undefined;
        }
    }

    async UpdateCliente(data: ClienteType, idcliente:string): Promise<ClienteType | undefined> {
        const token = sessionStorage.getItem("token");


        if (!token) return;


        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options: RequestInit = {
            method: "put",
            headers: header,
            mode: 'cors',
            body: JSON.stringify(data),
        };


        const response = await fetch(
            `http://localhost:3002/cliente/${idcliente}`,

            options
        );

        if (response.ok) {
            return (await response.json()) as ClienteType;

        } else {
            return undefined;
        }
    }

}