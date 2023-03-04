import { Avatar } from '@mui/material'
import { InsertEmoticon, PhotoLibrary, Videocam } from'@mui/icons-material'
import React, { useState } from 'react'
import './Question.css'
// import {useStateValue} from '../StateProvider'
// import axios from '../axios';


const Question = () => {

  const [input,setInput] = useState('');
  const [image,setImage] = useState(null);
  //const [{user},dispatch] = useStateValue()

  const handleChange = (e) => {
      if(e.target.files[0]) {
        setImage(e.target.files[0])
      }
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Submitting");

    //   if(image) {
    //     const imgForm = new FormData();
    //     imgForm.append('file',image,image.name)

    //     axios.post('/upload/image',imgForm, {
    //       headers:{
    //         'accept': 'application/json',
    //         'Accept-Language':'en-US,en;q=0.8',
    //         'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
    //       }
    //     }).then((res)=>{
    //         console.log(res.data)

    //         const postData = {
    //           text:input,
    //           imgName:res.data.filename,
    //           user:user.displayName,
    //           avatar:user.photoURL,
    //           timestamp: Date.now()
    //         }
    //         console.log(postData);
    //         savePost(postData)

    //     })
    //   }
    //   else
    //   {
    //       const postData = {
    //         text:input,
    //         user:user.displayName,
    //         avatar:user.photoURL,
    //         timestamp: Date.now()
    //       }
    //       console.log(postData);
    //       savePost(postData)

    //   }

      setImage('');
      setInput('');
      
  }

  const savePost = async (postData) =>{
    console.log(postData)
    // await axios.post('/upload/post',postData)
    //       .then((resp)=>{
    //         console.log(resp);
    //       })
  }


  return (
    <div className='question'>
      <div className='question__top'>
        <Avatar src={"user.photoURL"}/>

        <form>
          <input type='text' placeholder='Submit Query here ...'
           className='question__input'
           value={input}
           onChange={(e) => setInput(e.target.value)}
           />

          <input type='file' 
           className='question__file' onChange={handleChange}/>

          <button onClick={handleSubmit} type='submit'>Upload Crop Details</button>
        </form>

      </div>

      <div className='question__bottom'>
        <div className='question__option'>
          <Videocam style={{color:'red'}}/>
          <h3>Live Solution</h3>
        </div>

        <div className='question__option'>
          <PhotoLibrary style={{color:'green'}}/>
          <h3>Photo/Video</h3>
        </div>

        <div className='question__option'>
          <InsertEmoticon style={{color:'orange'}}/>
          <h3>Activity</h3>
        </div>
        

      </div>

      
    </div>
  )
}

export default Question