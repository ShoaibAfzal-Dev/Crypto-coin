import React from 'react'
import {Line} from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from "chart.js"
ChartJS.register(
    CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend
);
const Chart = ({arr=[]} , days) => {
    console.log(arr)
    const prices=[];
    const date=[];
    for(let i=0;i<arr.length;i++){
        if(days==="1d"){ 
            date.push(new Date(arr[i][0]).toLocaleTimeString());
        }
        else{
             date.push(new Date(arr[i][0]).toLocaleDateString());
       
    }
    prices.push(arr[i][1]);
    }
    const data={
        
            labels:date,
            datasets:[{
                label:`Price in $`,
                data:prices,borderColor:"rgb(255,09,102)",
                backgroundColor:"rgba(155,09,102,0.5)"
            },],
        
    }
  return (
    
    <Line
    options={{
        responsive:true,
    }}
    data={data}
    />
    
  )
}

export default Chart