import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Checkbox, Button} from '@mui/material';

// const ingredients = [
//     {
//         category: "Nuts and seeds",
//         ingredient: "Cashews"
//     },
//     {
//         category: "Protein",
//         ingredient: "protein"
//     },
//     {
//         category: "Protein",
//         ingredient: "Bacon Strips"
//     },
// ]

const demo = [
    {
        category: "Nuts and seeds",
        ingredient: ["Cashews"]
    },
    {
        category: "Protein",
        ingredient: ["bacon strips", "ground beef"]
    }
]

const MenuCard = () => {
    const handleCheckBoxChange=()=>{
        console.log("value")
    }
  return (
    <div>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' 
                src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" alt="" />
            </div>

            <div className='flex flex-col items-start space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl mx-5'>Burger</p>
                <p className='mx-5'>₹499</p>
                <p className='text-gray-400 mx-5'>Nice food to eat and amazing taste</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
            <form>
                <div className='flex gap-5 flex-wrap'>
                    {
                        demo.map((item) => 
                        <div>
                            <p className='flex items-start'>{item.category}</p>
                            <FormGroup>
                                {item.ingredient.map((item) => <FormControlLabel control={<Checkbox onChange={()=>{handleCheckBoxChange(item)}}/>} label={item} />)}
                            </FormGroup>
                        </div>
                        )
                    }
                </div>
                <div className='flex pt-10'>
                    <Button type='submit' variant='contained' disabled={false}>
                        {true?"Add To Cart":"Out Of Stock"}
                    </Button>
                </div>
            </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard
