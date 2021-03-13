import React, { Component } from 'react';

import AAux from '../../hoc/AAux/AAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
 

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients:null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading:false,
        error:false
    }

    //it will get error because first ingredients is null 
    componentDidMount(){
        axios.get('https://react-my-burger-b9d53-default-rtdb.firebaseio.com/ingredients.json')    //we need to append .json//but when we make a mistake we dont get any error message its not cool 
        .then(response =>{
            this.setState({ingredients:response.data})
            console.log(response)
        })
        .catch(error =>{
            this.setState({error:true})
        })
    }


    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
   
    purchaseContinueHandler = () => {

        this.setState({loading:true})//i want to call this setState and set loading to true of course no we are loading the request
        const order = {
            ingredients:this.state.ingredients,
            price:this.state.price,
            customer : {
                name:'muhammet kuruoglu',
                address:{
                    street:'57 reed road',
                    zipCode:'37zb3434',
                    country: 'Turkey'
                },
                email:'mponeoth@gmail.com'
            },
            deliveryMethod:'fastest'
        }

        //alert('You continue!');//i can add any name instead orders it depends on me //thats the url i want to send a request to the URL which gets appended to my base URL or path which gets appended to our base URL 
        axios.post('/orders.json',order)//its going to create our orders node and store our orders beneath that node 
        .then(response =>{
            this.setState({loading:false, purchasing:false});
        })
        .catch(error =>{
            this.setState({loading:false, purchasing:false});//if an error occured we want to stop loading we dont want to spinner anymore because ui would be stuck in this case  

        });
    }   

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}

        let orderSummary =  null;

       
        let burger  = this.state.error ? <p>sorry we Did not react out to page </p> : <Spinner /> 

        if(this.state.ingredients){
             burger = (
                <AAux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
                </AAux>
            )
        orderSummary= <OrderSummary 
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />
        }
        
        if(this.state.loading){
            orderSummary = <Spinner />;
       }

        return (
            <AAux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </AAux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);