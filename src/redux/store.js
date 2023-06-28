import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// // import { filterReducer } from './contacts/filterSlice';
// // import { contactsReducer } from './contacts/contactsSlice';
// // import { authReducer } from './auth/authSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// // const authPersistConfig = {
// //   key: 'auth',
// //   storage,
// //   whitelist: ['token'],
// // };

// export const store = configureStore({
//   reducer: {
//     // auth: persistReducer(authPersistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   middleware,
// });

// export const persistor = persistStore(store);
