import React, {Component} from 'react';
import AAux from '../hoc/AAux'
import Burger from '../Components/Burger/Burger'
import BuildControls from '../Components/Burger/BuildControls/BuildControls'

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
        totalPrice:4
    }
    //we have to keep in mind  we cant use map because its not array  its object 

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
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemoved={this.removeIngredientHandler}
                               disabled={disabledInfo} />
            </AAux>
               
         );
    }
   
};



export default BurgerBuilders;