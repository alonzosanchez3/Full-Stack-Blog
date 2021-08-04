const express = require('express');
const app = express();
const port = 5001;
const {User, Post} = require('./db/db.js')
const bodyParser = require('body-Parser')
const Hashes = require('jshashes')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())



//Register & Login
app.post('/register', (req, res) => {
  console.log('post recieved')
  const hashPassword = new Hashes.SHA1().b64(req.body.password);
  const {username, email} = req.body;
  const newUser = new User({username, email, password: hashPassword});
  newUser.save()
  .then(() => res.sendStatus(200))
  .catch(err => res.sendStatus(500))
})

app.post('/server/login', (req, res) => {
  const hashPassword = new Hashes.SHA1().b64(req.body.password);
  console.log(req.body)
  const {username} = req.body;
  const user = User.findOne({username})
  .then((data) => {
    console.log(data)
    if(!data) {
      res.sendStatus(402)
    } else if (hashPassword === data.password) {
      res.sendStatus(200)
    } else {
      res.sendStatus(402)
    }
  }).catch((err) => {
    res.sendStatus(500)
  })
})

//POSTS

app.get('/post/:id', (req, res) => {
  const post = Post.findById(req.params.id)
  .then((postData) => {
    console.log(postData)
    res.sendStatus(200)
  }).catch((err) => res.sendStatus(500))
})

app.get('/post', (req, res) => {
  const post = Post.find()
  .then((postData) => {
    console.log(postData)
    res.json(postData)
  }).catch(err => res.sendStatus(500))
})

app.post('/post', (req, res) => {
  const {title, body, username} = req.body;
  const post = new Post({title, body, username})
  post.save()
  .then(() => {
    res.sendStatus(200)
  }).catch(err => res.sendStatus(500))
})

app.put('/post/:id', (req, res) => {
  const post = Post.findById(req.params.id)
  .then((postData) => {
    if(postData.username === req.body.username) {
      Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(() => res.sendStatus(200))
    } else {
      res.sendStatus(400)
    }
  }).catch((err) => res.sendStatus(500))
})

app.delete('/post/:id', (req, res) => {
  const post = Post.findById(req.params.id)
  .then((postDat) => {
    if(postData.username === req.body.username) {
      post.delete()
      .then(() =>res.sendStatus(200))
      .catch(() => res.sendStatus(500))
    } else {
      res.sendStatus(400)
    }
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})