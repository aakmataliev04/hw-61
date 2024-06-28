import React from 'react';
import {CountryApi} from '../../types';
import Country from './Country/Country';
import './CountryList.css';

interface Props {
  countries: CountryApi[];
  catchCode: (alpha3Code: string) => void;
}

const CountryList: React.FC<Props> = ({countries, catchCode}) => {
  return (
    <div className={'CountryList-block'}>
      <ul className={'CountryList'}>
        {
          countries && countries.map((country) => {
            return (
              <Country catchCode={() => catchCode(country.alpha3Code)} key={country.alpha3Code} country={country}/>
            );
          })
        }
      </ul>
    </div>
  );
};

export default CountryList;