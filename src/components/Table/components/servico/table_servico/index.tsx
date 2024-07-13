import * as React from "react";
import styles from "./styles.module.css";
import Modal from "@/components/modals/modal_servico";
import ModalServico from "@/components/modals/modal_servico";

type Props = {
    data: ServicoTypeReturned[];
    atualizar: () => void;
};

export default function TableServico(props: Props) {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<ServicoTypeReturned>();

  
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
                <ModalServico 
                setIsOpen={showModalFun}
                 data={selectedItem} 
                 isEditing={true} 
                atualizar={props.atualizar} 
                />
                )}
                <table className={styles.table}>
                    <thead>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Descrição</th>
                        <th>Funcionario</th>
                        <th>Cliente</th>
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
                                    <td>{renderStatus(itemIterator.status)}</td>
                                    <td>{itemIterator.descricao ?? "..."}</td>
                                    <td>{itemIterator.funcionario?.nome}</td>
                                    <td>{itemIterator.cliente?.nome}</td>
                                </tr>
                            );
                        })}


                    </tbody>


                </table>
            </div>
        </>
    )
}