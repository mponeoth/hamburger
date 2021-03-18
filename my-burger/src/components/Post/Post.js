import React from 'react';
import { withRouter } from 'react-router-dom';//using this approach of accessing props with higher order component here 

import './Post.css';
 
const post = (props) => {
     //console.log(props) we can access like this as well 
       return (
            <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
                </div>
            </article>
       )  
}

export default withRouter(post);