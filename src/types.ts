export interface CountryApi {
  name: string,
  alpha3Code: string,
  independent: boolean
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  area: number;
  languages: { name: string };
  currencies: { name: string };
  flags: { png: string };
  borders?: string[];
}