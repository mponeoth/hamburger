//npm install --save react-router react-router-dom installed first because we want to use react-router
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
//this of course now allows us to apply some styling  
// import axios from 'axios';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts' 
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'


class Blog extends Component {
   

        render(){
            return (
                <div className="Blog">
                   <header>
                        <nav>
                            <ul>
                {/* when we use the exact we prevent effectting both as a color because in new-post we use / as well  */}
                {/* activeClassName="my-active" to get active homepage */}
                                <li><NavLink
                                 to="/" 
                                 exact
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
     
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post"  component={NewPost} />
                    <Route path="/:id"  component={FullPost} />
                    {/* here that is the default case which will use a lot */}
{/* here simply to what we import from the posts component what we previously directly used in jsx  we simply parsed this curly braces like that   */}
                </div>
            );
        }
     
    }


export default Blog;