import React from "react";
import styles from "./styles.module.css";
import Button from "../button";
import Modal from "../modals/modal_servico";
import { useSelector } from "react-redux";
import dataSlice, { getLayoutDisposition } from "@/redux/dataSlice";
import TableServico from "./components/servico/table_servico"
import { servicoService } from "@/modules/service_module/service";
import { Cliente } from "@/modules/cliente/service/user";
import CardServico from "./components/servico/card_servico";
import CardFuncionario from "./components/funcionario/card_funcionario";
import ModalServico from "../modals/modal_servico";
import { UserService } from "@/modules/user/service/user";
import UserRepo from "@/modules/user/repository/user";
import ModalFuncionario from "../modals/modal_funcionario";
import ModalCliente from "../modals/modal_cliente";
import TableCliente from "./components/cliente/table_cliente";
import CardCliente from "./components/cliente/card_cliente";
import TableFuncionario from "./components/funcionario/table_funcionario";





export enum typeTable {

    servico = "servico",
    funcionario = "funcionario",
    cliente = "cliente",

}

type Props = {
    type: typeTable,

};

export default function TableInfo(props: Props) {
    const [openModal, setOpenModal] = React.useState<boolean>();
    const [openModalCliente, setOpenModalCliente] = React.useState<boolean>();
    const [openModalFuncionario, setOpenModalFuncionario] = React.useState<boolean>();
    const currentLayoutState: any = useSelector(getLayoutDisposition);
    const [clienteData, setClienteData] = React.useState<ClienteType[]>([]);
    const [FuncionarioData, setFuncionarioData] = React.useState<UserType[]>([]);
    const [servicoData, setServicoData] = React.useState<ServicoType[]>([]);
    const [atualizar, setAtualizar] = React.useState<boolean>(false);



    const getService = async () => {
        const servico = await servicoService.getAllService();

        if (servico && servico.length > 0) {
            servico.reverse();
            setServicoData(servico);
        }
    }

    const getCliente = async () => {
        const cliente = await Cliente.findAll();
        if (cliente && cliente.length > 0) {
            setClienteData(cliente)
        }
    }

    const getUser = async () => {
        const userdata = await UserService.findAll();
        console.log(userdata);
        if (userdata && userdata.length > 0) {
            setFuncionarioData(userdata);
        }
    }


    const handleAddServico = (value: boolean) => {
        setOpenModal(value);
    };


    const handleAddCliente = (value: boolean) => {
        setOpenModalCliente(value);
    };



    const atualizandoRender = () => {
        setAtualizar(!atualizar);

    }

    React.useEffect(() => {
        switch (props.type) {
            case typeTable.servico:
                getService();
                // Do something when props.type is typeTable.servico
                break;
            case typeTable.cliente:
                getCliente();
                break;
            case typeTable.funcionario:
                getUser();
                break;


        }
    }, [atualizar]);

    switch (props.type) {
        case typeTable.servico:

        const handleAddServico = (value: boolean) => {
            setOpenModal(value);
        };

            return (
                <>
                  

                    <div className={styles.wrapper}>
                    {openModal &&(
                        <ModalServico
                         setIsOpen={handleAddServico} 
                         atualizar={atualizandoRender}
                          />
               
                    )}
                        <div className={styles.header}>
                            <div>
                                <p className={styles.title}>Serviços Cadastrados</p>
                                <p>{servicoData.length} cadastrados</p>
                            </div>
                            <Button
                                onClick={() => handleAddServico(true)}
                                backgroundColor={"#081225"}
                                padding={[8, 50, 8, 50]}
                                borderRadius
                                color="#B5C2CA"
                                fontSize={19}
                                fontWeight={500}
                            >
                                Cadastrar Servico
                            </Button>
                        </div>
                        {currentLayoutState ? (
                            <TableServico data={servicoData} atualizar={atualizandoRender} />
                        ) : (
                            <CardServico data={servicoData} atualizar={atualizandoRender} />
                        )}
                      
                    </div>

               </>
                
            );



        case typeTable.cliente:

            return (

            
                
                    <div className={styles.wrapper}>
                       {openModalCliente && (
                        <ModalCliente setIsOpen={handleAddCliente} atualizar={atualizandoRender} />
                    )}
                    

                        <div className={styles.header}>
                            <div>
                                <p className={styles.title}>Clientes Cadastrados</p>
                                <p>{clienteData.length} cadastrados</p>
                            </div>
                            <Button
                                onClick={() => handleAddCliente(true)}
                                backgroundColor={"#081225"}
                                padding={[8, 50, 8, 50]}
                                borderRadius
                                color="#B5C2CA"
                                fontSize={19}
                                fontWeight={500}
                            >
                                Cadastrar Clientes
                            </Button>
                        </div>
                        {currentLayoutState ? (
                            <TableCliente data={clienteData} atualizar={atualizandoRender} />
                        ) : (
                            <CardCliente data={clienteData} atualizar={atualizandoRender} />
                        )}
                    </div>
                    
               
            );


        case typeTable.funcionario:

            const handleAddFuncionario = (value: boolean) => {
                setOpenModalFuncionario(value);
            };

            return (
                <div className={styles.wrapper}>
                    {openModalFuncionario && (
                        <ModalFuncionario setIsOpen={handleAddFuncionario} atualizar={atualizandoRender} />
                    )}
                    <div className={styles.header}>
                        <div>
                            <p className={styles.title}>Serviços Cadastrados</p>
                            <p>{FuncionarioData.length} cadastrados</p>
                        </div>
                        <Button
                            onClick={() => handleAddFuncionario(true)}
                            backgroundColor={"#081225"}
                            padding={[8, 50, 8, 50]}
                            borderRadius
                            color="#B5C2CA"
                            fontSize={19}
                            fontWeight={500}
                        >
                            Cadastrar Servico
                        </Button>
                    </div>
                    {currentLayoutState ? (
                        <TableFuncionario data={FuncionarioData} atualizar={atualizandoRender} />
                    ) : (
                        <CardFuncionario data={FuncionarioData} atualizar={atualizandoRender} />
                    )}
                </div>
            );
            
    }
}



























{/*case typeTable.servico:



return (
    <>
        {openModal ? (
            <ModalServico setIsOpen={handleAddServico} atualizar={atualizandoRender} />
        ) : (
            <></>

        )}

        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div>
                    <p className={styles.title}>Serviços Cadastrados</p>
                    <p>{servicoData.length} cadastrados</p>
                </div>
                <Button
                    onClick={() => handleAddServico(true)}
                    backgroundColor={"#081225"}
                    padding={[8, 50, 8, 50]}
                    borderRadius
                    color="#B5C2CA"
                    fontSize={19}
                    fontWeight={500}
                >
                    Cadastrar Servico
                </Button>
            </div>
            {currentLayoutState ? (
                <TableServico data={servicoData} atualizar={atualizandoRender} />
            ) : (
                <CardServico data={servicoData} atualizar={atualizandoRender} />
            )}
        </div>

    </>
);

    */}