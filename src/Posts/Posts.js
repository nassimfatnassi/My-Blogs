import {Link} from "react-router-dom";

import "./Posts.css";
export default function Posts({posts})
{
    return(
      posts.map((p) => (
        <div key={p._id} className="card post-pic m-3"  >
        <img src={p.photo} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{p.title}</h5>
          <p className="card-text"> {p.desc }</p>
          <Link to={`/post/${p._id}`} className="btn">Go to Blog</Link>
        </div>
      </div>
      ))

    )
}