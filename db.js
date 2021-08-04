const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogPosts', {useNewUrlParser: true}, {useUnifiedTopology: true})
.then(console.log('connected to db'))
.catch((err) => console.log(err))

// mongoose.connect.once('open', () => {
//   console.log('connected')
// })

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required:true,
    unique:true
  },
  username: {
    type: String,
    required: true
  }

})

const User = mongoose.model('User', userSchema)



const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body:{
    type: String,
    required:true
  },
  image: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true
  }

})

const Post = mongoose.model("Post", postSchema)

module.exports = {
  User,
  Post
}
