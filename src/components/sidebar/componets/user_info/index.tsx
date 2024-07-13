 import * as React  from 'react';
 import styles from "./styles.module.css";
import { userInfo } from 'os';
import UserAvatar from '../user_avatar';
import { useRouter } from 'next/router';
import UserService from '@/modules/user/service';


 export default function Userinfo(){
   const [userInfo, setUserInfo] = React.useState<UserType>();
   //usestate, ao inves de criar uma variavel , Inicialização de Estado: Você usa o useState para inicializar um estado dentro de um componente de função. Por exemplo: 
   //useeffect sem dependencia executa apena uma vez , normalmente usado para chamada de api . 
   //usecallback ele retorna um valor no cache ou api , 
   //usememo
   //useforward
   //useref
   const router = useRouter();

   const getUserById = React.useCallback(async()=>{
      const currentUserId = sessionStorage.getItem("user_id");
      if (currentUserId){
        const userService = new UserService(); // Instancie 
          const userInf = await userService.findUserById(currentUserId);
          setUserInfo(userInf);
      }
   }, []);

   const getuser = React.useCallback(async ()=>{
      const userId = sessionStorage.getItem("user_id");
      if(userId){

      }
   },[]);

   React.useEffect(() =>{
    getUserById();
   },[]);

   const handleLogOut = () =>{
    sessionStorage.clear();
    router.push("/login");
   };

    return <div className={styles.containerUserInfo}>
      <UserAvatar photo={userInfo?.foto} />
      <p className={styles.name}>
        {userInfo && userInfo.nome ? userInfo.nome:""}
        
      </p>
      <p className={styles.email}>
        {userInfo && userInfo.email ? userInfo.email:""}
      </p>
      <p className={styles.sair} onClick={handleLogOut}>sair</p>
    </div>;
    //{userInfo && userInfo.email ? userInfo.email:""} = operador ternario se userinfo.email existir entao sera ele senao sera vazio 
 }