import React, { Component } from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {

        state ={
            loadedPost:null
        } 

    componentDidUpdate (){//this.state.loadPost didnot work(because of null) !this.state.loadedPost || this is why we got it like this if something true then true means 
        if(this.props.id){//first we get the ID and then little bit later we get the little bit post but we rerun it in the dom immediately
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                 axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
            .then(response =>{
                this.setState({loadedPost:response.data})
                console.log(response);
            }
            )}
        }
     }


    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign:'center'}}>Loading...!</p>;
        }

        if(this.state.loadedPost){ //asenkron başlama ve sona erme zamanları ayrı olan, aynı zamanda olmayan (olgular, olaylar).

            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.content}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
      
        return post;
    }
}

export default FullPost;