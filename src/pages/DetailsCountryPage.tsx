import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCountryByDetails } from "store/feautures/countryDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getDetailsCountry } from "store/selectors/countryDetailsSelectors";
import { ICountryDetails } from "types/types";

export const DetailsCountryPage = () => {
  const { name = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsCountry);
  const {
    population,
    area,
    region,
    flags: { svg } = {},
    name: { common: countryName } = {},
  } = details || ({} as ICountryDetails);

  useEffect(() => {
    dispatch(fetchCountryByDetails(name));
  }, [dispatch, name]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4 d-flex flex-column gap-3">
      <h1>{countryName}</h1>
      <img
        src={svg}
        alt=""
        width="300"
        height="200"
        className="border border-1 border-light shadow rounded"
      />
      <h2>Region: {region}</h2>
      <h2>Population: {population}</h2>
      <h2>Area: {area}</h2>
    </div>
  );
};
