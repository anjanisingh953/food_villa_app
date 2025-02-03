import React from 'react'

const RestrauntCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {
  return (
    <div className='card'>
        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId} alt='' />
        <h3>{name}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>{avgRating} star</p>
    </div>
  )
}

export default RestrauntCard
