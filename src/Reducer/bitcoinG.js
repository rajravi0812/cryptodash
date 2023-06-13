const initialBitcoin=[];
const bitcoinG =(state=initialBitcoin,action)=>{
    switch (action.type){
        case "bitcoinGraphs":
            return state = [action.payload];
        default : return state;
    }
}


export default bitcoinG;