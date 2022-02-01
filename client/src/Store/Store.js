import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../Reducer/Index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'


const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
)        

const persistor = persistStore(store);

export {
    store,
    persistor
} 