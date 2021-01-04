import {createStore,applyMiddleware} from 'redux'
import rootReducer from "./rootReducer";

const initState: {[key:string]:any} = {}

export const store = createStore(rootReducer,initState,applyMiddleware(
    
));