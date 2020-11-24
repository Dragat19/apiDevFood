import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        ok: true,
    });
});

app.listen(port, ( ) => {
    console.log(`server is listening on ${port}`);
});

export default app;