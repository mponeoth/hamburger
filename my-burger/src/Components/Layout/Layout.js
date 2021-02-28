import React from 'react'
import AAux from '../../hoc/AAux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) =>(

    <AAux >
            <Toolbar />
            <SideDrawer />
            <main className={classes.container}>
                {props.children}
            </main>
    </AAux>
    
    )

 export default Layout   