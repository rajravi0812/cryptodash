import React, { useState } from "react";
import Charts from "./Charts";


export default function Footer(){
    const [firstCur, setFirst] =useState("btc");
    const [second, setSecond]  = useState("eth");
    const [price, setPrice] = useState("");
    const [convertRate, setconvertRate] =useState("32.4");

    console.log(firstCur,"first")
    console.log(second,"second")
    console.log(price,"price")
    console.log(convertRate,"convertRate")
    

    const conversion = ()=>{
        let convertPrice="";
        switch (firstCur){
                case "btc":
                    if(second==="eth"){
                        convertPrice = price*16;
                        return setconvertRate(convertPrice);
                    }
                    if(second==="th"){
                        convertPrice = price*30687;
                        return setconvertRate(convertPrice);
                    }
                    if(second==="pi"){
                        convertPrice = price*1250;
                        return setconvertRate(convertPrice);
                    }
                    if(second==="btc"){
                        alert("Same type of Currency Cant Exchange")
                    }
                    break;
                case "eth":
                        if(second==="btc"){
                            convertPrice = price/16.2;
                            return setconvertRate(convertPrice);
                        }
                        if(second==="th"){
                            convertPrice = price*2750;
                            return setconvertRate(convertPrice);
                        }
                        if(second==="pi"){
                            convertPrice = price*110;
                        return setconvertRate(convertPrice);
                        }
                        if(second==="eth"){
                            alert("Same type of Currency Cant Exchange")
                        }
                        break;
                case "th":
                            if(second==="eth"){
                                convertPrice = price/2750;
                            return setconvertRate(convertPrice);
                            }
                            if(second==="btc"){
                                convertPrice = price/30687;
                                return setconvertRate(convertPrice);
                            }
                            if(second==="pi"){
                                convertPrice = price*3.5;
                                return setconvertRate(convertPrice);
                            }
                            if(second==="th"){
                                alert("Same type of Currency Cant Exchange")
                            }
                            break;
                case "pi":
                                if(second==="eth"){
                                    convertPrice = price/110;
                                    return setconvertRate(convertPrice);
                                }
                                if(second==="th"){
                                    convertPrice = price/3.5;
                                    return setconvertRate(convertPrice);
                                }
                                if(second==="btc"){
                                    convertPrice = price/1250;
                                    return setconvertRate(convertPrice);
                                }
                                if(second==="pi"){
                                    alert("Same type of Currency Cant Exchange")
                                }
                                break;
                default:
                    return convertPrice;
        }
        
    }
    

    return (
        <div className="container overflow-hidden ">
  <div className="row gx-3">
    <div className="col-md-6 mt-2 ">
        <div className="p-1 shadow"style={{border:"0px solid",backgroundColor:"white",borderRadius:"8px" }}>
            
            <div className="container overflow-hidden mt-2">
                <div className="row gx-2">
                    <div className="col-7 " style={{border:"0px solid"}}>
                    <div className=""><strong>Portfolio</strong></div>
                    </div>
                    <div className="col-5" style={{border:"0px solid"}}>
                    <div className=""><span className="mx-1" style={{color:"grey"}}>Total value</span><strong>$1000</strong></div>
                    </div>
                </div>
            </div>

            <div className="container overflow-hidden" >
            <div className="row gx-2">
            <div className="col" style={{border:"0px solid" }}>
            <div className="">
               <Charts/>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <div className=" col-md-6 mt-2">
      <div className="p-1 shadow" style={{border:"0px solid",backgroundColor:"white",borderRadius:"8px" }}>
            <div className="container overflow-hidden mt-2">
                <div className="row gx-2 ">
                    <div className="col" style={{border:"0px solid"}}>
                    <strong>Exchange Coins</strong></div>
                    
                </div>
            </div>

            <div className="row gx-2">
                    <div className="col" style={{border:"0px solid"}}>
                    <div className=""></div>
                    </div>
                    <div className="col" style={{border:"0px solid"}}>
                    <div style={{fontSize:"13px", color:"grey",fontWeight:"bold"}}>Enter value</div>
                    </div>
            </div>

            <div className="container overflow-hidden ">
                <div className="row gx-2 mt-1">
                    <div className="col-2 p-1" style={{border:"0px solid"}}>
                    <div className="mt-1" style={{color:"#e48f31",fontSize:"15px",fontWeight:"bold"}}>Sell</div>
                    </div>
                    <div className="col-4 " style={{border:"0px solid"}}>
                        <select className="form-select " onChange={(e)=>setFirst(e.target.value)} aria-label="Default select example">
                        <option value="btc">Bitcoin</option>
                        <option value="eth">Ethereum</option>
                        <option value="th">Tether</option>
                        <option value="pi">Pi</option>
                        </select>
                    </div>
                        
                    
                    <div className="col-6" style={{border:"0px solid"}}>
                        <div className="input-group mb-3" style={{width:"100px", height:"35px"}}>
                        <input style={{fontSize:"13px",color:"grey"}} type="number" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Avl: 02BTC"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container overflow-hidden mt-2">
                <div className="row gx-2">
                    <div className="col-2" style={{border:"0px solid"}}>
                    <div className="mt-2" style={{color:"#2dabaa",fontSize:"15px",fontWeight:"bold"}}>Buy</div>
                    </div>
                    <div className="col-4" style={{border:"0px solid"}}>
                    <select className="form-select " onChange={(e)=>setSecond(e.target.value)} aria-label="Default select example">
                        <option defaultValue="eth" >Ethereum</option>
                        <option value="btc">Bitcoin</option>
                        <option value="th">Tether</option>
                        <option value="pi">Pi</option>
                        </select>
                    </div>
                    <div className="col-6" style={{border:"0px solid"}}>
                    <div className="mt-2 mx-2" style={{color:"#2dabaa",fontSize:"14px"}}><strong>{convertRate}</strong></div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden text-center mt-3 mb-3">
                <div className="row gx-2">
                    <div className="col" style={{border:"0px solid"}}>
                    <div className=""><button className="btn btn-primary" onClick={conversion} style={{ color:"white"}}>Exchange</button></div>
                    </div>
                </div>
            </div>
            
      </div>
    </div>
  </div>
</div>
    )
}