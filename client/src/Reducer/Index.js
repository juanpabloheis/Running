import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tokens', 'user'],
};

let initialState = {
  user: null,
  tokens: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        tokens: action.payload,
      };
    case "SET_USER_ACTIVITIES":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default persistReducer(persistConfig, rootReducer);
