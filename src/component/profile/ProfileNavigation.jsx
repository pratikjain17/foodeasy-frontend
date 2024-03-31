import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { useMediaQuery, Drawer, Divider } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authentication/Action';

const menu = [
    {title : "Orders", icon : <ShoppingBagIcon/>},
    {title : "Favorites", icon : <FavoriteIcon/>},
    {title : "Addresses", icon : <HomeIcon/>},
    {title : "Payments", icon : <PaymentIcon/>},
    {title : "Notifications", icon : <NotificationsIcon/>},
    {title : "Events", icon : <EventIcon/>},
    {title : "LogOut", icon : <LogoutIcon/>},
]

const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width:900px)')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        if(item.title === "LogOut"){
            dispatch(logout())
            navigate("/")
        }else{
            navigate(`/my-profile/${item.title.toLowerCase()}`)
        }
    }
  return (
    <div>
        <Drawer 
        variant={isSmallScreen?"temporary":"permanent"}
        sx={{zIndex:1, position: 'sticky'}}
        anchor='left' 
        open={isSmallScreen?open:true} 
        onClose={handleClose}>
            <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
                {menu.map((item, i)=><>
                    <div onClick={()=>handleNavigate(item)} className='px-5 items-center space-x-5 cursor-pointer'>
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                    {i !== menu.length - 1 && <Divider/>}
                </>
                )}
            </div>

        </Drawer>
    </div>
  )
}

export default ProfileNavigation
