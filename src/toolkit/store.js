import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {userSlice} from "./userSlice";
import { productApi } from "./apiSlice";
import { profileSlice } from "./userdetailsSlice";
import { watchlistSlice } from "./watchlistSlice";
import {cartSlice} from "./cartSlice";


const persistConfig = {
  key: "root",
  storage,
};


const rootReducer = combineReducers({
  user : persistReducer(persistConfig, userSlice.reducer),
  profile : persistReducer(persistConfig,profileSlice.reducer),
  watchlist :persistReducer(persistConfig,watchlistSlice.reducer),
  cart :persistReducer(persistConfig,cartSlice.reducer),
  [productApi.reducerPath]: productApi.reducer,
})

export const store = configureStore({
  reducer:rootReducer,

  //this provides features of caching, async and rtk query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck : false,
    }).concat(productApi.middleware, thunk),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
