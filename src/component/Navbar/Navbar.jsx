import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Avatar, Badge, IconButton} from '@mui/material';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='px-5 sticky top-0 z-50 py-[0.8rem] bg-[#e91e64] lg:px-20 flex justify-between'>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold text-gray-300 text-2x1'>
                FoodEasy
            </li>
        </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}></SearchIcon>
                </IconButton>
            </div>
            <div className=''>
                <Avatar sx={{bgcolor:"white", color:"pink"}}> C </Avatar>
            </div>
            <div className=''>
                <IconButton>
                    <Badge color='black' badgeContent={3}>
                        <ShoppingCartIcon sx={{fontSize:"1.5rem"}}></ShoppingCartIcon>
                    </Badge>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Navbar
