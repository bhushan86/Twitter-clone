import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';



function Sidebar() {
    return (
        <div className="sidebar">
            
          
             <TwitterIcon className="sidebsr__twitterIcon"/> 
             <SidebarOption active Icon={HomeIcon} text="Home"/>
             <SidebarOption Icon={ SearchIcon} text="Explore"/>
             <SidebarOption Icon={ NotificationsIcon }text="Notifications"/>
             <SidebarOption Icon={MailOutlineIcon}text="Message"/>
             <SidebarOption Icon={BookmarkBorderIcon}text="Bookmarks"/>
             <SidebarOption Icon={ListAltIcon }text="List"/>
             <SidebarOption Icon={ PermIdentityIcon }text="Profile"/>
             <SidebarOption Icon={ MoreHorizIcon}text="More"/>
          
            {/*Button -> tweet */}
            <Button variant="outlined" className="Sidebar_tweet" fullWidth>  Tweet</Button>
            
        </div>
    )
}

export default Sidebar