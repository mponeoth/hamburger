import React, { Component } from 'react'
import AAux from '../../../hoc/AAux' 
import Button from '../../UI/Button/Button'


class OrderSummary extends Component{
    //this could be a functional component, doens not have to be a class 
    componentWillUpdate(){
        console.log('[Order Summary] componentWillUpdate')
    }

    render(){

      const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey =>{
               return(<li  key={igKey}> 
                   <span style={{textTransform:'capitalize'}}>{igKey}</span>:
                    {this.props.ingredients[igKey]}
                      </li>)
      });//textTransform:'capitalize' ile nesnelerimizin(salada bacon meat) hepsinin bas harflerini buyuk baslatmak icin kullaniyoruz 
      return (

        <AAux>
            <h3> your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>total price {this.props.Price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={this.props.cancelling}>Cancel</Button>
            <Button btnType='Success' clicked={this.props.Contining}>Continue</Button>
        </AAux>
      )  

    }
}

export default OrderSummary