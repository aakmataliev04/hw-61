import React from 'react';
import {CountryApi} from '../../types';
import Country from './Country/Country';
import './CountryList.css';

interface Props {
  countries: CountryApi[];
}

const CountryList: React.FC<Props> = ({countries}) => {
  return (
    <div className={'CountryList-block'}>
      <ul className={'CountryList'}>
        {
          countries && countries.map((country) => {
            return (
              <Country key={country.alpha3Code} country={country}/>
            );
          })
        }
      </ul>
    </div>
  );
};

export default CountryList;