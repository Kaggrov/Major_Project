import { Avatar } from '@mui/material';
import React from "react";
import './SidebarRow.css'
import { useNavigate } from 'react-router-dom';


const SidebarRow = ({src,Icon,title}) => {
  const navigate = useNavigate();
  return (
    <div className="sidebarRow"onClick={()=>{
      if(title==="Expert Chat"){
        navigate("/expert")
      }
      if(title === "MarketPlace"){
         navigate("/marketplace")
      }
      if(title === 'Crop Trends'){
         navigate("/cropTrends")
      }
      if(title === 'Resale Check'){
        navigate("/pricePredict")
     }
     if(title === "Crop Disease Detection") {
      navigate("/detect")
     }
     if(title === "Crop Recommendation"){
      navigate('/recommend')
     }
    }}>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}

        <p>{title}</p>
        
    </div>
  )
}

export default SidebarRow