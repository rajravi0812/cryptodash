const initialValue = "bitcoin";
const changeCrypto = (state=initialValue,action)=>{
    switch(action.type){
        case 'switchCrypto':
            let temp = action.payload;
            if(temp==="1"){
                return state = "bitcoin";
            }if(temp === "2"){
                return state = "ethereum";
            }if(temp==="3"){
                return state = "dogecoin";
            }if(temp==="4"){
                return state = "binancecoin";
            }if(temp==="5"){
                return state = "ripple";
            }if(temp==="6"){
                return state = "cardano";
            }if(temp==="7"){
                return state = "tron";
            }if(temp==="8"){
                return state = "solana";
            }if(temp==="9"){
                return state = "litecoin";
            }if(temp==="10"){
                return state = "polkadot";
            }
            break;
            default:
            return state;
            
    }

}
export default changeCrypto;