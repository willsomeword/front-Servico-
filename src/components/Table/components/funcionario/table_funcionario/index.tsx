import * as React from "react";
import styles from "./styles.module.css";
import Modal from "@/components/modals/modal_servico";
import ModalServico from "@/components/modals/modal_servico";
import ModalFuncionario from "@/components/modals/modal_funcionario";

type Props = {
    data: UserType[];
    atualizar: () => void;
};

export default function TableFuncionario(props: Props) {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<UserType>();

  
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
                <ModalFuncionario
                setIsOpen={showModalFun}
                 data={selectedItem} 
                 isEditing={true} 
                atualizar={props.atualizar} 
                />
                )}
                <table className={styles.table}>
                    <thead>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cep</th>
                        <th>Bairro</th>
                        <th>salario</th>
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
                                    <td>{itemIterator.email}</td>
                                    <td>{itemIterator.cep}</td>
                                    <td>{itemIterator.bairro}</td>
                                    <td>{itemIterator.salario}</td>
                                    
                                </tr>
                            );
                        })}


                    </tbody>


                </table>
            </div>
        </>
    )
}