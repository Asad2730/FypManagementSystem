const express=require("express");
const app = express();
const dotenv=require("dotenv");
const cors=require("cors");
const mongoose = require('mongoose');

//routes
const userRoutes=require("./routes/user"); 
const projectRoutes=require("./routes/project"); 
const taskPlanRoutes=require("./routes/task_plan"); 
const remarksRoutes=require("./routes/remarks"); 

//connection String
dotenv.config();
const uri = 'mongodb+srv://abubakar80187:404Urbanloop@cluster0.6vwfolu.mongodb.net/?retryWrites=true&w=majority'; // Replace with your own URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

//middlewares
app.use(express.json());
app.use(cors());
app.use('/api/users',userRoutes)
app.use('/api/project',projectRoutes)
app.use('/api/taskplan',taskPlanRoutes)
app.use('/api/remarks',remarksRoutes)



app.listen(8000,()=>console.log("server up and running on port 8000"))
