import React, { Component } from "react";
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component{

    state = {
        posts: [],
       
    }

    //if we check console we see what type of information give us react router 
    componentDidMount () {
        console.log(this.props)
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                 console.log(error);
                //this.setState({error: true});
            });
    }
    
    postSelectedHandler = (id) => {//this is the second way navigation instead of (Link)
        // this.props.history.push({pathname:'/' + id}) both will work
        this.props.history.push('/' + id)
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
               // <Link to={'/' + post.id}  >
                        <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        //{...this.props} this is another way we can information about react-router information like match history location staticContext
                        clicked={() => this.postSelectedHandler(post.id)}/>
                //</Link>
                );
    //when clicking on this i actually now want to load the full post for this we of course also need to determine where this full post should be shown  
            })
        }
       
            return(
                <section className="Posts">
                    {posts}
                </section>);

        }

}
export default  Posts
