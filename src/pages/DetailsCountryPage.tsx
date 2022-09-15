import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCountryByDetails } from "store/feautures/countryDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getDetailsCountry } from "store/selectors/countryDetailsSelectors";

export const DetailsCountryPage = () => {
  const { name = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsCountry);

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
    <div>
      <h2>Population: {details && details[0].population}</h2>
      <h2>Area: {details && details[0].area}</h2>
    </div>
  );
};
