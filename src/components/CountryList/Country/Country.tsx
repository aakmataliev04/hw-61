import React from 'react';
import {CountryApi} from '../../../types';

interface Props {
  country: CountryApi;
}

const Country: React.FC<Props> = ({country}) => {
  return (
    <li  className={'CountryList-item'} key={country.alpha3Code}>{country.name}</li>
  );
};

export default Country;