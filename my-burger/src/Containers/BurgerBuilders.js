import React, {Component} from 'react';
import AAux from '../hoc/AAux'
import Burger from '../Components/Burger/Burger'
import BuildControls from '../Components/Burger/BuildControls/BuildControls'

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

        }
    }
    //we have to keep in mind  we cant use map because its not array  its object 


    render(){
        return (
            <AAux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </AAux>
               
         );
    }
   
};



export default BurgerBuilders;