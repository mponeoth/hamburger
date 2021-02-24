import React, {Component} from 'react';
import AAux from '../hoc/AAux'
import Burger from '../Components/Burger/Burger'

class  BurgerBuilders extends Component{
    
    render(){
        return (
            <AAux>
                <Burger />
                <div>Controls Burger</div>
            </AAux>
               
         );
    }
   
};



export default BurgerBuilders;