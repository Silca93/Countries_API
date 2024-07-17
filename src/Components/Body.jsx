import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'

import Card from './Card'

export default function Body() {
    const {search, setSearchVal, mode, down, filterByAsia, filterByOceania, filterByEurope, filterByAmericas, filterByAfrica, filterBySearch} = useContext(Context)
  return (
    <div className={!mode ? "w-100dvw bg-gray-100 pt-[50px]" : "bg-[#202d36] w-100dvw pt-[50px]"}>
        <div className="flex justify-between pb-[50px]">
            <div className={!mode? "w-[35rem] max-[1000px]:w-[25rem] max-[768px]:w-[15rem] max-[550px]:w-[10rem] h-[4rem] bg-white flex items-center gap-4 pl-5 ml-[6rem] max-[550px]:ml-[3rem] max-[425px]:ml-[1rem] border-black shadow-lg" 
             : "w-[35rem] max-[1000px]:w-[25rem] max-[768px]:w-[15rem] max-[550px]:w-[10rem] h-[4rem] bg-[#2b3642] flex items-center gap-4 pl-5 ml-[6rem] max-[550px]:ml-[3rem] max-[425px]:ml-[1rem] border-black shadow-lg "}>
                <img src={search} alt="" width="20px"/>
                <input className= {!mode ? " bg-white h-full w-full max-[768px]:text-[13px]" :  "h-full w-full bg-[#2b3642] text-white max-[768px]:text-[13px]"} onChange={(e) => {setSearchVal(e.target.value), filterBySearch()}} type="text" placeholder='Search a country' />
            </div>
            <div >
                <details className="">
                    <summary className={!mode? "w-[10rem] max-[768px]:w-[6rem] h-[4rem] bg-white px-2 flex justify-center items-center shadow-lg mr-[6rem] max-[550px]:mr-[3rem] max-[425px]:mr-[1rem]"
                  : "w-[10rem] max-[768px]:w-[6rem] h-[4rem] bg-[#2b3642] text-white px-2 flex justify-center items-center shadow-lg mr-[6rem] max-[550px]:mr-[3rem] max-[425px]:mr-[1rem] rounded-none"}>Filter By Region &nbsp;<img src={down} alt="" width="10px"/></summary>
                    
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => filterByAsia()}><a>Asia</a></li>
                        
                        <li onClick={() => filterByOceania()}><a>Oceania</a></li>
                        <li onClick={() => filterByEurope()}><a>Europe</a></li>
                        <li onClick={() => filterByAmericas()}><a>Americas</a></li>
                        <li onClick={() => filterByAfrica()}><a>Africa</a></li>
                    </ul>
                </details>
                
            </div>
        </div>
        <div className="cards flex gap-[80px] ml-[4rem] mr-[4rem] my-5 justify-center flex-wrap ">
            <Card/>
        </div>
    </div>
  )
}
