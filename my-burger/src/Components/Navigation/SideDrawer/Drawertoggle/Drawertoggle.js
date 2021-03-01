import React from 'react'

import classes from './Drawertoggle.css'

const Drawertoggle = (props) =>(
        <div onClick={props.clicked} className={classes.DrawerToggle} >
            <div></div>
            <div></div>
            <div></div>
        </div>

    )


export default Drawertoggle