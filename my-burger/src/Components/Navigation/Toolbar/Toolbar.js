import React from 'react'

import classes from './Toobar.css'
import Logo from '../../logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Drawertoggle from '../SideDrawer/Drawertoggle/Drawertoggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Drawertoggle  clicked={props.DrawertoggleClicked}/>
        <div className={classes.Logo}>
             <Logo />
        </div>

        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
        
);

export default toolbar