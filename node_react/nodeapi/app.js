const express = require('express')
const app = express();
const morgan = require("morgan");

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
app.use(morgan("dev"))
// app.use(myOwnMiddleware)



// app.get("/", getPosts);
app.use("/", postRoutes)


const port = 8080
app.listen(port, () => {
  console.log(`A Node Js API is listening on port: ${port}`)
});

