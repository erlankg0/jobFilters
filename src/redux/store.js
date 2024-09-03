import {createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
    key: 'root',
    storage,
    whitelist: ['filter'],
    blacklist: ['positions']

}

const persistedReducer = persistReducer(persisConfig, rootReducer);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export const persister = persistStore(store);