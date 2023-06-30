import React, {useEffect} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from 'recharts';
import { useSelector,useDispatch } from 'react-redux';
import { bitcoinGraph, setLoading, setSuccess } from "../Action/Action";
import ScrollSpy from './ScrollSpy';

export const Areachart = ()=>{
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

    return (
    <>
       <div className='mt-2' style={{height:"250px"}}>
        {(loadingState.loaded)? <ScrollSpy/> :
      <ResponsiveContainer width='92%' height={250}>
        <AreaChart
          data={originaldata}
          margin={{
            top: 10,
            bottom: 10,
          }}
        >
            <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00e6b8" stopOpacity={1}/>
      <stop offset="95%" stopColor="#33ffd6" stopOpacity={0.2}/>
    </linearGradient>
    
  </defs>
  <Legend iconSize={12} iconType='radio' verticalAlign='top' align='right' wrapperStyle={{top:-15}}/>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="price"/>
          <Tooltip />
          <Area type="natural" dataKey="price" stroke="#00cca3" fill="url(#colorUv)"  />
        </AreaChart>
      </ResponsiveContainer>
}   
      </div>
      </>
    );
        }
