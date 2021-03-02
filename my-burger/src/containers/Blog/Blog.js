import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response);
            })
            //we sent the request to And for dummy placeholder services
    }
                // now we can use it here  in componentDidMount axios offers a GET method for sending you guessed it 

                //* //a list of posts we fetched from a server to  be a precise */
                //* componentDidMount is a great place for causing side effects but not for updating state since it triggers a re-renders */
                //* componentDidMount is the best place to send a HTTP request  */
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
             
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;

//Axios is a third-party javascript library which you can add to any javascript project its not connected to React at all 
//but of course it fits nicely into React because its Javascript this is not something strongly connect to React 
//npm i axios --save