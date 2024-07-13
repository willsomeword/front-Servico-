import * as React from "react";
import styles from "./styles.module.css";

type Props ={
    children: React.ReactNode;
    width?: number;
    height?:number;
    padding?: Array<number>;
    backgroundColor?: string;
    color?: string;
    onClick: () => void;
    style?: React.CSSProperties | undefined;
    borderRadius?:boolean;
    fontSize?: number;
    fontWeight?: number;
};


export default function Button(props:Props){
    return(
        <button 
         className={styles.containerBtn}
         onClick={props.onClick}
         style={{
            width: props.width,
            height: props.height,
            backgroundColor: props.backgroundColor,
            color: props.color,
            paddingTop: props.padding ? props.padding[0] :0,
            paddingRight: props.padding ? props.padding[1] :0,
            paddingBottom: props.padding ? props.padding[2] :0,
            paddingLeft: props.padding ? props.padding[3] :0,  
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            borderRadius:props.borderRadius ? 15 : 0,
         }}
        >
            {props.children}
        </button>

    );
}