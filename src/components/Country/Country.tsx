import type { CountryType } from "../../types";
import './Country.css'
export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {

    return (
        <div className="country">
            <h1>{country.name.common}</h1>
        </div>
    )
}