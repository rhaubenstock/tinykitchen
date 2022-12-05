import express from "express";
import {orders} from './routes/orders.js';
import { MONGO_URI } from './config/keys.js';
import mongoose from 'mongoose';

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log("MongoDB Connected!"))
	.catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use("/api/orders", orders);

//make sure stuff comes before this catchall:
// app.get('/', ...) 
app.get('/', (_req, res) => res.send('Hello World\n'));


const port = process.env.PORT || 5001;
const callback = () => console.log(`Server is running on port ${port}`);
app.listen(port, callback);
