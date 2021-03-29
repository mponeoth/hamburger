import React, { Component,Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
//react lazy is a method that was added with  "react": "^16.6.0", that allows us to load components asynchronously which means they are only loading the code behind them is only loaded when they are being rendered 
//this is for example useful when having routing in your application because only when a user visits a certain routes that component will be required and react lazy allows you to defer(ertelemek) the rendering and the loading 
//of the code of that component until it is required this is a neat(duzenli)  
//if you have very simple components using suspends might actually be overkill and could even slow down your application for bigger application very useful
import User from './containers/User';
import Welcome from './containers/Welcome';
const Posts = React.lazy(()=> import ('./containers/Posts'));


class App extends Component {
    state ={
      showPost:false
    }
    toggleHandler = () =>{
      this.setState( prevState =>{
        return {showPost :!prevState.showPost} 
      })
  }

  render() {
   
    return (
      <React.Fragment>
      <button onClick={this.toggleHandler}>Toggle</button>
      {this.state.showPost ? (
        <Suspense fallback={<div>loading...</div>}>
            <Posts />
          </Suspense> )  :  (
          <User />
        )}
      </React.Fragment>
    
            
    
     
    
    //   <BrowserRouter>
    //     <React.Fragment>
    //       <nav>
    //         <NavLink to="/user">User Page</NavLink> |&nbsp;
    //         <NavLink to="/posts">Posts Page</NavLink>
    //       </nav>
    //       <Route path="/" component={Welcome} exact />
    //       <Route path="/user" component={User} />
    //       <Route path="/posts" render={()=>
    //       <Suspense fallback={<div>loading...</div>}>
    //         <Posts />
    //       </Suspense>} />
    //     </React.Fragment>
    //   </BrowserRouter>
    // );
    )
          }
}

export default App;
