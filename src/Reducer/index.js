import gSwitch from "./Reducers";
import bitcoinG from "./bitcoinG";
import reducerSidbar from "./reducerSidebarApi";
import setCurrency from "./setCurrency";
import dOneReducer from "./daysReducer";
import changeCrypto from "./switchcointab";
import {combineReducers} from "redux";
import { loadingReducer } from "./Loader";

const rootReducer = combineReducers({gSwitch,bitcoinG,reducerSidbar,
    setCurrency,dOneReducer, changeCrypto, loadingReducer});

export default rootReducer;