import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "../reducers/expenses";


const reducers=combineReducers({expenses:expenseReducer,});
const initialState={}; 
const store=configureStore({reducer:reducers},initialState)

export default store;