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

        DrawertoggleClicked = () =>{
            this.setState((prevState)=> {
                return {showSideDrawer :!prevState.showSideDrawer }
            })
        }
//due to the asynchronous nature of set state this may lead to unexpected outcomes  prevstate
//this is the clean way of setting the state  when it depends on old the state 

        render(){
            return  (
                  <AAux >
                        <Toolbar  DrawertoggleClicked={this.DrawertoggleClicked}/>
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