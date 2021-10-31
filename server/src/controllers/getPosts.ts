import axios from 'axios';
import {Request, Response} from 'express';

const getPosts = async(req: Request, res: Response) => {
  try {
    const posts = await axios.get('http://jsonplaceholder.typicode.com/posts');
    res.status(200).json(posts.data);
    
  } catch (error) {
    res.status(500).json({ERROR: 'We are sorry! something went wrong.'});
 
  }
   
}

export{getPosts};