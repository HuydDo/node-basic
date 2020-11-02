const Post = require('../models/post');

exports.getPosts = (req, res) => {

  // res.send("Hello world from node js")
  
  res.json({
    posts: [{title: 'First post'},{title: 'Second post'}
    ]
  })

}

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  // console.log("CREATING POST: ", req.body);
  post.save((err, result) => {
    if(err){
      return res.status()
    }
  })
}
