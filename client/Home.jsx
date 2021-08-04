import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from '../../Header/Header.jsx'
import './Home.css'
import Feed from '../../Feed/Feed.jsx'

const Home = () => {

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const getFeed = () => {
      axios.get('/post')
      .then((data) => {
        console.log(data.data)
        setFeed(data.data)
      })
    }
    getFeed();

  }, [])

  return (
    <div className="home">
      <Header header={feed.username}/>
      <div>
        <Feed posts={feed}/>

      </div>

    </div>
  )
}

export default Home;