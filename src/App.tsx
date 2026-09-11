import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './types';
import Countries from './components/Countries';


const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
}

function App() {

  return (
    <>
      <h1> Welcome Dora Dora</h1>
      <Suspense fallback={<p>Loading Countries...</p>}>
        <Countries allCountry={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
