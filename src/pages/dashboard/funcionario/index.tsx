import TableInfo, { typeTable } from '@/components/Table';
import styles from './styles.module.css';
import Graphs from '@/components/graphs';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { useRouter } from 'next/router';
import React from 'react';
import { sidebarType } from '@/components/sidebar';

function Funcionario() {
  const router = useRouter();

  React.useEffect(() => {
    const loggedInfo = sessionStorage.getItem("user_id");
    if (!loggedInfo) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.containerPage}>


      <Sidebar title="Funcionario" type={sidebarType.funcionario} />
  
      <div style={{ width: "100%" }}>

        <Navbar />
        <TableInfo type={typeTable.funcionario} />
        <Graphs />
      </div>


    </div>
  )
}

export default Funcionario