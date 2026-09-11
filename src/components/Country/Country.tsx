import { useState } from "react";
import type { CountryType } from "../../types";
import './Country.css'
export interface CountryProps {
    country: CountryType,
    visitedCountryHandle: (country: CountryType) => void
}

export default function Country({ country, visitedCountryHandle }: CountryProps) {
    const [visited, setVisited] = useState<boolean>(false)
    const handleVisited = () => {
        // setVisited(true)
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }
        setVisited(!visited)
        visitedCountryHandle(country)
    }

    return (
        <div className={`country ${visited ? "country-visited" : ""}`}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Capital: {country.capital.capital.join(", ")}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Mark As Visited"}</button>
        </div>
    )
}