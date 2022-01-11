import express from 'express';
import dotenv, { config } from 'dotenv';

// Components
import Connection from './database/db.js'
import DefaultData from './default.js'

// DOTENV CONFIG
dotenv.config()

const app=express();
const PORT = 8000;
const username =process.env.DB_USERNAME;
const password =process.env.DB_PASSWORD;


Connection(username,password);
app.listen(PORT,()=> console.log(`This site can’t be reached ${PORT}`))

// DefaultData in Data FATCH FROM DATABASE

DefaultData();








