  import { useState, useRef, useEffect } from 'react'
  import React from 'react'
  import { RouterProvider, createBrowserRouter} from "react-router-dom"

  import Home from './Home'
  import Details from './Components/Details'
  import './App.css'
  //?images//
  import search from './assets/logos/search-solid.svg'
  import back from './assets/logos/arrow-left-solid.svg'
  import moon from './assets/logos/moon-solid.svg'
  import sun from './assets/logos/sun-solid.svg'
  import down from './assets/logos/down-solid.svg'


  export const Context = React.createContext()

  function App() {

    const [country, setCountry] = useState([]);
    
//! filtering search bar//
   
    const [searchVal, setSearchVal] = useState("");
  
    const [filteredCountries, setFilteredCountries] = useState(country);
    
    const filterBySearch = () => {
      const filteredBySearch = country.filter(country =>
        country.name.common.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredCountries(filteredBySearch);
    };

   

 //! filtering by continents //
 const filterByAsia = () => {

   const asianCountries = country.filter(country => country.region === "Asia");
 
   setFilteredCountries(asianCountries);

   console.log("filtering Asia:");
 }


const filterByOceania= () => {

  const oceanianCountries = country.filter(country => country.region === "Oceania");

  setFilteredCountries(oceanianCountries);

  console.log("filtering oceania");
}


const filterByEurope= () => {

  const europeanCountries = country.filter(country => country.region === "Europe");

  setFilteredCountries(europeanCountries);

  console.log("filtering europe");
}



const filterByAmericas = () => {

  const americanCountries = country.filter(country => country.region === "Americas");

  setFilteredCountries(americanCountries);

  console.log("filtering america");
}



const filterByAfrica = () => {

  const africanCountries = country.filter(country => country.region === "Africa");

  setFilteredCountries(africanCountries);

  console.log("filtering africa");
}



  //! dark mode //
  const [mode, setMode] = useState(false);

  const switchMode = () => {
    setMode(!mode)
    console.log(mode);
  }
  

  //! not found error//
    const Error = () => {
      return <h1>404 Not Found</h1>
    }

    
    const router = createBrowserRouter([
      {
        path:"/Countries_API/",
        element: <Home/>,
        errorElement: Error(),
        
        
      },
      {
        path: "/Details/:id",
        element: <Details/>,
        errorElement: Error()
      }
    ])

    return (
      <Context.Provider value={{country, filteredCountries, setFilteredCountries, filterByAsia, filterByOceania, filterByEurope, filterByAmericas, filterByAfrica, setCountry, filterBySearch, search, back, moon,  searchVal, setSearchVal, mode, sun, down, setMode, switchMode}}>

        <div className="main w-dvw h-dvh bg-gray-100">
          <RouterProvider router = {router}/>
                  
        </div>
      </Context.Provider>
    )
  }

  export default App
