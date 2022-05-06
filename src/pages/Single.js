import SideBar from "../sideBar/SideBar";
import SinglePost from "../SinglePost/SinglePost";

export default function Single(){
return(
    <div className="d-flex m-2">
    <SinglePost />
    <SideBar />
    </div>
)
}