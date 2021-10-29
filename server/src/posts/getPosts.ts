import axios from 'axios';

const getPosts = async () => await axios.get('http://jsonplaceholder.typicode.com/posts');
   

export{getPosts};