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
    } from "../actions/type";

    export const getProductReducer = (
        state = {
          loading: false,
          errors: null,
          products: [],
        },
        action
      ) => {
        switch (action.type) {
          case LIST_PRODUCT_REQUEST:
            return { ...state, loading: true };
          case LIST_PRODUCT_SUCCESS:
            return { ...state, loading: false, products: action.payload };
          case LIST_PRODUCT_FAIL:
            return {
              ...state,
              loading: false,
              errors: action.payload,
            };
      
          default:
            return state;
        }
      };

    export const singleProductReducer = (
        state = {
          loading: false,
          error: null,
          product: {},
        },
        action
      ) => {
        switch (action.type) {
          case SINGLE_PRODUCT_REQUEST:
            return { ...state, loading: true };
          case SINGLE_PRODUCT_SUCCESS:
            return { ...state, loading: false, product: action.payload };
          case SINGLE_PRODUCT_FAIL:
            return {
              ...state,
              loading: false,
              errors: action.payload,
            };
      
          default:
            return state;
        }
      };

      export const bidProductReducer = (
        state = {
          loadingbid: false,
          errorbid: null,
          bid: {},
        },
        action
      ) => {
        switch (action.type) {
          case BID_PRODUCT_REQUEST:
            return { ...state, loadingbid: true };
          case BID_PRODUCT_SUCCESS:
            return { ...state, loadingbid: false, bid: action.payload };
          case BID_PRODUCT_FAIL:
            return {
              ...state,
              loadingbid: false,
              errorbid: action.payload,
            };
      
          default:
            return state;
        }
      };