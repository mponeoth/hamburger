import React from 'react'

import classes from './Order.css'

const order = (props) => {

    const ingredients = [];

    for (let ingredientsName in props.ingredients){
            ingredients.push({
            name:ingredientsName,
            amount:props.ingredients[ingredientsName]})
//i can then reach out to props.ingredients and access the ingredient with the ingredientName this is the value of the ingredient so 0 1 2 and so on 
        }
    const ingredientOutput = ingredients.map(ig =>{
        return <span
        style={{
            textTransform:'capitalize',
            display:'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'}}
        key={ig.key}> {ig.name}  {ig.amount} </span> 
    })
    return (
            <div className={classes.Order}>
                 <p>Ingredients : {ingredientOutput}</p>
                 <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
           </div>
           )
  
    };


export default order;