/* eslint-disable jsx-a11y/alt-text */
import { Avatar } from '@mui/material'
import {ChatBubble,NearMe, ThumbUp } from'@mui/icons-material'
import React,{useEffect, useState} from 'react'
import {Modal,Collapse,Popover } from 'antd';
import {FacebookIcon, FacebookShareButton,TwitterIcon,TwitterShareButton,WhatsappIcon,WhatsappShareButton} from 'react-share'
import './Post.css'
import { Input } from 'antd';
import axios from '../axios';
const { TextArea } = Input;
const { Panel } = Collapse;

const Post = ({postId,profilepic,imgName,username,timestamp,message,answers}) => {

    // const dummy_solutions = [
    //     {
    //         key : 1,
    //         header : "Expert 1",
    //         text :"Solution is present here "
    //     },
    //     {
    //         key : 2,
    //         header : "Expert 2",
    //         text:"Solution is present here"
    //     },
    //     {
    //         key:3,
    //         header :"Expert 3",
    //         text :"Solution is present here "
    //     }
    // ]
    
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [input, setInput] = useState();
    const [solutions,setSolutions] = useState([]);


    const saveSolutions = async (sol) =>{
        console.log(sol)
        await axios.post('/addComment',sol)
              .then((resp)=>{
                console.log(resp);
              })
      }
    
    useEffect(()=>{
        console.log(answers)
        setSolutions(answers)
    },[]);
    
    const handleOk = () => {

      const new_solution = {
        postId:postId,
        user:"Expert new",
        text:input,
      }

      saveSolutions(new_solution)
      console.log(solutions);


      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };

  const handleSolution = () => {
        setOpen(true);
  }

  const onText = (e) => {
    setInput(e.target.value);
  }
  const ShareApps = (
    <div style={{display:"flex",flexDirection:"column",width:"40px",gap:"2px"}}>
        <FacebookShareButton
            url={"https://www.facebook.com/kisanektamorcha/"}
            quote={"FarmersTribe - World is yours to explore"}
            hashtag="#Farmer"
        >
            <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
            url={"https://www.facebook.com/kisanektamorcha/"}
            quote={"FarmersTribe - World is yours to explore"}
            hashtag="#Farmer"

        >
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton
            url={"https://www.facebook.com/kisanektamorcha/"}
            quote={"FarmersTribe - World is yours to explore"}
            hashtag="#Farmer"
        >
            <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
    </div>
  )
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
            <p style={{marginLeft:"15px"}}>{message}</p>
            
        </div>
        {
            imgName?(
                <div style={{display:"flex",flexDirection:'row',justifyContent:"center",marginBottom:"15px"}}>
                    <img src={`http://localhost:9000/retrieve/images/single?name=${imgName}`} style={{height:"20rem",width:"25rem"}}/>
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
                <h3 style={{fontSize:"20px"}}>|</h3>
            </div>

            <div className='post__option'
                 onClick={handleSolution}
            >
                <ChatBubble/>
                <p>Solution</p>
                
            </div>

            <div className='post__option'>
                <h3 style={{fontSize:"20px"}}>|</h3>
            </div>
            <Popover content={ShareApps} trigger="click">
                <div className='post__option'>
                    <NearMe />

                    
                    <p>Share</p>


                    
                </div>
            </Popover>

        </div>

        <Modal
            title="Solutions Generated"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
        <Collapse defaultActiveKey={['1']}>
            {
                solutions.map(sol => (

                    <Panel header={sol.user}>
                         <p>{sol.text}</p>
                    </Panel>
                
                ))
            }
        </Collapse>
        <TextArea showCount maxLength={100} style={{marginTop:"10px",marginBottom:"25px"}} onChange={onText} />
        </Modal>
        
    </div>
  )
}

export default Post