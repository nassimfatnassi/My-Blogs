
export default function SinglePost(){
    return(
        <>
      <div className="card mb-3">

  <div className="card-body">
    <h5 className="card-title h1 text-center">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text text-end"><small className="text-muted">Last updated 3 mins ago</small></p>
    <div className="d-flex justify-content-end"><button className="btn btn-success m-3">Edit</button>
    <button className="btn btn-danger m-3">Delete</button>
    </div>
    <img src="post.png" className="card-img-top" alt="..." />
  </div>
</div>

        </>
    )
}