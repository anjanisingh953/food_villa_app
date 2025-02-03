import React, { useEffect, useState } from 'react'
import data from './data.js'
import RestrauntCard from './RestrauntCard.jsx';






const Body = () => {

  const [allRestaurant, setAllRestaurant] = useState(data);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText,setSearchText] = useState('');
  useEffect(()=>{
    setFilteredData(data);
  },[allRestaurant]);

  function filterData(searchText, allRestaurant){
      const filterData = allRestaurant.filter((restaurant)=>restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase  ()));
      return filterData; 
}

  return (
  <div className='main_body_div'>

    <div className='search_section'>
     <input className='search_input' placeholder='Search Restaurant' value={searchText} 
      onChange={(e)=>{setSearchText(e.target.value)}} />
    <button className='search_btn' onClick={()=>{
      const data = filterData(searchText, allRestaurant)
      setFilteredData(data);     
    }}>Search</button>

    </div>


    <div className='restraunt-list'>
        {
           
            filteredData.map((data)=>{
                return <RestrauntCard {...data.info} key={data.info.id} />
            }) 
        }
            
     </div>
  </div>  
  
  )
}

export default Body
