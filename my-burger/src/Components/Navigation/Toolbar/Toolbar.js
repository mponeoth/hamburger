import React from 'react'

import classes from './Toobar.css'
import Logo from '../../logo/Logo'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
        
);

export default toolbar