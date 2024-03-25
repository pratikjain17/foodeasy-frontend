import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className='mt-10 px-5 justify-center flex flex-wrap gap-5'>
      {/* <h1 className='text-xl text-center py-7 font-semibold'>Events</h1> */}
      {
        [1,1,1].map((item) => <EventCard/>)
      }
    </div>
  )
}

export default Events
