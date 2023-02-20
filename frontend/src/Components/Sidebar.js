import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from "@material-ui/icons";
import React from "react";
import SidebarRow from './SidebarRow'
import './Sidebar.css'

const Sidebar = () => {

  //const [{user},dispatch] = useStateValue();

  return (
    <div className="sidebar">
        
        {/* <SidebarRow src={user.photoURL} title={user.displayName}/> */}

        <SidebarRow Icon = {LocalHospital } title='Crop Information Center' />

        <SidebarRow Icon={EmojiFlags} title='Pages'/>

        <SidebarRow Icon={People} title='Crop Experts'/>

        <SidebarRow Icon={Chat} title='Expert Chat'/>

        <SidebarRow Icon={Storefront} title='MarketPlace'/>

        <SidebarRow Icon={VideoLibrary} title='Reference Videos'/>

        <SidebarRow Icon={ExpandMore} title='More'/>

    </div>
  )
}

export default Sidebar