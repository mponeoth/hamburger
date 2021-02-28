import React from 'react'

import Logo from '../../logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'

const sideDrawer = (props) =>{
    //when we use return we must use { } curly braces 
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}> 
             <Logo />
            </div>
        
             <nav>
                 <NavigationItems />
             </nav>

        </div>
    )

}

export default sideDrawer