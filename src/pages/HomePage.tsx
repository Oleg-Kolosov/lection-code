import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCountries } from "store/feautures/countriesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getCountries } from "store/selectors/countrySelectors";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, countries } = useAppSelector(getCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-around p-3">
      {countries.map((country) => {
        return (
          <div
            className="p-3 shadow-lg rounded-2"
            style={{ width: 300, height: 350 }}
            key={country.name.common}
          >
            <Link
              to={`/countries/${country.name.common}`}
              className="d-flex flex-column gap-2 text-decoration-none h-100"
            >
              <img src={country.flags.svg} alt={country.name.common} width="100%" height="150" />
              <h4 className="text-dark flex-grow-1">Name: {country.name.common}</h4>
              <p className="text-dark fw-bold">Region: {country.region}</p>
              <p className="text-dark">Area: {country.area}</p>
              <p className="text-dark">Population: {country.population}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
