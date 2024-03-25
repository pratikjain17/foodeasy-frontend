import { Button } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' 
            src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" alt="" />
            <div className='flex flex-col items-start'>
                <p className=''>Biryani</p>
                <p className='flex'>$499</p>
            </div>
        </div>
        <Button className='cursor-not-allowed'>Completed</Button>
    </div>
  )
}

export default OrderCard
