import React from 'react'
import classes from './Modal.css'
import AAux from '../../../hoc/AAux'
import Backdrop from '../../../Components/UI/Backdrop/Backdrop'

const Modal = (props) =>(
            <AAux>
                <Backdrop show={props.show}   clicked={props.modalClosed}/>
            <div className={classes.Modal}
            style={{
                transform:props.show  ? 'translateteY(0)' : 'translate(-10)',
                opacity:props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
            </AAux>

)


export default Modal