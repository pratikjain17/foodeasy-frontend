import React from 'react'
import './Home.css'
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../restaurant/RestaurantCard'

// dummy data for restaurants.....will be deleted once backend is connected
const restaurants = [
    {
            "name": "Tasty Bites",
            "description": "Experience the finest dining with our delicious dishes.",
            "cuisineType": "Italian",
            "address": "123 Main Street, Cityville, USA",
            "contactInformation": "+1 (123) 456-7890",
            "openingHours": "10:00 AM - 9:00 PM",
            "images": [
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg",
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg",
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
            ]
          },
          {
            "name": "Spice Kingdom",
            "description": "A journey through the flavors of Asia awaits you.",
            "cuisineType": "Asian",
            "address": "456 Oak Avenue, Townsville, USA",
            "contactInformation": "+1 (987) 654-3210",
            "openingHours": "11:00 AM - 10:00 PM",
            "images": [
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg",
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
            ]
          },
          {
            "name": "Burger Haven",
            "description": "Savor the juiciest burgers in town at Burger Haven.",
            "cuisineType": "American",
            "address": "789 Elm Street, Villageton, USA",
            "contactInformation": "+1 (456) 789-0123",
            "openingHours": "10:00 AM - 9:00 PM",
            "images": [
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg",
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
            ]
          },
          {
            "name": "Sushi Delight",
            "description": "Indulge in the freshest sushi selections at Sushi Delight.",
            "cuisineType": "Japanese",
            "address": "101 Pine Street, Seaside, USA",
            "contactInformation": "+1 (234) 567-8901",
            "openingHours": "11:30 AM - 9:30 PM",
            "images": [
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg",
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
            ]
          },
          {
            "name": "Mediterranean Oasis",
            "description": "Transport your taste buds to the Mediterranean with our flavorful dishes.",
            "cuisineType": "Mediterranean",
            "address": "321 Cedar Street, Beachside, USA",
            "contactInformation": "+1 (345) 678-9012",
            "openingHours": "11:00 AM - 10:00 PM",
            "images": [
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg",
              "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
            ]
          }
]
// Home page for foodEasy
const Home = () => {
  return (
    <div className='pb-10'>
        {/* banner has been implemented */}
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className="w-[50vw] z-10 text-center">
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>FoodEasy</p>
                <p className='text-gray-300 text-xl z-10 lg:text-4xl'>Your one stop solution for cravings</p>
            </div>

            <div className='cover absolute top-0 left-0 right-0'>

            </div>

            <div className='fadeOut'>

            </div>
        </section>  
        {/* Food items carousel */}
        <section className='p- lg:py-8 lg:px-20'>
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">Top Meals</p>
            <MultiItemCarousel/>
        </section> 
        {/* Handpicked Restaurants */}
        <section className='px-5 lg:px-20 pt-2'>
            <h1 className='text-2xl font-semibold text-gray-400 pb-5'>Order From Our Handpicked Restaurants</h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
                {restaurants.map((restaurant) => <RestaurantCard 
                image={restaurant.images[0]} 
                name={restaurant.name} 
                description={restaurant.description}
                />)}
            </div>
        </section>
    </div>
  )
}

export default Home
