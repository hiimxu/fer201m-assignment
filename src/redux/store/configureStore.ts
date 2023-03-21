import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LoginAccount } from '~/redux/reducers/auth';

const loginConfig = {
    key: 'loginAccount',
    storage: storage,
    blacklist: ['errMess'],
};

const rootReducer = combineReducers({
    //Authenticate
    loginAccount: persistReducer(loginConfig, LoginAccount),
});

export const ConfigureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    const persistor = persistStore(store);
    return { persistor, store };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
