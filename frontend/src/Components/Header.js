import { Avatar, IconButton } from '@mui/material'
import { AddCircle, ExpandMoreRounded, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsRounded, SupervisedUserCircleRounded } from '@mui/icons-material'
import React,{useState} from 'react'
import './Header.css'
import {useStateValue} from '../StateProvider'
import {useNavigate} from "react-router-dom"
import logo from '../assets/logo.jpg'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Menu } from 'antd';
import {DownOutlined } from '@ant-design/icons';


const Header = () => {

    const [{user},dispatch] = useStateValue();
    const navigate = useNavigate();
    const onClick = (e) => {
        localStorage.removeItem("user")

    };

  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt='Logo' style={{height:"50px"}}/>


        </div>

        <div className='header__input'>
            <Search/>
            <input placeholder='Search ...' type="text"/>

        </div>

        <div className='header__center'>

            <div className='header__option header__option--active'>
                <Home fontSize='large'/>
            </div>
            <div className='header__option' onClick={()=>{
                navigate("/cropTrends")
            }}>
                <WhatshotIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <SubscriptionsRounded fontSize='large'/>
            </div>
            <div className='header__option' onClick={()=>{
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
                <h4>{user}</h4>
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

             <Menu onClick={onClick} mode="horizontal" items={[
                  {
                    label: ' ',
                    key: 'signOut',
                    icon: <DownOutlined />,
                    children:[{
                        'label':"Sign Out",
                        "key":"signOut"
                    }]
                  },
             ]} />

        </div>

    </div>
  )
}

export default Header