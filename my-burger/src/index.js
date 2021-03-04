import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
    axios.defaults.headers.common['Authorization'] ='AUTH TOKEN'//console da gozukuyor header bolumune yazdgimiz bu yazilar
    axios.defaults.headers.post['Content-type'] = 'application/json'//ayni sekilde burdada

axios.interceptors.request.use(request =>{
    // Do something before request is sent
    console.log(request)
    //edit request config
    //it will effect all request sent from anywhere in your app 
    // Do something with request error
    return request
},error =>{
    console.log(error)
    return Promise.reject(error)
})
// Add a response interceptor
axios.interceptors.response.use(response =>{
    console.log(response)
    return response;   
},error =>{
    console.log(error)
    // Do something with response error
    return Promise.reject(error)
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
