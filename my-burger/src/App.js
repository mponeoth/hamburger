import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/BurgerBuilder/checkout/Checkout'

class App extends Component {

  render () {
    return (
      <div>
        <Layout>  
          <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/Orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} /> 
       {/* biz exact yazdigimiz icin burgerbuilder ustte olmasina gerek yok cunku biz exact yazdik nolmade checout un ustune yazmamiz gerekirdi  */}
          </Switch>
        </Layout>
      </div>
    );  
  }
}

export default App;
