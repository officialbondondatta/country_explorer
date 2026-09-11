import { use, useState } from "react";
import type { CountryType } from "../../types";
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    allCountry: Promise<CountryType[]>
}

export default function Countries({ allCountry }: CountriesProps) {
    const countriesData = use(allCountry)
    const [countriesVisited, setCountriesVisited] = useState<CountryType[]>([])

    const handleVisitedCountries = (country: CountryType): void => {
        if (countriesVisited.includes(country)) {
            const restCountry = countriesVisited.filter(c => c !== country)
            setCountriesVisited(restCountry)
        } else {
            const restCountry = [...countriesVisited, country]
            setCountriesVisited(restCountry)
        }
    }
    return (
        <div>
            <h1>Countries Visited: {countriesVisited.length}</h1>
            <div className="countries">
                {
                    countriesVisited.map((country) => (
                        <Country
                            key={country.ccn3.ccn3}
                            country={country}
                            visitedCountryHandle={() => handleVisitedCountries(country)}
                        ></Country>
                    ))
                }
            </div>
            <h1>Countries:</h1>
            <div className="countries">
                {
                    countriesData.map((country) => (
                        <Country
                            key={country.ccn3.ccn3}
                            country={country}
                            visitedCountryHandle={() => handleVisitedCountries(country)}
                        ></Country>
                    ))
                }
            </div>
        </div>
    )
}