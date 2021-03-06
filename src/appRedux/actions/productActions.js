import axios from "axios";
import {
LIST_PRODUCT_REQUEST,
LIST_PRODUCT_SUCCESS,
LIST_PRODUCT_FAIL,
SINGLE_PRODUCT_REQUEST,
SINGLE_PRODUCT_SUCCESS,
SINGLE_PRODUCT_FAIL,
BID_PRODUCT_REQUEST,
BID_PRODUCT_SUCCESS,
BID_PRODUCT_FAIL
} from "./type";

export const getProducts = () => async (dispatch) => {
    try {
      dispatch({
        type: LIST_PRODUCT_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.get("/api/v1/auction/viewlisting", config);
  
      dispatch({
        type: LIST_PRODUCT_SUCCESS,
        payload: data.Data,
      });
    } catch (error) {
      dispatch({
        type: LIST_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.Data.Message
            : error.message,
      });
    }
  };
export const singleProducts = (id) => async (dispatch) => {

    try {
      dispatch({
        type: SINGLE_PRODUCT_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        
      };
  
      const { data } = await axios.post("/api/v1/auction/singlelisting",{id}, config);
  
      dispatch({
        type: SINGLE_PRODUCT_SUCCESS,
        payload: data.Data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_PRODUCT_FAIL,
        payload:
          error.response && error.response.Data.Message
            ? error.response.Data.Message
            : error.message,
      });
    }
  };

  export const setBid = (bidderID,auctionID,bidAmount,remember) => async (dispatch) => {
  
  
    try {
      dispatch({
        type: BID_PRODUCT_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        
      };
  
      const { data } = await axios.post("/api/v1/auction/bid",bidderID,auctionID,bidAmount,remember, config);
  
      dispatch({
        type: BID_PRODUCT_SUCCESS,
        payload: data,
      });
      
     dispatch(singleProducts(bidderID.auctionID));
    } catch (error) {
      dispatch({
          
        type: BID_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.Message
            ? error.response.data.Message
            : error.Message,
      });
    }
  };
