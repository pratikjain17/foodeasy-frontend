import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Chip, IconButton } from '@mui/material';

const CartItem = () => {
  return (
    <div className='px-5'>
      <div className='lg:flex items-center lg:space-x-5'>
        <div>
            <img className='h-[5rem] w-[5rem] object-cover' src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" 
            alt="" />
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
            <div className='space-y-1 lg:space-y-3 w-full'>
                <p className='flex px-2'>Biryani</p>
                <div className='flex justfiy-between items-center'>
                    <div className='flex items-center space-x-1'>
                        <IconButton>
                            <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                        </IconButton>
                        <div className='w-5 h-5 text-xs flex items-center justify-center'>
                            {5}
                        </div>
                        <IconButton>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <p>1956</p>
        </div>
      </div>
      <div className='flex pt-3 space-x-2'>
        {[1,1,1,1].map((item)=> <Chip label={"bread"}/>)}
      </div>
    </div>
  )
}

export default CartItem
