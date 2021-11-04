import express from 'express';
const cors = require('cors');
import {router} from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = 8000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
