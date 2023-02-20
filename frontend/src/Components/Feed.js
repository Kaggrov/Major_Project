import React, { useEffect, useState } from 'react'
import Question from './Question'
// import Post from './Post'
import './Feed.css'
// import axios from '../axios'
// import Pusher from 'pusher-js';

// const pusher = new Pusher('c000c5011ca90b2ccc1c', {
//   cluster: 'ap2'
// });


const Feed = () => {

  const [profilePic,setProfilePic] = useState('');
  const [postsData,setPostsData] = useState([]);

//   const syncData = () =>{
//     axios.get('/retrieve/posts')
//           .then((res)=> {
//             console.log(res.data);
//             setPostsData(res.data);
//           })
//   }

//   useEffect(()=>{

//     var channel = pusher.subscribe('posts');
//     channel.bind('inserted', function(data) {
//         syncData();
//     });

//   },[])

//   useEffect(() =>{
//     syncData()
//   },[])


  return (
    <div className='feed'>

        <Question/>
        {/* {
            postsData.map (entry => (
                <Post

                    profilePic = {entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username = {entry.user}
                
                />

            ))
        } */}
        
    </div>
  )
}

export default Feed