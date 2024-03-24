import React, { useState } from 'react'
import { Divider, FormControl, Grid, RadioGroup, Typography, FormControlLabel, Radio, FormLabel } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';

const category = [
    {name:"pizza"},
    {name:"biryani"},
    {name:"burger"}
];
const foodTypes = [
    {label:"All", value:"all"},
    {label:"Veg Only", value:"veg"},
    {label:"Non-veg Only", value:"nonveg"},
    {label:"Seasonal", value:"seasonal"},
]

const menu = [1,1,1,1]
const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
  return (
    <div className='px-5 lg-px-20'>
        <section>
            <h3 className='flex text-gray-500 py-1 mt-5'>Home/India/Restaurant Name</h3>
            <div className=''>
                <Grid container spacing={0.5}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" alt="" />
                    </Grid>
                </Grid>
            </div>

            <div className='pt-3 pb-5'>
                <h1 className='flex text-4xl fond-semibold'>Indian Fast Food</h1>
                <p className='flex text-gray-500 mt-1 text-left'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repellat quaerat harum porro ad, 
                    corrupti autem fugit ea itaque sit repellendus explicabo dolor delectus distinctio, inventore blanditiis dolorem dolore expedita?
                </p>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-2'>
                        <LocationOnIcon></LocationOnIcon>
                        <span>Mumbai, Maharashtra, India</span>
                    </p>
                    <p className='flex font-semibold text-gray-500 gap-3'>
                        <CalendarMonthIcon></CalendarMonthIcon>
                        <span>
                            Mon - Sun 9:00 am to 11.00 pm
                        </span>
                    </p>
                </div>
            </div>
        </section>
        <Divider></Divider>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter flex justify-start'>
                <div className='box flex flex-col space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography className='flex justify-start' variant='h5' sx={{paddingBottom: "1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='flex justify-start' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                {foodTypes.map((item) => 
                                <FormControlLabel 
                                key={item.value} 
                                value={item.value} 
                                control={<Radio />} 
                                label={item.label} />
                                )
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <Typography className='flex justify-start' variant='h5' sx={{paddingBottom: "1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className='flex justify-start items-start' component={"set"}>
                            <RadioGroup onChange={handleFilter} name='food_category' value={category}>
                                {category.map((item) => 
                                <FormControlLabel 
                                key={item.name} 
                                value={item.name} 
                                control={<Radio />} 
                                label={item.name} />
                                )
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item)=> <MenuCard/>)}
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails
