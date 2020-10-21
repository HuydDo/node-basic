// const helpers = require("./helpers");
// const {sum}= require("./helpers");

//node init
//npm i nodemon
// "scripts": {
//  "dev": "node app.js"
//},
//npm run dev

// const http = require('http')

// const server = http.createServer( (req, res) =>{
//   res.end("hello world from node!")
// })

// server.listen(3000)


// const total = helpers.sum(1,2)
// const total = sum(1,2)

// console.log('Total: ',total)



//using express module
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send("Hi there from express")
// })

// app.listen(3000)

const fs = require('fs')  //fs: file system
const fileName = 'target.txt'

// const data = fs.readFileSync(fileName)
// console.log(data.toString())
// fs.watch(fileName, () => console.log(`File changed!`))

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
  // if(err) {
    // console.log(err)
  // }

  if(err) errHandler(err)
  // console.log(data.toString())
  dataHandler(data)
})


console.log('Node js asyn programming...?')