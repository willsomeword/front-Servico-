import React, { useState } from 'react'
import styles from './styles.module.css'
import Modal from '@/components/modals/modal_servico';
import ModalCliente from '@/components/modals/modal_cliente';

type Props = {
    data: ClienteType[];
    atualizar : ()=> void;
};

function CardCliente({ data, atualizar }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [ selectedItem, setSelectedItem] = useState<ClienteType>();

    
  



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
        {showModal &&  ( <ModalCliente setIsOpen = {showModalFun}
         data={selectedItem}
          isEditing={true}
          atualizar={atualizar}/> )}
 

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
                                <p className={styles.paragraph}>nome:{itemIterator.nome}</p>
                                <p className={styles.paragraph}>data de nascimento:{itemIterator.dataNascimento.toString()}</p>
                            </div>
                            <div>
                                <p className={styles.paragraph}>Observação:{itemIterator.obs ?? "..."}</p>
                                <p className={styles.paragraph}>Cep:{itemIterator.cep}</p>
                                <p className={styles.paragraph}>Ativo:{itemIterator.ativo ? 
                                     (<div style={{
                                    
                                        borderRadius:'999px',
                                        backgroundColor:'aqua',
                                        width:'10px',
                                      
                                        marginLeft:'80px'     
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
                                        )}
                                        </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default CardCliente;