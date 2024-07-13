import * as  React from 'react';
import styles from "./styles.module.css";


type Props = {
    label?: string;
    placeholder?: string;
    value: string;
    type?: React.HTMLInputTypeAttribute;
    alt: string;
    labelColor?: string;
    onChange: (currentVal: string  ) => void; 
    width?: number;
    height?: number;
    labelWeight?: number;
    backgroundColor?: string;
    customStyle?: React.CSSProperties | undefined;
    labelversion?: number;
}

export default function Input(props: Props) {
    const [photo, setphoto] = React.useState<string>('');
    const style = { 
        width: props.width,
        height: props.height,
        ...props.customStyle,
        //spread 
    };

    const decideLabel = (labelVersion: number): string => {
        switch (labelVersion) {
            case 1:
                return styles.versionone;
                    case 2:
                return styles.versiontwo;
            default:
                return "";
        }
    };
    
   {/* const convertBase64 = async (file:File) => {
        const base64 = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
    
            fileReader.onerror = (error) => {
                reject(error);
            };
    
        });

        if(typeof (await base64) ==="string"){
            props.onChange(base64);
        }

        
    };
    
*/}


const toBase64 = (ev:React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0];
    if(!file) return "";
    const reader = new FileReader();

    reader.onloadend = () => {
        if(typeof reader.result === "string") {
            const base64 = reader.result;

          props.onChange(base64);
        }

    }
    reader.readAsDataURL(file);
};


    return (
        <div className={styles.containerInput} style={{  }}>
            {props.label ? (
            <label 
            style={
                props.labelversion
                ? {}
                :
                {
                color: props.labelColor ?? "#081225",
                fontWeight: props.labelWeight ?? "normal",
            }}
                className={props.labelversion ? decideLabel(props.labelversion) : styles.label}
            >
                {props.label}
            </label>
            ) : (
                <></>
            )}
            <input type={props.type ? props.type : "text"}
                value={props.value}
                alt={props.alt}
                onChange={
                     (ev) => {
                        if(props.type ==="file"){
                         toBase64(ev);
                        
                        } else {
                            props.onChange(ev.target.value);
                        }
                       

                     }}
                className={styles.input}
                style={{ backgroundColor: props.backgroundColor }}
                placeholder={props.placeholder ?? ""}
            />

        </div>
    );
}