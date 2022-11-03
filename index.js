import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import posts from './routers/posts.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 2222;

const URI =process.env.DATABASE_URL;

app.use(bodyParser.json({ litmit: '30mb' }));
app.use(bodyParser.urlencoded({ extends: true, litmit: '30mb' }));
app.use(cors());

// ROUTING

app.use('/posts', posts);

app.use('/', (req, res) => {
	res.send('HOME PAGE');
});
mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to DB');

		app.listen(PORT, () => {
			console.log(`Server is running on  http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log('err', err);
	});
