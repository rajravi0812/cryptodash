import React from "react";
import Charts from "./Charts";


export default function Footer(){

    return (
        <div className="container overflow-hidden ">
  <div className="row gx-3">
    <div className="col-md-6 mt-2 ">
        <div className="p-1 shadow-sm"style={{border:"0px solid",backgroundColor:"white",borderRadius:"8px" }}>
            
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
      <div className="p-1 shadow-sm" style={{border:"0px solid",backgroundColor:"white",borderRadius:"8px" }}>
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
                        <select className="form-select " aria-label="Default select example">
                        <option defaultValue>Bitcoin</option>
                        <option value="1">Ethereum</option>
                        <option value="2">Tether</option>
                        <option value="3">Pi</option>
                        </select>
                    </div>
                        
                    
                    <div className="col-6" style={{border:"0px solid"}}>
                        <div className="input-group mb-3" style={{width:"100px", height:"35px"}}>
                        <input style={{fontSize:"13px",color:"grey"}} type="text" className="form-control" placeholder="Avl:0.002BTC"/>
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
                    <select className="form-select " aria-label="Default select example">
                        <option defaultValue>Ethereum</option>
                        <option value="1">Bitcoin</option>
                        <option value="2">Tether</option>
                        <option value="3">Pi</option>
                        </select>
                    </div>
                    <div className="col-6" style={{border:"0px solid"}}>
                    <div className="mt-2 mx-2" style={{color:"#2dabaa",fontSize:"14px"}}><strong>23000 Eth</strong></div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden text-center mt-3 mb-3">
                <div className="row gx-2">
                    <div className="col" style={{border:"0px solid"}}>
                    <div className=""><button className="btn btn-primary" style={{ color:"white"}}>Exchange</button></div>
                    </div>
                </div>
            </div>
            
      </div>
    </div>
  </div>
</div>
    )
}