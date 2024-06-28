import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {ALL_URL} from '../constants';
import {CountryApi} from '../types';
import CountryList from '../components/CountryList/CountryList';
import CountryInfo from '../components/CountryInfo/CountryInfo';

const App = () => {

  const [countries, setCountries] = useState();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const {data: countriesRes} = await axios.get<CountryApi[]>(ALL_URL);
      setCountries(countriesRes);
    };
    void fetchCountries();
  }, []);

  const catchCode = (code: string) => {
    setSelectedCountry(code);
  };
  return (
    <div className={'App'}>
      <CountryList countries={countries} catchCode={(code) => catchCode(code)}/>
      <CountryInfo selectedCountry={selectedCountry} countries={countries}/>
    </div>
  );
};


export default App;
