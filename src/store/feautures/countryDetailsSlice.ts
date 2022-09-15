import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICountryDetails } from "types/types";
import { countryAPI } from "./../../services/countryAPI";

export const fetchCountryByDetails = createAsyncThunk<ICountryDetails[], string>(
  "countryDetails/fetchCountryByDetails",
  async (name) => {
    return await countryAPI.getDetailsByName(name);
  },
);

interface DetailsCountryState {
  isLoading: boolean;
  error: null;
  details: ICountryDetails | null;
}

const initialState: DetailsCountryState = {
  isLoading: false,
  error: null,
  details: null,
};

const countryDetailsSlice = createSlice({
  name: "countryDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCountryByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchCountryByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = payload[0];
    });
    builder.addCase(fetchCountryByDetails.rejected, (state) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default countryDetailsSlice.reducer;
