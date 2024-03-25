import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const Addresscard = ({item, showButton, handleSelectAddress}) => {

  return (
    <Card className='flex gap-5 w-64 p-5'>
        <HomeIcon></HomeIcon>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>
            <p>
                Lorem ipsum dolor, sit  provident voluptate id dolorum culpa 
            </p>
            {showButton && (<Button variant='outlined' fullWidth onClick={handleSelectAddress(item)}>Select</Button>)}
        </div>
    </Card>
  )
}

export default Addresscard
