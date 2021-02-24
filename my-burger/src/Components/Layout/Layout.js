import React from 'react'
import AAux from '../../hoc/AAux'

const Layout = (props) =>(

    <AAux>
    <div>Toolbar , sideDrawer , Backdrop </div>
    <main>
        {props.children}
    </main>
    </AAux>
    
    )

 export default Layout   