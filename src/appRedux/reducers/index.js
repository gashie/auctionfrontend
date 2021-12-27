import { combineReducers } from "redux";
import {
 getProductReducer,
 singleProductReducer
} from "./productReducer";

export default combineReducers({
    getAllProducts: getProductReducer,
    singleProduct: singleProductReducer
})