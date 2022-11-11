const express = require('express');

const router = express.Router();
const controller = require('../controller/todoController');

router
.get('/task', controller.getAllTasks)
.get('/task/:id', controller.getTask)
.post('/task', controller.AddTask)
.put('/task/:id', controller.updateTask)
.delete('/task/:id', controller.deleteTask)

module.exports = router;