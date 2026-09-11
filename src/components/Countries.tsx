import { use } from "react";
import type { CountryType } from "../types";
import Country from "./Country/Country";

export interface CountriesProps {
    allCountry: Promise<CountryType[]>
}

export default function Countries({ allCountry }: CountriesProps) {
    const countriesData = use(allCountry)
    return (
        <div>
            <h1>Countries:</h1>
            <div>
                {
                    countriesData.map((country) => (
                        <Country key={country.ccn3.ccn3} country={country}></Country>
                    ))
                }
            </div>
        </div>
    )
}