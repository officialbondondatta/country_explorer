import type { CountryType } from "../../types";
import './Country.css'
export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {

    return (
        <div className="country">
            <h1>{country.name.common}</h1>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Capital: {country.capital.capital.join(", ")}</p>
            <p>Population: {country.population.population}</p>
            <button>Visited</button>
        </div>
    )
}