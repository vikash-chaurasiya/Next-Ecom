import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from "./apiSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  //this provides features of caching, async and rtk query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, thunk),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
