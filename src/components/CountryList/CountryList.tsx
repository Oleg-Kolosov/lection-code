import React, { useEffect } from 'react';
import { fetchCountries } from '../../store/feautures/countriesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getCountries } from '../../store/selectors/countrySelectors';

export const CountryList = () => {
    const dispatch = useAppDispatch();
    const { isLoading, error, countries } = useAppSelector(getCountries);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <ul>
            {countries.map((country: any) => {
                return <li>{country.name.common}</li>;
            })}
        </ul>
    );
};
