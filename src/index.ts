import express, { Request, Response } from 'express';
import logger from './logger';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend Listening !')
})

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
