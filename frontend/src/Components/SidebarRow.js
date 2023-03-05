import { Avatar } from '@mui/material';
import React from "react";
import './SidebarRow.css'
import { useNavigate } from 'react-router-dom';


const SidebarRow = ({src,Icon,title}) => {
  const navigate = useNavigate();
  return (
    <div className="sidebarRow"onClick={()=>{
      if(title==="Expert Chat"){
        window.location = 'https://bot.dialogflow.com/a097707b-93c4-4f54-adce-2642977daf56';
      }
      if(title == "MarketPlace"){
         navigate("/marketplace")
      }
    }}>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}

        <p>{title}</p>
        
    </div>
  )
}

export default SidebarRow