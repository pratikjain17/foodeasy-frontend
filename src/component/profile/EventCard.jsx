import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:345}}
            image='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
            <CardContent className='flex flex-col items-start'>
                <Typography variant='h5' component={"span"}>
                    Indian Fast Food
                </Typography>
                <Typography variant='body2' component={"span"}>
                    50% off on your first order
                </Typography>
                <div className=' flex flex-col items-start py-2 space-y-2'>
                    <p>Mumbai, Maharashta, India</p>
                    <p className='text-sm text-blue-500'>February 14th, 2024</p>
                    <p className='text-sm text-red-500'>February 16th, 2024</p>
                </div>
            </CardContent>

          {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard
