const express=require("express");
const app = express();
const dotenv=require("dotenv");
const cors=require("cors");
const fileUpload = require('express-fileupload');

const bodyParser = require('body-parser');



const mongoose = require('mongoose');


//routes
const userRoutes=require("./routes/user"); 
const projectRoutes=require("./routes/project"); 
const taskPlanRoutes=require("./routes/task_plan"); 
const remarksRoutes=require("./routes/remarks"); 
const proposalRoutes=require('./routes/proposal'); 
const ideaRoutes=require('./routes/idea'); 

//connection String
dotenv.config();
const uri = 'mongodb+srv://abubakar80187:404Urbanloop@cluster0.6vwfolu.mongodb.net/?retryWrites=true&w=majority'; // Replace with your own URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));




//middlewares

app.use(cors());
app.use(fileUpload());

// Increase the maximum request size limit to 50MB
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json({ limit: '10mb' }));

//app.use('/uploads/', express.static('uploads'));

app.use('/api/users',userRoutes)
app.use('/api/project',projectRoutes)
app.use('/api/taskplan',taskPlanRoutes)
app.use('/api/remarks',remarksRoutes)
app.use('/api/proposal',proposalRoutes)
app.use('/api/idea',ideaRoutes)
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const path = require('path').join(__dirname, 'uploads', filename);
  res.sendFile(path);
});

app.listen(8000,()=>console.log("server up and running on port 8000"))
