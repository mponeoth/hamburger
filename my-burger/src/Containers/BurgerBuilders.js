//do we have any state or prop changes which trigger a re-rendering even though this might not be required
//if we have a look at the running application, most clicks and things we do really change the UI and therefore
//should trigger updates, should trigger a re-rendering of these components so we should not really lose performance
//there and using a lot of pure components for unnecessary shouldComponentUpdate checks might even hit the performance
//more than doing an occasional unnecessary re-rendering  
//I can identify one element here though where  we might be able to save some performance by not re-rendering it unnecessarily
//that is the modal component it wraps the order summary and that of course means that  whenever ingredients
//or price changes since these are props of order summary, order summary will be re-rendered 


import React, {Component} from 'react';
import AAux from '../hoc/AAux'
import Burger from '../Components/Burger/Burger'
import BuildControls from '../Components/Burger/BuildControls/BuildControls'
import Modal from '../Components/UI/Modal/Modal'
import OrderSummary from '../../src/Components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};


class  BurgerBuilders extends Component{
    
    // constructor(props){  
    //     super(props);
    //     this.state={...}
    // }    instead of this we can use just state 

    state = {
        ingredients:{   
            salad:0,
            Bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4,
        purchasable:false,
        
        purchasing:false
    }
    //we have to keep in mind  we cant use map because its not array  its object 
    purhaceIngredient = (ingredients) =>{
        
        const sum = Object.keys(ingredients)
        .map((igKey) =>{
             return ingredients[igKey];  //igKey will be the amount because with ingredients 
        })
        .reduce((sum,el) =>{
               return sum+el;
        },0);//we ll use reduce bu this time not to flatten the array but to turn it into single number this is why we finished 0
        
        this.setState({purchasable: sum>0}) 
        //if we have at least one ingredient its true then purchasable is true 
    }



    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredients})
        this.purhaceIngredient(updatedIngredients);
    }



    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
            if (oldCount <=0){
                return;
            }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredients})
        this.purhaceIngredient(updatedIngredients)

    }

    purchasingHandler = () =>{
        this.setState({purchasing:true})
    }

    purchasingCancelling = () =>{
        this.setState({purchasing:false})
    }

    purchasingContinue = () =>{
         alert('you Continue');
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0   //we mean as a key salad`s value meat`s value
        }
        //if its true should be disabled    {salad:true, meat:false, ... }
        return (
            <AAux>
                <Modal 
                show={this.state.purchasing}
                 modalClosed={this.purchasingCancelling}> 
                    <OrderSummary 
                     ingredients ={this.state.ingredients}
                     cancelling={this.purchasingCancelling}
                     Contining={this.purchasingContinue}
                     Price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                 ingredientAdded={this.addIngredientHandler}
                 ingredientRemoved={this.removeIngredientHandler}
                 disabled={disabledInfo} 
                 price={this.state.totalPrice}
                 purchasable={this.state.purchasable}
                 purchasing={this.purchasingHandler}/>
            </AAux>
               
         );
    }
   
};



export default BurgerBuilders;