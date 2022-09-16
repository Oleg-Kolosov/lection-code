import { RootState } from "../store";

export const getCountries = (state: RootState) => state.persistedReducer.countries;
