import React, { useEffect, useState } from 'react'
// import data from './data.js'
import RestrauntCard from './RestrauntCard.jsx';
import Shimmer from '../Shimmer.jsx';
import { NavLink } from 'react-router-dom';






const Body = () => {

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');


  const fetchSwiggyData = async () => {
    const res = await fetch('/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const result = await res.json();
    const finalresult = await result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    console.log(finalresult)
    // return finalresult
    setTimeout(() => {
      setAllRestaurant(finalresult);
      setFilteredData(finalresult)
    }, 200)

  }


  useEffect(() => {
    fetchSwiggyData()
    // setFilteredData(data);
  }, []);

  function filterData(searchText, allRestaurant) {
    const filterData = allRestaurant.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
  }

  return allRestaurant?.length === 0 ? (<Shimmer />) : (
    <div className='main_body_div'>

      <div className='search_section'>
        <input className='search_input' placeholder='Search Restaurant' value={searchText}
          onChange={(e) => { setSearchText(e.target.value) }} />
        <button className='search_btn' onClick={() => {
          const data = filterData(searchText, allRestaurant)
          setFilteredData(data);
        }}>Search</button>

      </div>


      <div className='restraunt-list'>
        {
          filteredData.map((data) => {


            return <NavLink to={"/restaurant/" + data.info.id} key={data.info.id}  >
              <RestrauntCard {...data.info} />
            </NavLink>

          })
        }

      </div>
    </div >

  )
}

export default Body
