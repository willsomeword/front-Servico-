import * as React from "react";
import styles from "./styles.module.css";
import Modal from "@/components/modals/modal_servico";
import ModalServico from "@/components/modals/modal_servico";
import ModalCliente from "@/components/modals/modal_cliente";
import { BiBorderRadius } from "react-icons/bi";

type Props = {
    data: ClienteType[];
    atualizar: () => void;
};

export default function TableCliente(props: Props) {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<ClienteType>();

  
    const renderStatus = (valor: number): string => {
        switch (valor) {
            case 0:
                return "agendado";
            case 1:
                return "em atendimento";
            case 2:
                return "finalizado";
            case 3:
                return "cancelado";
            default:
                return "";
        }
    }

    const showModalFun = (val: boolean) => {
        setShowModal(val);
    }

    return (
        <>
            <div style={{ marginTop: "20px", overflow:"auto", maxHeight:"190px"}}>
                {showModal && (
                <ModalCliente 
                setIsOpen={showModalFun}
                 data={selectedItem} 
                 isEditing={true} 
                atualizar={props.atualizar} 
                />
                )}
                <table className={styles.table}>
                    <thead>
                        <th>Nome</th>
                        <th>Data de nascimento</th>
                        <th>CEP</th>
                        <th>Observação</th>
                        <th>Ativo</th>
                    </thead>

                    <tbody >

                        {props.data.map((itemIterator, index) => {
                            return (
                                <tr key={index}
                                
                                    onClick={() => {
                                        setSelectedItem(itemIterator);
                                        setShowModal(true);
                                    }}
                                >
                                    <td>{itemIterator.nome}</td>
                                    <td>{itemIterator.dataNascimento.toString()}</td>
                                    <td>{itemIterator.cep}</td>
                                    <td>{itemIterator.obs ?? "..."}</td>
                                    <td>{itemIterator.ativo ? 
                                     (<div style={{
                                        padding:'1rem', 
                                        borderRadius:'999px',
                                        backgroundColor:'aqua',
                                        width:'10px',
                                      
                                        marginLeft:'90px'     
                                    }}

                                        />
                                        ):(
                                            <div style={{
                                                justifyContent:'center',
                                                alignItems:'center',
                                                padding:'1rem', 
                                                borderRadius:'999px',
                                                backgroundColor:'red',
                                                width:'10px',
                                                marginLeft:'90px'  
                                            }}
                                                   
                                                />
                                        )}</td>
                                </tr>
                            );
                        })}


                    </tbody>


                </table>
            </div>
        </>
    )
}