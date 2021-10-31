import Router from 'express';
import {getPosts} from '../controllers/getPosts'

const router = Router();

router.get('/api/posts', getPosts);

export{router};