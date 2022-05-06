import "./App.css";
import Home from "./pages/Home";
import Single from "./pages/Single";
import TopBar from "./TopBar/TopBar";
import Write from "./pages/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
       <TopBar />
      <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/write" element={<Write />} />
   <Route exact path="/post/:postId" element={<Single />} />


 
 
   
    </Routes>
    </Router>
  );
}

export default App;
