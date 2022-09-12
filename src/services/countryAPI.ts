import axios from "axios";

import { ICountry } from "../types/types";

enum Endpoint {
  ALL = "all",
}

class CountryAPI {
  private readonly BASE_URL = process.env.REACT_APP_COUNTRY_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAll() {
    const params = {
      fields: ["name", "area", "population", "flags", "region"].join(","),
    };

    const { data } = await this.API.get<ICountry[]>(Endpoint.ALL, {
      params,
    });

    return data;
  }
}

export const countryAPI = new CountryAPI();
