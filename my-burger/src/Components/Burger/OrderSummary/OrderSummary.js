import React from 'react'
import AAux from '../../../hoc/AAux' 
import Button from '../../UI/Button/Button'


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
                <p><strong>total price {props.Price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={props.cancelling}>Cancel</Button>
                <Button btnType='Success' clicked={props.Contining}>Continue</Button>
            </AAux>
          )  
            
}

export default orderSummary