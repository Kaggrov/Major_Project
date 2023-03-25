import React, { useEffect } from 'react'
import './Login.css'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'
import logo from '../assets/login.jpg'
import title from '../assets/logo_title.png'
import { Button,Checkbox, Form, Input } from 'antd';
import {useNavigate} from "react-router-dom"
import axios from "../axios"


const Login = () => {
    const navigate = useNavigate();

  const [state,dispatch] = useStateValue();

   const  signIn = async (values) => {
    console.log(values)
        
        await axios.post("/user",values)
        .then(result => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.data.name
            })
            localStorage.setItem("user",result.data.name)
            localStorage.setItem("userName",result.data.userName)
        }).catch(error => alert(error.message))

   }

   useEffect(()=>{
    const logged_user = localStorage.getItem("user");
    if(logged_user!== undefined){
        dispatch({
            type:actionTypes.SET_USER,
            user:logged_user
        })
    }
   },[])


  return (
    <div className='login'>
    <img src={logo} alt='Logo' className='img1'/>
    
    <div className='middle'>
        <div className='login__logo'>
        <img src={title} alt='title 'className='img2'/>  
        </div>
        <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={signIn}
            >   
                <Form.Item
                label="Full Name"
                name="name"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Name!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item style={{marginLeft:"6rem"}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
        </Form>

    </div>
    
    <Button onClick={()=>{
        navigate("/admin")
    }} 
    style={{ marginTop:"30px",width:"100px"}}>Admin</Button>
      
    </div>
  )
}

export default Login