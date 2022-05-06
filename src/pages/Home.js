import { useState, useEffect } from "react";
import Header from "../header/Header";
import Posts from "../Posts/Posts";
import SideBar from "../sideBar/SideBar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home()
{
  const [posts, setPosts] = useState([]);
  const{ search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [search]);
    return(
        <>
          <Header />
        <div className=" pt-2 d-flex justify-content-between ">
          <div className="Posts row ms-2 Allposts">
          <Posts posts={posts && posts} />
          </div>
         
          <div className="">
             <SideBar /></div>
        </div>

        </>
    )
}