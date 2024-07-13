import * as React from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import Input from "../../input";
import { UserService } from "@/modules/user/service/user";
import { Cliente } from "@/modules/cliente/service/user";
import ComboBox from "../../combo_box";
import Button from "../../button";
import { servicoService } from "@/modules/service_module/service";




type Props = {
    setIsOpen: (param: boolean) => void;
    isEditing?: boolean;
    data?: ServicoTypeReturned;
    atualizar? : () => void;
   
};

export interface genericCombo {
    id: string;
    nome: string;
}

export default function ModalServico(props: Props) {
    const [name, setName] = React.useState<string>("");
    const [valor, setvalor] = React.useState<string>("");
    const [descricao, setdescricao] = React.useState<string>("");
    const [temposervico, settemposervico] = React.useState<string>("");
    const [funcioarios, setFuncionarios] = React.useState<genericCombo[]>([]);
    const [idFuncionarioToSend, setIdFuncionarioToSend] = React.useState<string>("");
    const [clientes, setCliente] = React.useState<genericCombo[]>([]);
    const [idClienteToSend, setidClienteToSend] = React.useState<string>("");
    const [statusId, setStatusId] = React.useState<string>("");
    const mockedDataStatus: genericCombo[] = [
        { id: "0", nome: "agendado" },
        { id: "1", nome: "em atendimento" },
        { id: "2", nome: "finalizado" },
        { id: "3", nome: "cancelado" }];
    const onChangeName = (val: string) => {
        setName(val);
    };

    const onChangevalor = (val: string) => {
        setvalor(val);
    };

    const onChangeDescricao = (val: string) => {
        setdescricao(val);
    };

    const onChangeTempoServico = (val: string) => {
        settemposervico(val);
    };

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

    const submitData = async () => {
        const mappingData: ServicoType = {
            ativo: true,
            cliente: idClienteToSend,
            funcionario: idFuncionarioToSend,
            nome: name,
            status: Number(statusId),
            valor: Number(valor),
            descricao: descricao,
            tempoServico: Number(temposervico),

        };
        if (mappingData.nome != "" || mappingData.nome != null) {
            const dataSaved = await servicoService.createServico(mappingData);

            if (dataSaved) {
                alert("servico inserido!");

            } else {
                alert("ocorreu um erro !")
            }


        }
        atualizarStateFather();
    };

    const submitUpdate = async () => {
        const mappingData: ServicoType = {
            _id: props.data?._id,
            ativo: true,
            cliente: idClienteToSend,
            funcionario: idFuncionarioToSend,
            nome: name,
            status: Number(statusId),
            valor: Number(valor),
            descricao: descricao,
            tempoServico: Number(temposervico),

        };
        if (props.data && props.data._id) {
            if (mappingData.nome != "" || mappingData.nome != null) {
                const dataSaved = await servicoService.updateServico(
                    props.data._id,
                    mappingData);

                if (dataSaved) {
                    alert("servico alterado!");

                } else {
                        alert(" servico nao alterado .ocorreu um erro !")
                }


            }
        }
        atualizarStateFather();

    };



    React.useEffect(() => {
        if (props.isEditing && props.data) {
            setName(props.data.nome);
            setvalor(props.data.valor.toString());
            setdescricao(props.data.descricao ?? "...");
            settemposervico(props.data.tempoServico?.toString()!);
            setIdFuncionarioToSend(props.data.funcionario?._id!);

            setStatusId(props.data.status.toString());
            setidClienteToSend(props.data.cliente?._id!);
            getFuncionario();
            getcliente();

        } else {
            getFuncionario();
            getcliente();
        }

    }, []);
    // console.log(clientes);
    //esse trecho imprime o id do funcionario que vem do combobox
    //React.useEffect(() => {
    //  console.log(idFuncionarioToSend);
    //}, [idFuncionarioToSend]);

    const clear = () => {
        setName("");
        setvalor("");
        setdescricao("");
        settemposervico("");
        setIdFuncionarioToSend("");

        setStatusId("");
        setidClienteToSend("");
    };

    const atualizarStateFather = () =>{
        if(props.atualizar){   
            props.atualizar();
           
        }
        
    }

    return (
        <>
            <div className={styles.dark}
             onClick={() => { props.setIsOpen(false);
                     atualizarStateFather();
                }}
              />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalheader}>
                        <h5 className={styles.heading}>Dialog</h5>
                    </div>
                    <button
                        className={styles.closeBtn}
                        onClick={() =>{
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
                                label="Valor"
                                value={valor}
                                alt="R$ 200"
                                onChange={onChangevalor}
                                width={300}
                                placeholder="ex"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            <Input
                                label="Descrição"
                                value={descricao}
                                alt="input for descricao"
                                onChange={onChangeDescricao}
                                width={250}
                                placeholder="ex"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            <Input
                                label=" Tempo de Serviço"
                                value={temposervico}
                                alt="input for time of service"
                                onChange={onChangeTempoServico}
                                width={250}
                                placeholder="ex type of service made"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            { }
                            <ComboBox
                                data={funcioarios}
                                label="Funcionario"
                                stateToGetId={setIdFuncionarioToSend}
                                currentValue={
                                    idFuncionarioToSend
                                }
                            />
                            <ComboBox data={clientes}
                                label="Cliente"
                                stateToGetId={setidClienteToSend}
                                currentValue={
                                 idClienteToSend
                                }
                            />
                            <ComboBox data={mockedDataStatus}
                                
                                label="Status"
                                stateToGetId={setStatusId}
                                currentValue={
                                    props.isEditing &&
                                        props.data &&
                                        props.data.status != null
                                        ? props.data.status.toString()
                                        : ""
                                }
                            />

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