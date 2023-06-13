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
            }
            break;
            default:
            return state;
            
    }

}
export default changeCrypto;