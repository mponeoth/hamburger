import React, { Component } from 'react';
//import axios from 'axios'
import axios from '../../axios'
//axios object which we re not using anymore here in the blog container 
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

        state = {
            Posts:[],
            selectedpostsID:null,
            error:false
        }

    componentDidMount(){
            axios.get('/posts')
            .then(response =>{
                const  atama=  response.data.slice(0,4)
                const updatedPosts = atama.map(post =>{
                    return  {
                        ...post, author:'muhammet'
                } 
                })
                this.setState({Posts:updatedPosts})
                //console.log(response) inside of response data we get only for data with slice method
            }) .catch(error =>{
                //console.log(error)
                this.setState({error:true})
            })
    }

        postSelectedHandler = (id) =>{
            this.setState({selectedpostsID:id})
        }
 

    render () {
            let Postsa = <div>something bad happened</div>

        if(!this.state.error){
            
                     Postsa =this.state.Posts.map(post =>
                    {return <Post
                     key={post.id} 
                     title={post.title}
                     Author={post.author}
                     clicked={()=>this.postSelectedHandler(post.id)} />} )

                   
                }
                return (
                    <div>
                        <section className="Posts">
        
                            {Postsa}
        
                        </section>
                        <section>
                            <FullPost 
                             id={this.state.selectedpostsID}/>
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

//we sent the request to And for dummy placeholder services

// now we can use it here  in componentDidMount axios offers a GET method for sending you guessed it 

//* //a list of posts we fetched from a server to  be a precise */
//* componentDidMount is a great place for causing side effects but not for updating state since it triggers a re-renders */
//* componentDidMount is the best place to send a HTTP request  */