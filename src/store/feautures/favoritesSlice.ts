import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry } from "types/types";

interface IFavoritesState {
  favorites: ICountry[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<ICountry>) {
      const result = state.favorites.find((country) => country.name.common === payload.name.common);
      if (!result) state.favorites.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((country) => {
        return country.name.common !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorite } = favoritesSlice.actions;
