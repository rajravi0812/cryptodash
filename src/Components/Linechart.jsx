
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer, Legend } from "recharts";
import { bitcoinGraph, setLoading, setSuccess } from "../Action/Action";
import ScrollSpy from "./ScrollSpy";


export default function Linechart(){
    const setBitcoin = useSelector((state)=>state.bitcoinG);
    const setDays = useSelector((state)=>state.dOneReducer);
    const switchCoin = useSelector((state)=>state.changeCrypto);
    const loadingState = useSelector((state)=>state.loadingReducer);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const apiData = async ()=>{
            dispatch(setLoading(true));
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${switchCoin}/market_chart?vs_currency=usd&days=${setDays}&interval=daily`)
            let actualData = await response.json();
            dispatch(setLoading(false));
            dispatch(setSuccess(true));
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
    //console.log(loadingState)
    
    return(
        <>
        <div className='mt-2' style={{height:"250px"}}>
        {(loadingState.loaded)? <ScrollSpy/> :
        <ResponsiveContainer width='92%' height={250} >
        <LineChart 
            data={originaldata} margin={{top:10,bottom:10}}
        >
            <XAxis dataKey='date' axisLine={false}></XAxis>
            <YAxis dataKey='price' axisLine={false}></YAxis>
            <CartesianGrid
            stroke="#aaa" strokeDasharray="4 1" vertical={false}/>
            <Legend iconSize={12} iconType="radio" verticalAlign="top" align="right" wrapperStyle={{top:-10}}/>
            <Line dataKey="price" type="monotone"  stroke="#cc6600" strokeWidth={2}>
            </Line>
            <Tooltip/>
        </LineChart>
        </ResponsiveContainer>

    }
        </div>
        </>
    )
}