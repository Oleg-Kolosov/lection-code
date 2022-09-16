import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./feautures/countriesSlice";
import countryDetailsReducer from "./feautures/countryDetailsSlice";
import userReducer from "./feautures/userSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryDetails: countryDetailsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
