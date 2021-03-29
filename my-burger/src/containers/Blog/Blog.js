//npm install --save react-router react-router-dom installed first because we want to use react-router
import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//this of course now allows us to apply some styling  
// import axios from 'axios';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts' 
//import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/AsyncComponent.js';
const AsyncNewPost =  asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
//we dont want to include it in the bundle we want to load it when needed 
//this is how we load components asynchronously this is extremely useful in bigger apps where there are bigger chunks of code

class Blog extends Component {
        state ={
            auth:true
        }

        render(){
            return (
                <div className="Blog">
                   <header>
                        <nav>
                            <ul>
                {/* when we use the exact we prevent effectting both as a color because in new-post we use / as well  */}
                {/* activeClassName="my-active" to get active homepage */}
                                <li><NavLink
                                 to="/posts/" 
                                 exact //(exact) we typically use more specific routes like /posts though so this shouldnot be an issue 
                                 activeClassName="my-active"
                                 activeStyle={{
                                     color:'#fa923f',
                                     textDecoration:'underline'}}>Home</NavLink></li>
                                {/* this is how we can style the active links  we have to use NavLink  */}
                                <li><NavLink to={{
                                    pathname:'/new-post',

                                    hash:'#submit',
                                    searc:'?quick-submit=true'
                                }}>New-post</NavLink></li>
                            </ul>
    
                        </nav>
                   </header>
    {/* its parsed from top to bottom so new post is recognized first and this doesnot accidently catch this because new posts of course could be interpreted as an ID  */}
                    <Switch>
                       {this.state.auth ? <Route path="/new-post"  component={AsyncNewPost} /> :null} 
                        <Route path="/posts"  component={Posts} />     
                        <Route render={()=><h1> not Found </h1>} />
                        {/* when the page is not found it will be shown like this message not found  */}
                        {/* <Redirect from="/" to="/posts" />    */}
                        {/* when we are in "/" it will Redirect us to "/posts" directly */}
                        {/* <Route path="/"  component={Posts} />      */}
                    </Switch>           
{/* when we use only slash (/) :id we can see the id in other page but we want only see which we click we should use swich router to prevent mixing pages */}
                    {/* here that is the default case which will use a lot */}
{/* here simply to what we import from the posts component what we previously directly used in jsx  we simply parsed this curly braces like that   */}
                </div>
            );
        }
     
    }


export default Blog;