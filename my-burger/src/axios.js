import axios from 'axios'

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] ='AUTH TOKEN FROM INSTANCE';//console da gozukuyor header bolumune yazdgimiz bu yazilar


//instance.interceptors.request...

export default instance