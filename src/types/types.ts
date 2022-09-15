export interface ICountry {
  name: { common: string };
  area: number;
  population: number;
  flags: { svg: string };
  region: string;
}

export interface ICountryDetails {
  name: { common: string };
  area: number;
  population: number;
  flags: {};
  region: string;
  subregion: string;
}
