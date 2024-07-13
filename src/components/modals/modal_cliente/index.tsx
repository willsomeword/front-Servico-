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
    data?: ClienteType;
    atualizar? : () => void;
   
};

export interface genericCombo {
    id: string;
    nome: string;
}

export default function ModalCliente(props: Props) {
    const [name, setName] = React.useState<string>("");
    const [dataNascimento, setDataNascimento] = React.useState<string>();
    const [cep, setCep] = React.useState<string>("");
    const [rua, setRua] = React.useState<string>("");
    const [bairro, setBairro] = React.useState<string>("");
    const [foto, setfoto]= React.useState<string>("");
    const [observacao, setObservacao] = React.useState<string>("");
    const [statusId, setStatusId] = React.useState<boolean>(false);
    const mockedDataStatus: genericCombo[] = [
        { id: "0", nome: "Inativo" },
        { id: "1", nome: "Ativo" },
    ];
    const onChangeName = (val: string  | File) => {
        setName(val as string);
    };

    const onChangeDataNascimento = (val: string
    ) => {
        setDataNascimento(val);
    };

    const onChangeCep = (val: string) => {
        setCep(val);
    };

    const onChangeRua = (val: string) => {
        setRua(val);
    };

    const onChangeFoto = (val: string  ) => {
        setfoto(val);
    };

    const onChangeObservacao = (val: string) => {
        setObservacao(val);
    };
    const onchangeBairro = (val: string) => {
        setBairro(val);
    };

  


    const submitData = async () => {
        const mappingData: ClienteType = {
            ativo: true,
            nome: name,
            dataNascimento: dataNascimento!,
            cep: cep,
            rua: rua,
            bairro: bairro,
            foto: foto,
            obs: observacao,
            _id: '',
        
        };
        if (mappingData.nome != "" || mappingData.nome != null) {
            const dataSaved = await Cliente.createServicoCliente(mappingData);

            if (dataSaved) {
                alert("Cliente Inserido!");

            } else {
                alert("ocorreu um erro no cadastro do cliente !")
            }


        }
        atualizarStateFather();
    };

    const submitUpdate = async () => {
        const mappingData: ClienteType = {
            ativo: true,
            nome: name,
            dataNascimento: dataNascimento!,
            cep: cep,
            rua: rua,
            bairro: bairro,
            foto: foto,
            obs: observacao,
            _id:props.data?._id,
    
     
        };
       if (props.data && props.data._id) {
            if (mappingData.nome != "" || mappingData.nome != null) {
                const dataSaved = await Cliente.updateCliente(
                    
                    mappingData,
                    props.data._id
                );

                if (dataSaved) {
                    alert("Cliente Alterado  !");

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
            setDataNascimento(props.data.dataNascimento);
            setCep(props.data.cep);
            setRua(props.data.rua);
            setBairro(props.data.bairro);
            setfoto(props.data.foto!)
            setObservacao(props.data.obs!);

     
    
        }

    }, []);
    // console.log(clientes);
    //esse trecho imprime o id do funcionario que vem do combobox
    //React.useEffect(() => {
    //  console.log(idFuncionarioToSend);
    //}, [idFuncionarioToSend]);

    const clear = () => {
        setName("");
        setCep("");
        setObservacao("");
        /*setDataNascimento("");*/
        setBairro("");

        setfoto("");
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
                        <h5 className={styles.heading}>Cliente</h5>
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
                                label="Nome"
                                value={name}
                                alt="input for name"
                                onChange={onChangeName}
                                width={300}
                                placeholder="Digite"
                                labelWeight={800}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            <Input
                                label="data de nascimento"
                                value={dataNascimento ? dataNascimento 
                                    .substring(0,10)
                                : ""
                                    
                                }
                                alt="R$ 200"
                                onChange={(ev) => onChangeDataNascimento(ev)}
                                width={300}
                                placeholder="Data De nascimento"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                                type={"date"}
                            />
                            <Input
                                label="cep"
                                
                                value={cep}
                                alt="input for descricao"
                                onChange={onChangeCep}
                                width={250}
                                placeholder="input do cep"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                            <Input
                                label="Bairro"
                                value={bairro}
                                alt="input do bairro"
                                onChange={onchangeBairro}
                                width={250}
                                placeholder="Bairro"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                              <Input
                                label="Rua"
                                value={rua}
                                alt="input da rua"
                                onChange={onChangeRua}
                                width={250}
                                placeholder="Bairro"
                                labelWeight={700}
                                labelversion={2}
                                customStyle={{ marginBottom: "0.5rem" }}
                            />
                          
                          

                       
                            <Input
                                label="Observação"
                                value={observacao}
                                alt="input observação"
                                onChange={onChangeObservacao}
                                width={200}
                                placeholder="Observação "
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
                                placeholder="ex type of service made"
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