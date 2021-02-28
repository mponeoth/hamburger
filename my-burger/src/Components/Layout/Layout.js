import React from 'react'
import AAux from '../../hoc/AAux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) =>(

    <AAux >
            <Toolbar />
            <main className={classes.container}>
                {props.children}
            </main>
    </AAux>
    
    )

 export default Layout   