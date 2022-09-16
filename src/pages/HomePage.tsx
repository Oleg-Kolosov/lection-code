import { fetchCountries } from "store/feautures/countriesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { Link } from "react-router-dom";
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
    <div className="d-flex flex-wrap gap-3 justify-content-start p-3">
      {countries.map((country) => {
        return (
          <div
            className="p-3 shadow rounded-2"
            style={{ width: 300, height: 300 }}
            key={country.name.common}
          >
            <Link
              to={`/countries/${country.name.common}`}
              className="d-flex flex-column gap-2 text-decoration-none h-100"
            >
              <img
                src={country.flags.svg}
                alt={country.name.common}
                width="100%"
                height="150"
              />
              <h4 className="text-dark flex-grow-1">Name: {country.name.common}</h4>
              <div className="d-flex justify-content-between">
                <p className="text-dark fw-bold">
                  <span className="badge bg-info">Region:</span> {country.region}
                </p>
                <button
                  className="btn btn-light shadow"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("ok");
                  }}
                >
                  ❤️
                </button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
