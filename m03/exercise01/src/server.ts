import express, { Application } from 'express';
import { PORT as port } from './config/index';
import router from './routes/expense.route';

const app: Application = express();
const PORT = Number(port) || 8080;

app.use(express.json());

app.use("/expenses", router)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})