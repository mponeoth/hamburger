import React from 'react'

import AAux from '../../../hoc/AAux' 

const orderSummary = (props) =>{
            const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey =>{
                     return(<li  key={igKey}> 
                         <span style={{textTransform:'capitalize'}}>{igKey}</span>:
                          {props.ingredients[igKey]}
                            </li>)
            });//textTransform:'capitalize' ile nesnelerimizin(salada bacon meat) hepsinin bas harflerini buyuk baslatmak icin kullaniyoruz 
          return (

            <AAux>
                <h3> your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout?</p>
            </AAux>
          )  
            
}

export default orderSummary