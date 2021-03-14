//npm install --save react-router react-router-dom installed first because we want to use react-router
import React, { Component } from 'react';
import { Route } from 'react-router';
// import axios from 'axios';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts' 
import NewPost from './NewPost/NewPost'

class Blog extends Component {
   

        render(){
            return (
                <div className="Blog">
                   <header>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/new-post">New-post</a></li>
                               
                            </ul>
    
                        </nav>
                   </header>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post"  component={NewPost} />
                    {/* here that is the default case which will use a lot */}
{/* here simply to what we import from the posts component what we previously directly used in jsx  we simply parsed this curly braces like that   */}
                </div>
            );
        }
     
    }


export default Blog;