import { useState } from 'react'
import MilkyWay from './components/MilkyWay';
import Filters from './components/Filters'
import './App.css'

import {filterType} from './utilities/types';
import {useStarData} from './utilities/useStarData';

const App = () => {
  
  const[filterState, setFilterState] = useState<filterType>({
    st_mass: {min: "0", max: "11"},
    st_rad: {min: "0", max: "89"},

    pl_masse: {min: "0", max: "9535"},
    pl_rade: {min: "0", max: "34"},

    glon: {min: "0", max: "360"},
    sy_dist: {min: "0", max: "85000"},

    disc_facility: "",
    disc_year: {min: "1992", max: "2024"},    
    discoverymethod: "",
  })

  const starData = useStarData();

  return (
    <div className='main-container'>
      <MilkyWay 
        starData={starData}
        filterState={filterState}
      />
      <Filters 
        filterState={filterState}
        setFilterState={setFilterState}
      />
    </div>
  )
}

export default App
