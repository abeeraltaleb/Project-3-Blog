import React ,{useState,useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from 'axios'
import Post from './components/Post';
import Add from './components/Add';
import Register from './components/Register';
import Login from './components/Login';
export default function App() {
const [posts, setPosts] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [username, setUsername] = useState("");
  
useEffect(()=>{
getData()
},[])

const getData=()=>{
   axios
   .get(`http://localhost:5000/posts`)
   .then((response)=>{
   console.log("DATA : ",response);
  setPosts(response.data);
  })
   .catch((err)=>{
     console.log("ERR :",err);
   })
 }


 const  postNewBlog= (body) => {
  // console.log("func postNewTodo from APP");
  // {"title":"task 5","isCompleted": false}
  axios
  .post(`http://localhost:5000/posts`,body)
  .then((response) => {
    // console.log('RESPONSE: ', response);
    console.log("DATA: ", response.data);
    // setTasks(response.data);
    
    getData()
    // change react hooks state using spread operator
  })
  .catch((err) => {
    console.log("ERR: ", err);
  });
};



const deletePost = (id) => {
  axios
  .delete(`http://localhost:5000/posts/${id}`)
    .then((response) => {
      // console.log('RESPONSE: ', response);
      console.log("DATA: ", response.data);
      getData();
      // change react hooks state using spread operator
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
};

const editPost = (id ,newTitle) => {
  axios
  .put(`http://localhost:5000/posts/${id}/${newTitle}`)
    .then((response) => {
      // console.log('RESPONSE: ', response);
      console.log("DATA: ", response.data);
      getData();
      // change react hooks state using spread operator
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
};





 const mapOverPosts=posts.map
((postObj,i)=>
 <Post
  key={i}
  posts={postObj}
  deletePost={deletePost}
  editPost={editPost}

  />);

  return (
  <div className='container App'>   
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/">Home</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to ="login" className="nav-link ">Login</Link>
        <Link to ="/add" className="nav-link" href="#">Add</Link>
      </div>
    </div>
  </div>
</nav>

    <Routes>
    <Route path="/" element={
    <div className='Home'>
    {mapOverPosts}
    </div>
    } />
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
    <Route path="/register" element={<Register />} />
    <Route path="/add" element={<Add createFunc={postNewBlog} />}/>
    </Routes>
    </div>
  )
}
