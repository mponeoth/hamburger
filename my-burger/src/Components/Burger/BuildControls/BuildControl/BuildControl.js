import React from 'react'
import classes from './BuildControl.css'

const  BuildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.labell}</div>
        <button className={classes.Less}>less</button>
        <button className={classes.More} onClick={props.added}>more</button>
    </div>
);


export default BuildControl;