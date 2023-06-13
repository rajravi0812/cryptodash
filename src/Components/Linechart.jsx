
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer, Legend } from "recharts";
import { bitcoinGraph } from "../Action/Action";
//import {Line} from 'react-chartjs-2';

export default function Linechart(){
    const setBitcoin = useSelector((state)=>state.bitcoinG);
    const setDays = useSelector((state)=>state.dOneReducer);
    const switchCoin = useSelector((state)=>state.changeCrypto);
    const dispatch = useDispatch();
    // const data02 = [
    //     {
    //         'coin':'Solana',
    //         'value': 600,
    //         'last':800
            
    //     },
    //     {
    //         'coin':'Ethereum',
    //         'value': 1060,
    //         'last':1220
    //     },
    //     {
    //         'coin':'Tether',
    //         'value': 1200,
    //         'last':1400
    //     },
    //     {
    //         'coin':'Pi',
    //         'value': 2000,
    //         'last':2200
    //     },
    //     {
    //         'coin':'Polygon',
    //         'value': 1000,
    //         'last':2000
    //     },
    //     {
    //         'coin':'Bitcoin',
    //         'value': 3400,
    //         'last':3000
    //     }
    // ]
    console.log(switchCoin);
    useEffect(()=>{
        const apiData = async ()=>{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${switchCoin}/market_chart?vs_currency=usd&days=${setDays}&interval=daily`)
            let actualData = await response.json();
            dispatch(bitcoinGraph(actualData));
        }
        apiData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[setDays,switchCoin])
    function realDate(date){
        const update = new Date(date);
        return update.getFullYear()+"-"+(update.getMonth()+1);
    }
     
    const originaldata = [];
    setBitcoin.map((data)=>{
        return data.prices.map((ndata)=>{
            return originaldata.push({date:realDate(ndata[0]),price:ndata[1]});
        })
    })
    // console.log(originaldata)
    return(
        <>
        <ResponsiveContainer width='92%' height={250} >
        <LineChart 
            data={originaldata} margin={{top:10,bottom:10}}
        >
            <XAxis dataKey='date' axisLine={false}></XAxis>
            <YAxis dataKey='price' axisLine={false}></YAxis>
            <CartesianGrid
            stroke="#aaa" strokeDasharray="4 1" vertical={false}/>
            <Legend iconSize={12} iconType="radio" verticalAlign="top" align="right" wrapperStyle={{top:-10}}/>
            <Line dataKey="price" type="monotone"  stroke="green">
            </Line>
            {/* <Line dataKey="last" strokeWidth={1 } type='monotone' stroke="#00b386"></Line> */}
            <Tooltip/>
        </LineChart>
        </ResponsiveContainer>

        
        
        </>
    )
}