const express = require('express');
const Mongoclient=require('mongodb').MongoClient;
const  cors=require("cors")
const url='mongodb://localhost:27017';
const dbName='TodoApp';
const app = express();
const port = 3000;