import * as React from 'react';
import styles from "./styles.module.css";

type Props ={
    photo?:string;
}


export default function UserAvatar(props:Props){
    return <div className={styles.avatar} 
    style={props.photo ? {backgroundImage: `url(${props.photo})`, }: {}}/>;

}