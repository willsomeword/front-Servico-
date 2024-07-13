import React, { useState } from 'react'
import styles from './styles.module.css'
import Modal from '@/components/modals/modal_servico';
import ModalFuncionario from '@/components/modals/modal_funcionario';

type Props = {
    data: UserType[];
    atualizar : ()=> void;
};

function CardFuncionario({ data, atualizar }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [ selectedItem, setSelectedItem] = useState<UserType>();

    
  



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

    const showModalFun = (val:boolean) => {
        setShowModal(val);
    }
    return (
        <>
        {showModal && <ModalFuncionario setIsOpen = {showModalFun} data={selectedItem} isEditing={true} atualizar={atualizar}/>}
        showModal

            <div className={styles.wrapper}>
                {data.map((itemIterator, index) => {
                    return (
                        <div key={index} className={styles.card}
                         onClick={() => {
                             setSelectedItem(itemIterator); 
                             setShowModal(true)
                             }}
                             >
                            <div>
                                <p className={styles.paragraph}>{itemIterator.nome}</p>
                                <p className={styles.paragraph}>{itemIterator.email ?? "..."}</p>
                            </div>
                            <div>
                                <p className={styles.paragraph}>{itemIterator.rua}</p>
                                <p className={styles.paragraph}>{itemIterator.cep}</p>
                                <p className={styles.paragraph}>{itemIterator.salario}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default CardFuncionario;