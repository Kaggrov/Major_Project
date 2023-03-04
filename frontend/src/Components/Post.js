/* eslint-disable jsx-a11y/alt-text */
import { Avatar } from '@mui/material'
import { AccountCircle, ChatBubble, ChatBubbleOutline, ChatBubbleTwoTone, ExpandMoreOutlined, NearMe, ThumbUp } from'@mui/icons-material'
import React from 'react'
import './Post.css'

const Post = ({profilepic,imgName,username,timestamp,message}) => {
  return (
    <div className='post'>
        <div className='post__top'>
            <Avatar src={profilepic} className='post__avatar'/>
            <div className='post__topInfo'>
                <h3>{username}</h3>
                <p>{new Date(parseInt(timestamp)).toUTCString()}</p>

            </div>
        </div>

        <div className='post__bottom'>
            <p>{message}</p>
            
        </div>
        {
            imgName?(
                <div>
                    <img src={`http://localhost:9000/retrieve/images/single?name=${imgName}`}/>
                </div>

            ):(
                console.log('No image')
            )
        }

        <div className='post__options'>

            <div className='post__option'>
                <ThumbUp/>
                <p>Support</p>

            </div>

            <div className='post__option'>
                <ChatBubble/>
                <p>Solution</p>
                
            </div>

            <div className='post__option'>
                <NearMe/>
                <p>Share</p>
                
            </div>

            <div className='post__option'>
                <AccountCircle/>
                <ExpandMoreOutlined/>
                
            </div>
        </div>
        
    </div>
  )
}

export default Post