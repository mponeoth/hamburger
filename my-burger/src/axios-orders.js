import axios from 'axios'

const instance = axios.create({
    baseURL:'https://react-my-burger-b9d53-default-rtdb.firebaseio.com/'
});

export default instance