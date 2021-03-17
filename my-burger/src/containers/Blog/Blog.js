//npm install --save react-router react-router-dom installed first because we want to use react-router
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to={{
                                    pathname:'/new-post',
                                    hash:'#submit',
                                    searc:'?quick-submit=true'
                                }}>New-post</Link></li>
        {/* when loading same page again its still react rendering the javascript to dom but no spinning */}
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