import React from 'react'
import RestaurantCard from '../restaurant/RestaurantCard'

const Favorites = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-xl text-center py-7 font-semibold'>Favorite Restaurants</h1>
        <div className='flex gap-3 flex-wrap w-4/5'>
            {
                [1,1,1,1].map((item) => <RestaurantCard
                image={"https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"} 
                name={"Red Chillies"} 
                description={"Red Chillies is Authentic chineese restaurant"}/>)
            }
        </div>
    </div>
  )
}

export default Favorites
