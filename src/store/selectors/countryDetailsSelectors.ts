import { RootState } from "../store";

export const getDetailsCountry = (state: RootState) => state.persistedReducer.countryDetails;
