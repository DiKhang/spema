import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import commonSlice from './reducer/common';
import dataSlice from './reducer/data';

const dataPersistConfig = {
  key: 'data',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  blacklist: ['common'],
};

const reducers = combineReducers({
  common: commonSlice,

  data: persistReducer<any>(dataPersistConfig, dataSlice),
});

const persistedReducer = persistReducer<any>(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'common/setNotifi',
          'persist/PERSIST',
          'common/setModal',
          'common/setLoading',
        ],
      },
    }),
});

export const persistor = persistStore(store);
