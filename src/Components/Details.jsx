import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'

export default function Details() {
  const {country, back, mode} = useContext(Context);
  
  const {id=0} = useParams();
  const countryId = country[id];
  console.log(countryId);

  return (
    <>
      <Header/>
      <div  className={!mode? "w-dvw flex flex-col bg-gray-100" : "w-dvw flex flex-col bg-[#202d36] text-white"}>
       
          <div className="flex max-[970px]:flex-col max-[970px]:justify-center max-[970px]:items-center">

            <div className="left w-1/2 h-dvh flex flex-col items-center justify-center relative  max-[970px]:w-[20rem]  max-[970px]:h-[30rem]">
              <div className={!mode? "w-[7rem] h-[2rem] flex gap-4 bg-white border-2 shadow-xl absolute left-[80px] top-12 justify-center items-center" :"w-[7rem] h-[2rem] flex gap-4 bg-[#2b3642] border-2 shadow-xl absolute left-[80px] top-12 justify-center items-center"}>
                 <img className="text-white" src={back} alt=""  width="15px"/> 
                  <Link to="/project_API_Eric/">
                  <button className={!mode? "text-black bg-white" : "text-white bg-[#2b3642]"}>BACK</button>
                  </Link> 
              </div>
              
              <img src={countryId.flags.png} alt=""width="600px"/>

            </div>
            <div className="right w-1/2 h-dvh flex justify-start items-center  max-[970px]:items-start  max-[970px]:justify-center">
              <div className="flex gap-2 w-full justify-between items-start max-[1200px]:flex-col max-[1200px]:justify-center  max-[970px]:items-center">
                <div className="left flex-flex-col gap-2 pl-[50px]  max-[970px]:pl-0">
                  <p className="font"><strong>Native Name:</strong>&nbsp; {Object.values(countryId.name.nativeName)[0].official} </p>
                  <p className="font"><strong>Population:</strong>&nbsp;{countryId.population.toLocaleString()}</p>
                  <p className="font"><strong>Region:</strong>&nbsp; {countryId.region}</p>
                  <p className="font"><strong>Sub Region:</strong>&nbsp;{countryId.subregion} </p>
                  <p className="font"><strong>Capital:</strong>&nbsp;{countryId.capital} </p>
                  <p className="font pt-[5rem]  max-[970px]:pt-2  max-[970px]:mb-5"><strong>Border Countries</strong>:&nbsp;
                     {countryId.borders && countryId.borders.length > 0 ? 
                      countryId.borders.map((border, index) => (
                        <Link key={index} to={`/Details/${index}`}>
                          <button key={index} className="font px-3 py-1 border-[1px] flex-row mx-1 border-black">{border}</button>
                        </Link>
                          ))
                      : 
                      <p className="font">No bordering countries</p>
                     }
                  </p>
                </div>
                <div className="right flex flex-col gap-2 mt-0 pr-[150px] max-[1200px]:pl-[50px]  max-[970px]:pl-[50px]  max-[970px]:pr-[50px] max-[970px]:justify-center max-[550px]:pl-[10px]">
                  <p className="font"><strong>Top level Domain:</strong>&nbsp; {countryId.tld}</p>
                  <p className="font"><strong>Currencies:</strong>&nbsp;{Object.values(countryId.currencies)[0].name}</p>
                  <p className="font"><strong>Languages:</strong>&nbsp;{Object.values(countryId.languages).join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
         
    </>
    
  )
}
