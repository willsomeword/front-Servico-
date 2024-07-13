import * as React from 'react';
import Input from '../input';
import styles from "./styles.module.css";
import Button from '../button';
import { getLayoutDisposition } from '@/redux/dataSlice';
import { useSelector} from "react-redux";
import { setLayoutState } from '@/redux/dataSlice';
import { useDispatch} from "react-redux";


export default function Navbar() {
    const [search, setSearch] = React.useState<string>('');
    const currentLayoutState : any = useSelector(getLayoutDisposition);
    const dispatch = useDispatch();

    const handleChangeSearch = (str: string) => {
        setSearch(str);
    };

    const handleChangeLayoutCard = () => {
        handleChangeLayout(false);
    };

    const handleChangeLayoutTable =()=>  {
        handleChangeLayout(true)};


    const handleChangeLayout = ( val: boolean) =>{
        //colocando na fatia certo dentro do slice da datalayer
        dispatch(setLayoutState(val));
    };

    console.log(currentLayoutState);
    return (
        <div className={styles.navbarwraper}>
            <Input
                value={search}
                alt={"search"}
                onChange={handleChangeSearch}
                width={450}
                placeholder='ex:Search'
                labelWeight={700}
            />
            <div style={{
       
                display:"flex",
                justifyContent:"space-between",
                alignItems: "center",
                width:"33%",

            }}>

                <Button
                    onClick={handleChangeLayoutTable}
                    backgroundColor={"#081225"}
                    padding={[8, 50, 8, 50]}
                    borderRadius
                    color='#85c2c2'
                    fontSize={19}
                    fontWeight={500}

                >
                    Table
                </Button>
                <Button
                    onClick={handleChangeLayoutCard}
                    backgroundColor={"#081225"}
                    padding={[8, 50, 8, 50]}
                    borderRadius
                    color='#85c2c2'
                    fontSize={19}
                    fontWeight={500}
                >
                    Card
                </Button>
            </div>



        </div>
    );
};