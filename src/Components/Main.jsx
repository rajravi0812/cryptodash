
import Footer from "./Footer";
import Linechart from "./Linechart";
import Barcharts from "./Barcharts";
import { useDispatch, useSelector } from "react-redux";
import {cryptoSwitch, graphSwitch,currency, oneAction, monthAction ,weekAction,sixAction,yearAction} from "../Action/Action";
import { Areachart } from "./Areachart";

export default function Main(){ 
    const setgraph = useSelector((state)=>state.gSwitch)//reducer
    
    const dispatch = useDispatch();
    //const [coin, setCoin] = useState("");

    // useEffect(()=>{
    //     const getData = async ()=>{
    //         const response = await fetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`);
    //         let actualData = await response.json();
    //         setCoin(actualData);
    // }
    // getData();
    // },[])
    
    

    return(
        <div className="container ">
            <div className="row mt-2">
                <div className="col-2 ">
                    <select onChange={(e)=>dispatch(currency(e.target.value))} className="form-select shadow" aria-label="Default select example">
                    
                        <option value="usd">USD</option>
                        <option value="inr">INR</option>
                        <option value="eth" >ETH</option>
                    
                    </select>
                </div>
                {/* search tag */}
                <div className="col-10">
                    <div className="input-group mb-3 shadow">
                    <span className="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </span>
                    <input type="text" className="form-control" placeholder="Search by coin" 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>

            </div>
            {/* this is graph section */}
            <div className="row gx-1 shadow mb-3"style={{backgroundColor:"white",borderRadius:"8px"}} >
                <div className="container px-4 text-center" >
                    <div className="row gx-1" >
                <div className="col-1">
                <div className="p-3"></div>
                </div>
                <div className="col">
                <div className="mt-3" role="group" >
                    <input onClick={()=>{dispatch(oneAction())}} style={{backgroundColor:"green"}} type="radio" className="btn-check " name="btnradio" id="btnradio1" autoComplete="off"  />
                    <label style={{fontSize:"13px",fontWeight:"bold"}}className=" mx-1 btn btn-outline bg-body-success" htmlFor="btnradio1">1D</label>

                    <input onClick={()=>{dispatch(weekAction())}}  type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                    <label style={{fontSize:"13px",fontWeight:"bold"}}className="mx-1 btn btn-outline bg-body-tertiary" htmlFor="btnradio2">1W</label>

                    <input onClick={()=>{dispatch(monthAction())}}  type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" defaultChecked/>
                    <label style={{fontSize:"13px",fontWeight:"bold"}}className="mx-1 btn btn-outline bg-body-tertiary" htmlFor="btnradio3">1M</label>

                    <input onClick={()=>{dispatch(sixAction())}}  type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
                    <label style={{fontSize:"13px",fontWeight:"bold"}}className="mx-1 btn btn-outline bg-body-tertiary" htmlFor="btnradio4">6M</label>

                    <input onClick={()=>{dispatch(yearAction())}}  type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off"/>
                    <label style={{fontSize:"13px",fontWeight:"bold"}}className="mx-1 btn btn-outline bg-body-tertiary" htmlFor="btnradio5">1Y</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autoComplete="off"/>
                    <label style={{fontSize:"13px",fontWeight:"bold"}}className="mx-1 btn btn-outline bg-body-tertiary" htmlFor="btnradio6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar4-week" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                        </svg>
                    </label>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col p-3 " >
                            <select onChange={(e)=>dispatch(cryptoSwitch(e.target.value))} className="form-select bg-body-tertiary" style={{fontSize:"13px",fontWeight:"bold", fontFamily:"sans-serif"}} aria-label="Default select example">
                            <option value="1">Bitcoin</option>
                            <option value="2">Ethereum</option>
                            <option value="3">Dogecoin</option>
                            <option value="4">Binance</option>
                            <option value="5">Ripple</option>
                            <option value="6">Cardano</option>
                            <option value="7">Tron</option>
                            <option value="8">Solana</option>
                            <option value="9">Litecoin</option>
                            <option value="10">Polkadot</option>
                            </select>
                        </div>
                        <div className="col p-3" >
                            <select onChange={(e)=>dispatch(graphSwitch(e.target.value))} className="form-select bg-body-tertiary" style={{fontSize:"13px",fontWeight:"bold", fontFamily:"sans-serif"}} aria-label="Default select example">
                            <option  value="1">Area Graph</option>
                            <option  value="2">Bar Chart</option>
                            <option value="3"> Line</option>
                            </select>
                        </div>
                    </div>
                </div>
                    </div>
                
                    <div id="line" className="row"> 
                    {setgraph==="1"?<Areachart/>:(setgraph==="2")?<Barcharts/>:<Linechart/> }
                    </div>
                    
                </div>
            </div>
            
            <div className="row">
                <Footer></Footer>
            </div>
        </div>
    )
}