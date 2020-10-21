const express = require('express')
const postController = require('../controllers/post')

const router = express.Router()

router.get('/',postController.getPosts)

module.exports = router;


// const getPosts = (req, res) => {
// exports.getPosts = (req, res) => {
  // res.send("Hello world from node js")
// }

// module.exports = {
//   getPosts
// };