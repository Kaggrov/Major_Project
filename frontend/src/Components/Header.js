import { Avatar, IconButton } from '@material-ui/core'
import { AddCircle, ExpandMoreRounded, FlagRounded, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsRounded, SupervisedUserCircleRounded } from '@material-ui/icons'
import React from 'react'
import './Header.css'

const Header = () => {


  return (
    <div className='header'>
        <div className='header__left'>
            {/* <img src={img} alt='Logo'/> */}


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
            <div className='header__option'>
                <StorefrontOutlined fontSize='large'/>
            </div>
            <div className='header__option'>
                <SupervisedUserCircleRounded fontSize='large'/>
            </div>

        </div>

        <div className='header__right'>
            <div className='header__info'>
                {/* <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4> */}
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