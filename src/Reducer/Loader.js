

let initialstate={
    loaded:false,
    succed:false,
    err:false,
};

export const loadingReducer = (state=initialstate,action)=>{
    switch (action.type){
        case 'loading':
            return {...state, loaded:action.payload};
        case 'success':
            return {...state, succed:action.payload};
        case 'error':
            return {...state, err:action.payload};
        default:
            return state;
    }
        

}

