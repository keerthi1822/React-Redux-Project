import { combineReducers } from "redux"; //to combine all reducers 
import { productReducer,selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default reducers