import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
import React from "react";
import SidebarRow from './SidebarRow'
import './Sidebar.css'
//import {useStateValue} from '../StateProvider'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Sidebar = () => {

  //const [{user},dispatch] = useStateValue();

  return (
    
    <div className="sidebar">
        
        <SidebarRow src={"user.photoURL"} title={"user.displayName"}/>

        <SidebarRow Icon = {LocalHospital } title='Crop Disease Detection' />

        <SidebarRow Icon={People} title='Crop Recommendation'/>

        <SidebarRow Icon={WhatshotIcon} title='Crop Trends'/>

        <SidebarRow Icon={Chat} title='Expert Chat'/>

        <SidebarRow Icon={Storefront} title='MarketPlace'/>

        <SidebarRow Icon={MonetizationOnIcon} title='Resale Check'/>

        <SidebarRow Icon={VideoLibrary} title='Reference Videos'/>

        <SidebarRow Icon={ExpandMore} title='More'/>

    </div>
  )
}

export default Sidebar