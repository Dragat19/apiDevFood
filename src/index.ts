import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hola mundo Nodejs + TS + vamoosssss!!!!!!!!!');
});

// app.listen(port, ( ) => {
//     console.log(`server is listening on ${port}`);
// });

export default app;