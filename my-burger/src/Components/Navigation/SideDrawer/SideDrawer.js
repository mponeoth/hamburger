import React from 'react'

import Logo from '../../logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import AAux from '../../../hoc/AAux'

const sideDrawer = (props) =>{
   
    let attacheedClasses = [classes.SideDrawer , classes.Close];

    if (props.open) {
        attacheedClasses = [classes.SideDrawer , classes.Open];
    }

    return(
        <AAux>
            <Backdrop show={props.open}  clicked={props.closed} />

            <div className={attacheedClasses.join(' ')}>
                    <div className={classes.Logo}> 
                        <Logo />
                    </div>

                    <nav>
                        <NavigationItems />
                    </nav>

            </div>
        </AAux>

    )

}

export default sideDrawer