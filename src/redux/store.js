import { 
 // persistStore, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import authReduser from './auth/auth-reducer';
import logger from 'redux-logger';


const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }, 
}), logger]

const store = configureStore({
  reducer: { state: contactsReducer,
    auth: authReduser, },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

//const persistor = persistStore(store);

export default store;