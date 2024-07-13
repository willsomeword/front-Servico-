import styles from "./styles.module.css";
import Image from 'next/image';
import Button from "../button";
import Userinfo from "./componets/user_info";
import { useRouter } from "next/router";
import React from "react";


export enum sidebarType{
    servico,
    funcionario,
    cliente,
}

type Props = {
    title: string;
    type:sidebarType;
};



export default function Sidebar(props: Props) {
    const [clicked, setClicked] = React.useState<boolean>(true);
    const router = useRouter();

    const navigateToInit = () =>{
        router.push("/dashboard");
    }

    const navigateToFuncionario = ()=> {
        router.push("/dashboard/funcionario");
    }

    const navigateToCliente = ()=> {
        router.push("/dashboard/cliente");
    }




    return <div className={styles.containerSidebar}>
        <div>
            <div className={styles.containerLogoTitle}>
                <Image src={"/0dcfb548989afdf22afff75e2a46a508.jpg"} alt="logo" width={70} height={70} />
                <p className={styles.title}>{props.title}</p>
            </div>
            <div className={styles.containerLinks}>
                <Button
                    onClick={()=>navigateToInit()}
                    backgroundColor={props.type === sidebarType.servico ? "#081225" :""}
                    padding={[9, 75, 9, 75]}
                    borderRadius
                    color={props.type === sidebarType.servico ? "#B5C2CA" : ""}
                    fontSize={19}
                    fontWeight={500}
                >
                    inicio
                </Button>
                <Button
                    onClick={()=>navigateToFuncionario()}
          
                    padding={[9, 70, 9, 70]}
                    borderRadius
                    color={props.type === sidebarType.funcionario ? "#B5C2CA" : ""}
                    fontSize={19}
                    fontWeight={500}
                    backgroundColor={props.type === sidebarType.funcionario ? "#081225" :""}

                >
                    Funcionario
                </Button>
                <Button
                    onClick={()=>navigateToCliente()}

                    padding={[9, 75, 9, 75]}
                    borderRadius
                    color={props.type === sidebarType.cliente ? "#B5C2CA" : ""}
                    fontSize={19}
                    fontWeight={500}
                    backgroundColor={props.type === sidebarType.cliente ? "#081225" :""}

                >
                    Cliente
                </Button>

            </div>
        </div>
        <div className={styles.containerUser}>
            <Userinfo />
        </div>
    </div >;
}
