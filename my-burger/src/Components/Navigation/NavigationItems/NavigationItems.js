import React from 'react'

import classes from './NavigationItem/NavigationItem.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

const NavigationItems = () =>(

        <ul className={classes.NavigationItems}>
             <NavigationItem link="/" active>Burger Builder</NavigationItem>
             <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
)


export default NavigationItems