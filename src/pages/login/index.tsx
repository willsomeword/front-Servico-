import * as React from 'react';
import  styles  from "./styles.module.css";
import Image from 'next/image';
import Input from "@/components/input";
import Button from "@/components/button";
import AuthService from '@/modules/user/service/auth';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/router';

enum keyPressed{
    Enter= 'Enter'
}

export default function login(){
    const [email, setEmail] = React.useState<string>("");
    const [senha, setSenha] = React.useState<string>("");
    const router = useRouter();

    const valorEmail = (str: string)=>{
        setEmail(str);
    };
    const valorSenha = (str:string) =>{
        setSenha(str);
    };

    React.useEffect(() => {
        const loggedInfo = sessionStorage.getItem("loggedin");
        if(loggedInfo ==="true"){
            router.push("/dashboard");
        }
    }, []);

    const loginFunc = React.useCallback(async () => {
        const Auth =  new AuthService();
        const loginInfo = await Auth.Login({email:email, senha:senha});
        if(loginInfo){
            const decodingToken: TokenDecode = jwtDecode(loginInfo.token);
            sessionStorage.setItem("loggedin","true");
            sessionStorage.setItem("email",loginInfo.email);
            sessionStorage.setItem("token",loginInfo.token);
            sessionStorage.setItem("user_id", decodingToken.id);
            router.push("/dashboard");
        }
    }, [email,senha]);
    return(
        <div className={styles.mainContainer}>
            <div className={styles.containerLogin}>
                <div className={styles.containerLogotitle}>
                <Image 
                src={"/0dcfb548989afdf22afff75e2a46a508.jpg"}
                 alt="logo" 
                 width={70} 
                 height={70}
                 />
                <h1 className={styles.titleService}>Services</h1>
                </div>
                <div className={styles.containerInputs} onKeyDown={(key) =>{
                    key.stopPropagation();
                    if (key.code === keyPressed.Enter){
                        loginFunc();
                    }
                }}>
                    <Input
                    label="Email"
                    value={email}
                    onChange={valorEmail}
                    alt={"input do email"}
                    width={25}
                    labelWeight={700} 
                    placeholder={"ex: exemplo@gmail.com"} 
                
                    />
                    
                     <Input 
                     label="Senha"
                     value={senha}
                     onChange={valorSenha}
                     alt={"input da Senha"}
                     width={450}
                     type="password"
                     customStyle={{ marginTop:"3rem"}}
                     labelWeight={700} 
                     />
                     <div className={styles.containerBtnForgetPass}>
                      <Button
                        onClick={loginFunc}
                        backgroundColor = "#081225"
                        padding={[13,75,16,75]}
                        borderRadius
                        color="#B5C2CA"
                        fontSize={19}
                        fontWeight={500}
                        
                        >
                        Fazer Login
                      </Button>
                      <p className={styles.forgetPass}>Esqueceu Sua Senha ?</p>

                     </div>
                </div>               
            </div>
        </div>
    );
}