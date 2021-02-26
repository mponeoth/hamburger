import React from 'react'
import classes from './BuildControls.css'
import BuildControl from  './BuildControl/BuildControl'

const controls = [      //we just created a constant not state not a property  
    {label:'Salad',type:'salad'},//you should have the same casing and so on as here in type property
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'Bacon'},
    {label:'Meat',type:'meat'},
];  

const buildControls = (props) => (


         <div className={classes.BuildControls}>
             <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>


             {controls.map(ctrl =>(
                 <BuildControl 
                 key={ctrl.label} 
                 labell={ctrl.label}
                 added={() =>props.ingredientAdded(ctrl.type)}
                 remove={()=>props.ingredientRemoved(ctrl.type)}
                 disabled={props.disabled[ctrl.type]}
                 /> //how many keys and label have it will show in  localhost
              ))}
              <button 
              className={classes.OrderButton}
              disabled={!props.purchasable}>ORDER NOW</button>
         </div> 
);



export default buildControls;