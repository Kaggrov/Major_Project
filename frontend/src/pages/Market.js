import React from 'react'
import { Button, Carousel ,Image} from 'antd';
import {useNavigate} from "react-router-dom"
import slider from '../assets/slider.jpg'
import farmtool from '../assets/farmtool.jpg'
import Rotavator from '../assets/Rotavator.jpg'
import image from '../assets/tractor_side-view.jpg'
import './Market.css';

const contentStyle = {
    height: '441px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'teal',
  };

const Market = () => {
  const navigate = useNavigate();

  return (

    <div className='market'>
        <Carousel autoplay arrows style={contentStyle} >
          <div >
          <h3 style={{color:"#fff",margin:"-50px",padding:"0px"}}>For Rent : 5000 per Day</h3>
          <Image src={slider} style={{height:"325px",width:"800px",textAlign:'center',marginTop:"16px",borderRadius:"25px"}} />

          </div>
          <div >
              <h3 style={{color:"#fff",margin:"-50px",padding:"0px"}}>For Rent : 15000 per Day</h3>
              <Image src={Rotavator} style={{height:"325px",width:"800px",textAlign:'center',marginTop:"16px",borderRadius:"25px"}} />
          </div>
          <div>
              <h3 style={{color:"#fff",margin:"-50px",padding:"0px"}}>For Sale : 150,000 Only</h3>
              <Image src={farmtool} style={{height:"325px",width:"800px",textAlign:'center',marginTop:"16px",borderRadius:"25px"}} />
          </div>
          <div>
              <h3 style={{color:"#fff",margin:"-50px",padding:"0px"}}>For Sale  : 200,000 Only</h3>
              <Image src={image} style={{height:"325px",width:"800px",textAlign:'center',marginTop:"16px",borderRadius:"25px"}} />
          </div>
      </Carousel>
      <div  className='buttons'>
        <Button style={{padding:"50px",textAlign:"center",color:"teal",fontSize:"25px",fontWeight:"800",backgroundColor:"#BEF0CB"} }
                onClick={()=>{
                    navigate('/sale')
                }}
        
        >
            For Sale
        </Button>
        <Button style={{padding:"50px",textAlign:"center",color:"teal",fontSize:"25px",fontWeight:"800",backgroundColor:"#BEF0CB"} }
                onClick={()=>{
                    navigate('/rent')
                }}
        >
            For Rent
        </Button>

      </div>

    </div>
    
  )
}

export default Market