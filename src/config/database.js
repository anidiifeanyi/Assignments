const mongoose = require('mongoose')
const {MONGO_URI} = process.env
const { MongoClient } = require('mongodb')
require('dotenv').config() 

const connectDB =  async () => {
  try {
  const Client = new MongoClient(MONGO_URI)
  await Client.connect()
  console.log('MongoDB Connected');

  } catch (error) {
    console.log(error.message)
  }
}


 
module.exports = connectDB;

 