const express = require('express')
const { json } = require("express");
const tasks = require("./controller/todoController");
const model = require("./model/todo");
const routes = require("./routes/todoRoutes");
const database = require('./config/database')



const app = express()


database()

app.use(json());

app.use("/", routes);





const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Zuri Training on MongoDB')
})


app.listen(PORT, () => console.log(`Serving on port ${PORT}`)) 