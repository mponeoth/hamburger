import React, {Component} from 'react';
import Layout  from './Components/Layout/Layout'
import BurgerBuilders from './Containers/BurgerBuilders'

class App extends Component{

    render(){
      return(
        <div>
        <Layout>
          <BurgerBuilders />
        </Layout>
        </div>
      )

    }

}
export default App