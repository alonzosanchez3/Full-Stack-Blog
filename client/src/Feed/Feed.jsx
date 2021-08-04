import React from 'react';
import './Feed.css';
import Post from './Post.jsx'

const Feed = (props) => {

  const createPosts = props.posts.map((post, index) => {
    return <Post key={post._id} title={post.title} body={post.body} username={post.username}/>
  })

  return (
    <div className="feed">
      {createPosts}
    </div>
  )
}

export default Feed;