import { Avatar, Button, IconButton } from '@mui/material'
import { AddCircle, ExpandMoreRounded, FlagRounded, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsRounded, SupervisedUserCircleRounded } from '@mui/icons-material'
import React from 'react'
//import img from '../assets/logo.jpg'
import './Header.css'
//import {useStateValue} from '../StateProvider'
import {useNavigate} from "react-router-dom"


const Header = () => {

    //const [{user},dispatch] = useStateValue();
    const navigate = useNavigate();

  return (
    <div className='header'>
        <div className='header__left'>
            <img src={"img"} alt='Logo'/>


        </div>

        <div className='header__input'>
            <Search/>
            <input placeholder='Search ...' type="text"/>

        </div>

        <div className='header__center'>

            <div className='header__option header__option--active'>
                <Home fontSize='large'/>
            </div>
            <div className='header__option'>
                <FlagRounded fontSize='large'/>
            </div>
            <div className='header__option'>
                <SubscriptionsRounded fontSize='large'/>
            </div>
            <div className='header__option' onClick={()=>{
                console.log("MarketPlace")
                navigate('/marketplace')
            }}>

                <StorefrontOutlined fontSize='large'/>

            </div>
            <div className='header__option'>
                <SupervisedUserCircleRounded fontSize='large'/>
            </div>

        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar src={"user.photoURL"}/>
                <h4>{"user.displayName"}</h4>
            </div>

            <IconButton>
                <AddCircle/>
            </IconButton>

            <IconButton>    
                <Forum/>
            </IconButton>

            <IconButton>    
                <NotificationsActive/>
            </IconButton>

            <IconButton>
                <ExpandMoreRounded/>    
            </IconButton>

        </div>

    </div>
  )
}

export default Header