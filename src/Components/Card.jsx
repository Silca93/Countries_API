import React from 'react'
import { createContext } from 'react'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Card() {

  const {country, setCountry, mode, setFilteredCountries, filteredCountries  } = useContext(Context)
  const {id=0} = useParams();
  const flagId = country[id]

  const searchIndex = (element) => {
    const result = country.findIndex((x) => x.name.common === element.name.common);
    return result;
  };

  
  const BASE_URL = ('https://restcountries.com/v3.1/all')

  useEffect(() => {

    const fetchData = async () => {
       try {
         const response = await fetch(BASE_URL);
         const json = await response.json();
         setCountry(json)
         setFilteredCountries(json)
       }catch (error) {
           console.error('Error catching data', error)
       }
   
    };
    fetchData();
}, [] )
 
  return (
    <>
        {filteredCountries.map((element, index ) => {
            return (
            <Link key={index} to={`/Details/${searchIndex(element)}`}>
              <div className={!mode? "w-[24rem] h-[27rem] bg-[#fcfcfc] flex flex-col rounded-t-lg rounded-b-lg mb-[2rem]" : "w-[24rem] h-[27rem] bg-[#2b3642] flex flex-col text-white rounded-t-lg rounded-b-lg mb-[2rem]"}>
                <div className="flag w-full h-[45%]  overflow-y-hidden flex relative justify-center items-center rounded-t-lg">
                    <img className="" src={element.flags.png} alt="" height="100%" width="400px"/>
                </div>
                <div className="info w-full h-[55%] pt-5 pl-4">
                    <h1 index={index} className="pt-4 pb-2 text-[1.3rem] font-bold ">{element.name.common}</h1>
                    {/* <Link to={`/${index}`}><p><strong>Population:</strong>&nbsp;{element.population}</p></Link> */}
                    <p className="py-1"><strong>Population:</strong>&nbsp;{element.population.toLocaleString()}</ p>
                    <p className="py-1"><strong>Region:</strong>&nbsp;{element.region}</ p>
                    <p className="py-1"><strong>Capital:</strong>&nbsp;{element.capital}</p>
                 </div>
              </div>
            </Link>
            )
        })}
 
    </>

  )
}
