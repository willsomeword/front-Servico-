import * as React from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import Input from "../../input";
import { UserService } from "@/modules/user/service/user";
import { Cliente } from "@/modules/cliente/service/user";
import ComboBox from "../../combo_box";
import Button from "../../button";
import { servicoService } from "@/modules/service_module/service";
import Image from "next/image";




type Props = {
    setIsOpen: (param: boolean) => void;
    isEditing?: boolean;
    data?: UserType;
    atualizar?: () => void;

};

export interface genericCombo {
    id: string;
    nome: string;
}

export default function ModalFuncionario(props: Props) {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [senha, setSenha] = React.useState<string>("");
    const [dataNascimento, setDataNascimento] = React.useState<string>("");
    const [dataAdmissao, setDataAdmissao] = React.useState<string>("");
    const [dataDemissao, setDataDemissao] = React.useState<string>("");
    const [obsDemissao, setObsDemissao] = React.useState<string>("");
    const [rua, setRua] = React.useState<string>("");
    const [bairro, setBairro] = React.useState<string>("");
    const [cep, setCep] = React.useState<string>("");
    const [foto, setFoto] = React.useState<string>("");
    const [salario, setSalario] = React.useState<string>("");
    const [status, setStatus] = React.useState<string>("");
    const mockedDataStatus: genericCombo[] = [
        { id: "0", nome: "inativo" },
        { id: "1", nome: "ativo" },
    ]
    const onChangeName = (val: string) => {
        setName(val);
    };

    const onChangeEmail = (val: string) => {
        setEmail(val);
    };

    const onChangeSenha = (val: string) => {
        setSenha(val);
    };

    const onChangeDataNascimento = (val: string) => {
        setDataNascimento(val);
    };

    const onChangeDataDemissao = (val: string) => {
        setDataDemissao(val);
    };

    const onChangeDataAdmissao = (val: string) => {
        setDataAdmissao(val);
    };
    const onChangeObsDemissao = (val: string) => {
        setObsDemissao(val);
    };

    const onChangeRua = (val: string) => {
        setRua(val);
    };

    const onchangeBairro = (val: string) => {
        setBairro(val);
    };
    const onChangeCep = (val: string) => {
        setCep(val);
    };
    const onChangeFoto = (val: string) => {
        setFoto(val);
    };
    const onChangeSalario = (val: string) => {
        setSalario(val);
    };
    const onChangeStatus = (val: string) => {
        setStatus(val);
    };

    {/*
        const getFuncionario = async () => {
            const allData = await UserService.findAll();
            let aux: genericCombo[] = [];
            if (allData) {
                //mapeando os dados iterados
                allData.forEach((item, index) => {
                    aux.push({ id: item._id, nome: item.nome });
                });
            }

            setFuncionarios(aux);
        };

        const getcliente = async () => {
            const allData = await Cliente.findAll();
            let aux: genericCombo[] = [];
            if (allData) {
                //mapeando os dados iterados
                allData.forEach((item, index) => {
                    aux.push({ id: item._id, nome: item.nome });
                });
            }

            setCliente(aux);
        };
    */}
    const submitData = async () => {
        const mappingData: UserType = {
            rua: rua,
            ativo: true,
            status:status,
            nome: name,
            bairro: bairro,
            cep: cep,
            email: email,
            dataNascimento: dataNascimento,
            admin: false,
            salario: Number(salario),
            senha: senha,
            dataAdmissao: dataAdmissao,
            dataDemisao: dataDemissao,
            foto: foto,
            obsDemissao: obsDemissao


        };
        if (mappingData.nome != "" || mappingData.nome != null) {
            const dataSaved = await UserService.createFuncionario(mappingData);
            console.log(mappingData);
            if (dataSaved) {
                alert("servico inserido!");

            } else {
                alert("ocorreu um erro !")
            }


        }
        atualizarStateFather();
    };

    const submitUpdate = async () => {
        const mappingData: UserType = {
            status:status,
            rua: rua,
            ativo: true,
            nome: name,
            bairro: bairro,
            cep: cep,
            email: email,
            dataNascimento: dataNascimento,
            admin: false,
            salario: Number(salario),
            senha: senha,
            dataAdmissao: dataAdmissao,
            dataDemisao: dataDemissao,
            foto: foto,
            obsDemissao: obsDemissao,
            _id: props.data?._id,


        };
        if (props.data && props.data._id) {
            if (mappingData.nome != "" || mappingData.nome != null) {
                const dataSaved = await UserService.updateFuncionario(
                    mappingData,
                    props.data._id,
                );

                console.log(dataSaved);

                if (dataSaved) {
                    alert("Funcionario Alterado com sucesso!");

                } else {
                    alert(" Funcionario nao alterado .ocorreu um erro !")
                }


            }
        }
        atualizarStateFather();

    };



    React.useEffect(() => {
        if (props.isEditing && props.data) {
            setName(props.data.nome);
            setEmail(props.data.email);
            setDataNascimento(props.data.dataNascimento);
            setDataAdmissao(props.data.dataAdmissao!);
            setDataDemissao(props.data.dataDemisao!);
            setObsDemissao(props.data.obsDemissao!)
            setSenha(props.data.senha);
            setCep(props.data.cep)
            setRua(props.data.rua);
            setBairro(props.data.bairro);
            setSalario(props.data.salario.toString());
            setStatus(String(props.data.ativo));


        }
    }, []);
    // console.log(clientes);
    //esse trecho imprime o id do funcionario que vem do combobox
    //React.useEffect(() => {
    //  console.log(idFuncionarioToSend);
    //}, [idFuncionarioToSend]);

    const clear = () => {
        setName("");
        setEmail("");
        setSenha("");
        setCep("");
        setBairro("");
        setRua("");
        setSalario("");
        setStatus("");
        setFoto("");
        setDataAdmissao("");
        setDataDemissao("");
        setObsDemissao("");
        setDataNascimento("");




    };

    const atualizarStateFather = () => {
        if (props.atualizar) {
            props.atualizar();

        }

    }

    return (
        <>
            <div className={styles.dark}
                onClick={() => {
                    props.setIsOpen(false);
                    atualizarStateFather();
                }}
            />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalheader}>
                        <h5 className={styles.heading}>Modal Funcionario</h5>
                    </div>
                    <button
                        className={styles.closeBtn}
                        onClick={() => {
                            atualizarStateFather();
                            props.setIsOpen(false)
                        }}
                    >
                        <IoMdClose style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className={styles.modalContent}>
                        <div className={styles.wrappInputs} >
                            <Input
                                label="Name"
                                value={name}
                                alt="input for name"
                                onChange={onChangeName}
                                width={300}
                                placeholder="ex"
                                labelWeight={800}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            <Input
                                label="email"
                                value={email}
                                alt="exemplo email   @.com"
                                onChange={onChangeEmail}
                                width={300}
                                placeholder="ex"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            <Input
                                label="DataNascimento"
                                value={dataNascimento ? dataNascimento
                                    .substring(0, 10)
                                    : ""

                                }
                                alt="data nascimento"
                                onChange={onChangeDataNascimento}
                                width={300}
                                placeholder="ex"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                                type={"date"}
                            />
                            <Input
                                label="senha"
                                value={senha}
                                alt="input da senha"
                                onChange={onChangeSenha}
                                width={250}
                                placeholder="ex"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            <Input
                                label="rua"
                                value={rua}
                                alt="input rua"
                                onChange={onChangeRua}
                                width={250}
                                placeholder="ex type of service made"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />

                            <Input
                                label="cep"
                                value={cep}
                                alt="input do cep"
                                onChange={onChangeCep}
                                width={250}
                                placeholder="ex type of service made"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />


                            <Input
                                label="bairro"
                                value={bairro}
                                alt="input do bairro"
                                onChange={onchangeBairro}
                                width={250}
                                placeholder="ex type of service made"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />


                            <Input
                                label="Admissao"
                                type="date"
                                value={dataAdmissao ? dataAdmissao
                                    .substring(0, 10)
                                    : ""

                                }
                                alt="input da admissao"
                                onChange={onChangeDataAdmissao}
                                width={250}
                                placeholder="ex type of service made"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}

                            />
                             {props.isEditing ? (
                                <>
                                
                            <Input
                                label="Demissao"
                                type="date"
                                value={dataDemissao ? dataDemissao
                                    .substring(0, 10)
                                    : ""

                                }
                                alt="input da demissao"
                                onChange={onChangeDataDemissao}
                                width={250}
                                placeholder="ex type of service made"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />


                            <textarea
                               
                                value={obsDemissao}
                              
                                onChange={(ev)=> onChangeObsDemissao(ev.target.value)}
                                rows={2}
                                placeholder="Motivo da demissao"
                         

                            />
                            <ComboBox
                                        data={mockedDataStatus}
                                        label="Status"
                                        currentValue={props.isEditing &&
                                            props.data &&
                                            props.data.status != null
                                            ? props.data.status.toString()
                                            : ""} stateToGetId={function (value: React.SetStateAction<string>): void {
                                                throw new Error("Function not implemented.");
                                            } }                       
                                                 />
                                </>

                             ):(
                                ""
                             )}


                            <Input
                                label="salario"
                                value={salario}
                                alt="input do salario"
                                onChange={onChangeSalario}
                                width={250}
                                placeholder="ex type of service made"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />

                            <Input
                                label="Foto"
                                value=''
                                alt=""
                                onChange={onChangeFoto}
                                width={900}
                                placeholder="cadastre a foto"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                                type="file"
                            />
                            {foto && <Image
                                src={`${foto}`}
                                alt={'exemplo'}
                                width={50}
                                height={50}

                            />}







                        </div>
                        <div className={styles.modalFooter}>
                            <Button
                                onClick={clear}
                                backgroundColor={"red"}
                                padding={[8, 35, 8, 35]}
                                borderRadius
                                color='#85c2c2'
                                fontSize={19}
                            >
                                clear
                            </Button>

                            <Button
                                onClick={props.data && props.isEditing ? submitUpdate : submitData}
                                backgroundColor={"#081225"}
                                padding={[8, 50, 8, 50]}
                                borderRadius
                                color='#85c2c2'
                                fontSize={19}
                            >
                                save
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}