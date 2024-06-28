import React, {useCallback, useEffect, useState} from 'react';
import './CountryInfo.css';
import axios from 'axios';
import {COUNTRY_URL} from '../../constants';
import {Country} from '../../types';

interface Props {
  selectedCountry: string | null;
}

const CountryInfo: React.FC<Props> = ({selectedCountry}) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [borders, setBorders] = useState<string[]>([]);

  const fetchCountry = useCallback(async () => {
    if (selectedCountry !== null) {
      setBorders([]);
      const {data: newCountry} = await axios.get(COUNTRY_URL + selectedCountry);
      setCountry(newCountry);

      if (newCountry.borders) {
        newCountry.borders.map(async (borderCode) => {
          const {data: border} = await axios.get(COUNTRY_URL + borderCode);
          setBorders((prevState) => {
            return [...prevState, border.name];

          });
        });
      }
    }

  }, [selectedCountry]);
  useEffect(() => {
    void fetchCountry();
  }, [fetchCountry]);

  if (country) {
    return (
      <div className="CountryInfo-block">
        <div className="CountryInfo">
          <img
            src={country && country.flags.png ? country.flags.png : ''}
            alt="Флаг страны" className="flag"/>
          <h1>Название страны: {country.name}</h1>
          <p><strong>Столица: </strong>{country.capital}</p>
          <p><strong>Население: </strong>{country.population}</p>
          <p><strong>Площадь: </strong>{country.area} км²</p>
          <p><strong>Официальный язык: </strong>{country.languages[0].name}</p>
          <p><strong>Валюта: </strong>{country.currencies[0].name}</p>
          <div className="CountryInfo-borders"><strong>Границы: </strong>
            {
              borders.length > 0 ? borders.map((border) => {
                return (
                  <p style={{display: 'inline-block', margin: '0'}} key={border}>{border}, &nbsp;</p>
                );
              }) : <p style={{display: 'inline-block'}}>no borders</p>
            }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CountryInfo-block">
        <h1 style={{textAlign: 'center'}}>Выберите страну</h1>
      </div>
    );
  }
};

export default CountryInfo;