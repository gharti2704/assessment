import Router, {Request, Response} from 'express';
import {getPosts} from '../posts/getPosts'

const router = Router();

router.get('/posts', async(req: Request, res: Response) => {
  try {
    const posts = await getPosts();
    console.log('REQUEST!');
    res.status(200).json(posts.data);
    
  } catch (error) {
    res.status(500).json({ERROR: 'We are sorry! something went wrong.'});
 
  }
   
});

export{router};