import React, {useContext, useState} from 'react';
import "./Create.css";
import axios from "axios";
import {Context} from '../../context/Context';


const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    const post = {
      username: user,
      title,
      body
    }
    console.log(post)
    axios.post("/post", post)
    .then((res) => {
      console.log(res)
      window.location.replace("/post/" + res.data._id)
    }).catch((err) => console.log(err))
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleBodyChange = (e) => {
    setbody(e.target.value)
  }

  return (
    <div className="create">
      <img
        className="create__image"
        src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={handleTitleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={handleBodyChange}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Create;