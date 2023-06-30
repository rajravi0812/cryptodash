import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidbarApi, } from "../Action/Action";

export default function Sidebar(){
    const setData = useSelector((state)=>state.reducerSidbar);
    const setCur = useSelector((state)=>state.setCurrency);
    const dispatch= useDispatch();
    useEffect(()=>{
        const sidebarData = async ()=>{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${setCur}&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en`);
            let actualData = await response.json();
            dispatch(sidbarApi(actualData));
            }
        sidebarData();
        // eslint-disable-next-line
    },[setCur])
    return(
    <>
    <div className="white p-2 text-center mt-2" style={{borderRadius:"8px"}}><strong>Top Cryptocurrency by <br/>market cap</strong></div>
        <div className="container-fluid" style={{height:"550px",overflowY:"scroll"}}>
            {setData && setData.map((data)=>
                    <div key={data.id} className="row shadow white mb-2 " style={{border:"0px solid"}}>
                    <div  className="col-8 p-2" style={{border:"0px solid"}}>
                        <div className="d-flex">
                            <div><span style={{fontSize:"15px"}} >{data.name}</span></div>
                            <div className="px-2"><img alt={data.id} src={data.image} style={{height:"20px"}}></img></div>
                        </div>
                        
                        <span style={{fontSize:"13px",color:"grey"}}><strong>Mkt.Cap</strong>:{data.market_cap}<strong>{setCur==="usd"?"$":(setCur==="inr")?"₹":"Ξ"}</strong></span>
                    </div>
                    <div className="col-4" >
                        <div className="row d-flex mt-2" style={{border:"0px solid"}}>
                        
                            <div className=" col-4 py-1" style={{border:"0px solid"}}>{data.market_cap_change_percentage_24h > 0 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>}
                            </div>
                            <div className="col-8 px-1" style={{border:"0px solid"}}><span style={{fontSize:"13px"}}>{data.market_cap_change_percentage_24h.toFixed(2)}%</span></div>
                        
                        </div>
                    </div>
                </div>
            )}
            
            
        </div>
    </>
    )
}

//<p>Tether <div className="triangle-p pt-2"></div></p>