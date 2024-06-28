import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {ALL_URL} from '../constants';
import {CountryApi} from '../types';
import CountryList from '../components/CountryList/CountryList';
import CountryInfo from '../components/CountryInfo/CountryInfo';


const App = () => {

  const [countries, setCountries] = useState();
 useEffect(() => {
    const fetchCountries = async () => {
      const {data: countriesRes} = await axios.get<CountryApi[]>(ALL_URL);
      setCountries(countriesRes);
    };
    void fetchCountries();
  }, []);


  return (
    <div className={'App'}>
      <CountryList countries={countries} />
      <CountryInfo />
    </div>
  );
};


export default App;
