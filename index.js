import express from 'express';
import pg from 'pg';
import { router } from './router/user.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use('/',router);
app.listen(port,()=> { `listening to port ${port}`});