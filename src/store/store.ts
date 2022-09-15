import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./feautures/countriesSlice";
import countryDetailsReducer from "./feautures/countryDetailsSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryDetails: countryDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
