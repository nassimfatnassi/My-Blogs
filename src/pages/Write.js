import axios from "axios";

import {  useState } from "react";

export default function Write()
{
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      photo,
    };
    try {
      const res = await axios.post("/posts/add", newPost);
      window.location.replace("/");
    } catch (err) { console.log(err) }
  };
    return(
        <div className="container mt-3 mb-5">
            <img src="blog.jpg" className="mb-3 img-fluid rounded" />
     <form onSubmit={handleSubmit}>
   
     <label for="exampleInputPassword1" className="form-label">Blog Picture URL :</label>
     <input  type="text"
            placeholder="URL"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setPhoto(e.target.value)}  />

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Blog Title :</label>
    <input  type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
             />
  </div>
  <div className="form-floating">
  <textarea  type="text"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)} ></textarea>
  <label for="floatingTextarea2">Description</label>
</div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}