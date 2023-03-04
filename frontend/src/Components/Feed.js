import React, { useEffect, useState } from 'react'
import TrendingStory from './TrendingStory'
 import Question from './Question'
import Post from './Post'
import './Feed.css'
//import axios from '../axios'
//import Pusher from 'pusher-js';

// const pusher = new Pusher('........', {
//   cluster: 'ap2'
// });


const Feed = () => {

  const dummyData = [
    {
        "avatar" : "",
        "text" : "Dummy Data 1",
        "timestamp":"03 04 2023",
        "imgName":"Dummy",
        "username":"User 1"
    },
    {
      "avatar" : "",
      "text" : "Dummy Data 2",
      "timestamp":"03 04 2023",
      "imgName":"Dummy",
      "username":"User 2"
    },
  ]

  const [profilePic,setProfilePic] = useState('');
  const [postsData,setPostsData] = useState(dummyData);

  // const syncData = () =>{
  //   axios.get('/retrieve/posts')
  //         .then((res)=> {
  //           console.log(res.data);
  //           setPostsData(res.data);
  //         })
  // }

  // useEffect(()=>{

  //   var channel = pusher.subscribe('posts');
  //   channel.bind('inserted', function(data) {
  //       syncData();
  //   });

  // },[])

  // useEffect(() =>{
  //   syncData()
  // },[])


  return (
    <div className='feed'>
        <TrendingStory/>
        <Question/>



        {
            postsData.map (entry => (
                <Post

                    profilePic = {entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username = {entry.user}
                
                />

            ))
        }
        
    </div>
  )
}

export default Feed