import * as React from "react";
import styles from "./style.module.css";
import { genericCombo } from "../modals/modal_servico";


type Props = {
    data: genericCombo[];
    label: string;
    stateToGetId: React.Dispatch<React.SetStateAction<string>>;
    currentValue?:string;

}

export default function ComboBox(props: Props) {
    const [chooseData, setChooseData] = React.useState<string>("");
    return (
        <div className={styles.container}>
            <label>{props.label}</label>
            <select 
            value={
              
            props.data.find((item) =>item.id === props.currentValue)?.id
            } 
            onChange={(e) => {
                // Atualiza o estado externo através da função passada via props
                props.stateToGetId(e.target.value);
                
               
            }}
            
                >
                <option selected disabled hidden>Choose</option>
                {props.data &&
                    props.data.map((itemIterator, index) => (
                        <option key={index} value={itemIterator.id}
                         
                            >
                            {itemIterator.nome}
                        </option>
                    ))}

            </select>
        </div>

    );
};