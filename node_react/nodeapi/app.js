const express = require('express')
const app = express();
//import mongoose
const mongoose = require('mongoose')
const morgan = require("morgan");
const bodyParser = require('body-parser')
// load env variables
const dotenv = require("dotenv");
dotenv.config();



// db
// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log('DB Connect'))


 
//db connection
//MONGO_URI=mongodb://localhost/nodeapi
mongoose.connect(
  process.env.MONGO_URL,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//bring in routes
// const postRoutes = require('./routes/post')
//app.get("/", postRoutes.getPosts);

//export destructor
// const {getPosts} = require('./routes/post')
const postRoutes = require('./routes/post')

const myOwnMiddleware = (req, res, next) =>{
  console.log("middleware applied!");
  next();
}

//middleware 
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(myOwnMiddleware)

// app.get("/", getPosts);
app.use("/", postRoutes);


const port = 8080
app.listen(port, () => {
  console.log(`A Node Js API is listening on port: ${port}`)
});

