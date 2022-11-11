// const {Todos} = require('../model/todo')
const {MongoClient, ObjectId} = require('mongodb')
require('dotenv').config() 
const client = new MongoClient(process.env.MONGO_URI)
const db = client.db('todo')


// Get All Tasks
exports.getAllTasks = async (req, res) => {
    try {
        const todo = await db.collection('task').find({}).toArray();
        res.status(200).json({
            message: 'All Tasks',
            todo
        })
    } catch (err) {
        res.status(500).json({message: err})
    }

}


// Get a Task
exports.getTask = async (req, res) => {
    try {
        let id = req.params.id
        const todo = await db.collection('task').findOne({_id: ObjectId(id)})
        
          res.status(200).json({
              message: 'Task Found',
              todo
        })
      
    } catch (err) {
        res.status(500).json({message: err})
    }
}


//  Add Task
exports.AddTask = async (req, res) => {
    try {
        const {Title, Description} = await req.body
        const newTask = {
          Title,
          Description,
          Date: new Date().toLocaleDateString(),
          Time: new Date().toLocaleTimeString()
        }
        
        await db.collection('task').insertOne(newTask)
        
        res.status(200).json({
            message: 'Task Added',
            newTask
        })
    } catch (err) {
        res.status(500).json({message: err.message})
    }  
}


//  Update Task
exports.updateTask = async (req, res) => {
    try {
        let id = req.params.id
        
        const {Title, Description} = await req.body
        const updateTask = { Title, Description }
        await db.collection('task').updateOne({_id: ObjectId(id)},{$set:updateTask})
        
        res.status(200).json({
            message: 'Task Updated',
            updateTask
        })
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }  
} 


// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        let id = req.params.id
        
        const todo = await db.collection('task').deleteOne({_id: ObjectId(id)})
        
        res.status(200).json({
            message: 'Task Deleted',
            todo
        })
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }  
}