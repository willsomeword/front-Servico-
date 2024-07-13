import { title } from "process";
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function Graphs(){
    const labels = [
        "january",
        "february",
        "march",
        "April",
        "may",
        "june",
        "july",

  ];

  const data ={
    labels,
    datasets:[
        {
            label:"Dataset 1",
            data: [5,6,7,1,2,4,5],
            backgroundColor: 'rgba(255, 99, 6)', // Cor de preenchimento
            borderColor: 'rgba(226, 0, 0, 0.8)', // Cor da linha
            borderWidth: 2, // Espessura da linha

        },
        {
            label:"Dataset 2",
            data: [2,5,9,1,2,4,2],
            borderColer: 'rgba(226, 0, 0, 0.8)',
            backgroundColor: 'rgba(226, 0, 0, 0.8)',
            borderWidth: 2, // Espessura da linha
        

        },

    ],
  };

  const options = {
    responsive:true,
    plugins:{
        legend:{
            position:"top" as const,
        },
        title:{
            display:true,
            text:"Chart.js line chart",
        },
    },
        maintainAspectRatio: false,
  };
    return(
    <div style={{height:"270px", zIndex:"99", marginTop:"380px",marginRight:"10px", marginLeft:"260px"}}>
        <Line data={data} options={options}/>
    </div>
    );
}


export default Graphs;