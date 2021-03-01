import React,{Component} from 'react'
import AAux from '../../hoc/AAux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class  Layout extends Component {
        state ={
            showSideDrawer:true
        }

        sideDrawerClosedHanlder = () =>{
            this.setState({showSideDrawer:false});
        }

        render(){
            return  (
                  <AAux >
                        <Toolbar />
                        <SideDrawer   
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHanlder} />
                        <main className={classes.container}>
                            {this.props.children}
                        </main>
                  </AAux>
            )
        }




} 

  
 export default Layout   