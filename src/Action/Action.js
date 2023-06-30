

export const graphSwitch =(data)=>{
    return {
        type:"switchGraph",
        payload:data,
    }
}

export const bitcoinGraph = (data)=>{
    return {
        type:"bitcoinGraphs",
        payload:data,
    }
}

export const sidbarApi = (data)=>{
    return {
        type:"sideBar",
        payload:data,
    }
}

export const currency=(data)=>{
    return {
        type:'setcurrency',
        payload:data
    }
}

export const oneAction =()=>{
    return {
        type:'oneD',
    }
}

export const weekAction=()=>{
    return {
        type:'sevenD',
    }
}

export const monthAction=()=>{
    return {
        type:'thirtyD',
    }
}

export const sixAction=()=>{
    return {
        type:'oneEightyD',
    }
}

export const yearAction=()=>{
    return {
        type:'threeSixtyD',
    }
}

export const cryptoSwitch = (data)=>{
    return {
        type:'switchCrypto',
        payload:data,
    }
}

export const setLoading = (val)=>{
    return {
        type:'loading',
        payload:val,
    }
}
export const setSuccess = (val)=>{
    return {
        type:'success',
        payload:val,
    }
}
export const setError = (val)=>{
    return {
        type:'error',
        payload:val,
    }
}

export const convertCurrency = (val)=>{
    return {
        type:'currency',
        payload:val,
    }
}