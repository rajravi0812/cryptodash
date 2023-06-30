
import React,{useEffect} from 'react'
import { Bar, BarChart, CartesianGrid,Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useSelector, useDispatch } from "react-redux";
import { bitcoinGraph } from '../Action/Action';
import ScrollSpy from './ScrollSpy';
import { setLoading,setError,setSuccess } from '../Action/Action';

export default function Barcharts() {
    // const data03 = [
    //     {
    //         'coin':'Solana',
    //         'value': 600,
    //         'last':800,
            
    //     },
    //     {
    //         'coin':'Ethereum',
    //         'value': 1060,
    //         'last':1220,
    //     },
    //     {
    //         'coin':'Tether',
    //         'value': 1200,
    //         'last':1400,
    //     },
    //     {
    //         'coin':'Pi',
    //         'value': 2000,
    //         'last':2200,
    //     },
    //     {
    //         'coin':'Polygon',
    //         'value': 1000,
    //         'last':2000,
    //     },
    //     {
    //         'coin':'Bitcoin',
    //         'value': 3400,
    //         'last':3000,
    //     }
    // ]
    const setBitcoin = useSelector((state)=>state.bitcoinG);
    const setDays = useSelector((state)=>state.dOneReducer);
    const switchCoin = useSelector((state)=>state.changeCrypto);
    const dispatch = useDispatch();
    const loadingState = useSelector((state)=>state.loadingReducer);
    useEffect(()=>{
        
        apiData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[setDays,switchCoin])

    const apiData = async ()=>{
      dispatch(setLoading(true));
     await fetchApi();
  };

    const fetchApi = async ()=>{
      try{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${switchCoin}/market_chart?vs_currency=usd&days=${setDays}&interval=daily`)
      let actualData = await response.json();
      dispatch(bitcoinGraph(actualData));
      dispatch(setLoading(false));
      dispatch(setSuccess(true));
      return actualData;
      }catch (err){
        dispatch(setLoading(false));
        dispatch(setError(true));
      }
      
    }


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
    if(loadingState.loading){
      return <div>this is graph</div>
  }
  if(loadingState.err){
    return <div>Sorry, we are facing some issue</div>
  }
if(loadingState.loaded){
  
}
  return (
    <>
    <div className='mt-2' style={{height:"250px"}}>
    {(loadingState.loaded)? <ScrollSpy/> :
    
      <ResponsiveContainer height={250} width='93%'>
        <BarChart data={originaldata} margin={{bottom:10}}>
            <CartesianGrid strokeDasharray="3 1" vertical={false}/>
            <XAxis dataKey="date" axisLine={false}/>
            <YAxis axisLine={false}/>
            <Tooltip/>
            <Legend iconSize={12} iconType='radio' verticalAlign='top' align='right' wrapperStyle={{top:-15}}/>
            <Bar dataKey="price" fill="#8080ff" barSize={10}/>
        </BarChart>
      </ResponsiveContainer>
    
    }
    </div>
    </>
  )
}
