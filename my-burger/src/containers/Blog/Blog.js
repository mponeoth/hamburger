//npm install --save react-router react-router-dom installed first because we want to use react-router
import React, { Component } from 'react';
import { Route } from 'react-router';
// import axios from 'axios';
 import './Blog.css';
 
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
                    <Route path="/" exact render={()=> <h1>Home</h1>} />
                    <Route path="/" exact render={()=> <h1>Home2</h1>} />
  {/* without exact(o sayfaya ozgu) exact means only for this (/) page it can be shown if we dont exact we see that link all pages   */}
 {/* we want to load posts component we already turned on routing in the app.js by wrapping everything with the browser router  */}
{/* in the blog component where i want to load my different pages i need to import something else from       */}
                </div>
            );
        }
     
    }


export default Blog;