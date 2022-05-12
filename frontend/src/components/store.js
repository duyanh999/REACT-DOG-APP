import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { authApi } from "./authApi";
import loginReducer from "./loginSlice";
const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  login: loginReducer
});

const persistConfig = {
  key: "primary",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
 const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST"]
        }
    }).concat(authApi.middleware, apiSlice.middleware),
});
export const persistor = persistStore(store);
export default store