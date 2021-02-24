import React, {Component} from 'react';
import AAux from '../hoc/AAux'
import Burger from '../Components/Burger/Burger'

class  BurgerBuilders extends Component{
    
    // constructor(props){  
    //     super(props);
    //     this.state={...}
    // }    instead of this we can use just state 

    state = {
        ingredients:{   
            salad:5,
            Bacon:1,
            cheese:2,
            meat:2,

        }
    }
    //we have to keep in mind  we cant use map because its not array  its object 


    render(){
        return (
            <AAux>
                <Burger ingredients={this.state.ingredients} />
                <div>Controls Burger</div>
            </AAux>
               
         );
    }
   
};



export default BurgerBuilders;