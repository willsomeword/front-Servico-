interface Login {
    email: string;
    senha: string;
}
interface TokenResponse {
    email: string;
    token: string;
}

interface TokenDecode {
    id: string;
    iat: number;
}

interface UserType {
    _id?: string;
    nome: string;
    email: string;
    dataNascimento: string;
    dataAdmissao?: string;
    dataDemisao?: string;
    obsDemissao?: string;
    rua: string;
    bairro: string;
    cep: string;
    foto?: string;
    ativo?: boolean;
    salario: number;
    admin?: boolean;
    senha:string;
    status: string;
}

interface FuncionarioType {
    _id?: string;
    nome: string;
    email: string;
    dataNascimento: Date;
    dataAdmisaso?: Date;
    dataDemisao?: Date;
    obsDemissao?: string;
    rua: string;
    bairro: string;
    cep: string;
    foto?: string;
    ativo?: boolean;
    salario: number;
    admin?: boolean;

}


interface ClienteType {
    _id?: string;
    nome: string;
    dataNascimento: string;
    rua: string;
    obs?: string; /*? quer dizer que nao é obrigatorio*/
    bairro: string;
    cep: string;
    foto?: string;
    ativo?: boolean;
  

}


interface ServicoType {
    _id?: string;
    nome: string;
    descricao?: string;
    valor: number;
    tempoServico?: number;
    ativo: boolean;
    funcionario: string;
    cliente: string;
    status: number;
    funcionario: UserType;
    cliente: ClienteType;
}


interface ServicoTypeReturned {
    _id: string;
    nome: string;
    descricao?: string;
    valor: number;
    tempoServico?: number;
    ativo: boolean;
    funcionario: UserType;
    cliente: ClienteType;
    status: number;
}
