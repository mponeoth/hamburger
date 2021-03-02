//lets turn it into a class component so that we can add lifecycle hooks, so that we can see when this is updated 

import React, { Component } from 'react'
import classes from './Modal.css'
import AAux from '../../../hoc/AAux'
import Backdrop from '../../../Components/UI/Backdrop/Backdrop'

class Modal extends Component {
        
        shouldComponentUpdate(nextProps,nextState){
               return nextProps.show !== this.props.show;
        }
 //we only return true if show changed        
//i want to check or now i might want to make sure that this only updates if show changes because that`s the only thing
//which matters for me here we dont unnecessarily re-render //instead this we can use memo //
        componentWillUpdate(){
            console.log('[Modal] componentWillUpdate ')
        }


        render(){
         return (
         <AAux>
                <Backdrop
                     show={this.props.show} 
                     clicked={this.props.modalClosed}/>

                    <div className={classes.Modal}
                    style={{
                        transform:this.props.show  ? 'translateteY(0)' : 'translate(-10)',
                        opacity:this.props.show ? '1' : '0'
                    }}>
                        {this.props.children}
                    </div>
        </AAux>)  
        }
    }

export default Modal