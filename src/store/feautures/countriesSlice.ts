import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { countryAPI } from '../../services/countryAPI';
import { ICountry } from '../../types/types';

interface CountriesState {
    countries: ICountry[];
    isLoading: boolean;
    error: null | string;
}

const initialState: CountriesState = {
    countries: [],
    isLoading: false,
    error: null,
};

const fetchCountries = createAsyncThunk<
    ICountry[],
    undefined,
    { rejectValue: string }
>('countries/fetchCountries', async (_, { rejectWithValue }) => {
    try {
        return countryAPI.getAll();
    } catch (error) {
        const axiosError = error as AxiosError;
        return rejectWithValue(axiosError.message);
    }
});

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCountries.pending, state => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.countries = payload;
        });
        builder.addCase(fetchCountries.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload as string;
        });
    },
});

export default countriesSlice.reducer;

export { fetchCountries };
