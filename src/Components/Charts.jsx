import React from "react";
import {PieChart,Pie, Legend, ResponsiveContainer} from 'recharts';
const data01 = [
    {
      "name": "Tether",
      "value": 400,
      "fill": "#61d9c6"
    },
    {
      "name": "Luna",
      "value": 300,
      "fill": "#6fa3f2"
    },
    {
      "name": "Ethereum",
      "value": 300,
      "fill": "#f774a3"
    },
    
    
  ];

export default function Charts(){

    return(
        <ResponsiveContainer width='89%' height={190}>
          
        <PieChart >
            <Pie data={data01} dataKey="value" nameKey="name" cx="90" cy="90" 
            outerRadius={70} fill="#000" >

            </Pie>
            
            <Legend margin={{left:50}} iconType="radius" iconSize={10}width={100} height={100} layout="vertical" verticalAlign="middle" align="right"></Legend>
            
            
        </PieChart>
      
        </ResponsiveContainer>
    )
}