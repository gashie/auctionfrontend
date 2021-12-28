import { combineReducers } from "redux";
import {
 getProductReducer,
 singleProductReducer,
 bidProductReducer
} from "./productReducer";

import {
  userLoginReducer
   } from "./userReducers";

export default combineReducers({
    getAllProducts: getProductReducer,
    singleProduct: singleProductReducer,
    createBid:bidProductReducer,
    userLogin: userLoginReducer,
})