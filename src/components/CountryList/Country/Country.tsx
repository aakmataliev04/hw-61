import React from 'react';
import {CountryApi} from '../../../types';

interface Props {
  country: CountryApi;
  catchCode: () => void;
}

const Country: React.FC<Props> = ({country, catchCode}) => {
  return (
    <li onClick={catchCode} className={'CountryList-item'} key={country.alpha3Code}>{country.name}</li>
  );
};

export default Country;