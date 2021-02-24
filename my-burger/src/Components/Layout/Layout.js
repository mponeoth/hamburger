import React from 'react'
import AAux from '../../hoc/AAux'
import classes from './Layout.css'

const Layout = (props) =>(

    <AAux >
            <div> Toolbar , sideDrawer , Backdrop </div>
            <main className={classes.container}>
                {props.children}
            </main>
    </AAux>
    
    )

 export default Layout   