import React ,{useState,useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from 'axios'
import Post from './components/Post';
import Add from './components/Add';
import Register from './components/Register';
import Login from './components/Login';
import Article from './components/Article';

// import EditPost from './components/EditPost';
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
  //  console.log("DATA : ",response);
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

// const getPost = (id) => {
//   axios
//   .get(`http://localhost:5000/posts/${id}`)
//     .then((response) => {
//       // console.log('RESPONSE: ', response);
//       console.log("DATA: ", response.data);
//       getData();
//       // change react hooks state using spread operator
//     })
//     .catch((err) => {
//       console.log("ERR: ", err);
//     });
// };



const editPost = (id) => {
  axios
  .put(`http://localhost:5000/posts/${id}`)
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







const mapOverPosts=posts.map((postObj,i)=>(
 <Post
  key={i}
  posts={postObj}
  deletePost={deletePost}
  editPost={editPost}
  />
  ));

  return (
  <div className=' App'>   
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Blog</a>
    <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav">
        <li className='nav-item'>
        <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className='nav-item'>
        <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className='nav-item'>
        <Link to ="login" className="nav-link ">Login</Link>
        </li>
        <li className='nav-item'>  
      <Link to ="/add" className="nav-link" href="#">Add</Link>
      </li>
      </ul>
    </div>
  </div>
</nav>
<br/>

<Routes>
    <Route path="/" element={
    <div className='Home'>
      {mapOverPosts}
    </div>
    } />
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
    <Route path="/register" element={<Register />} />
    <Route path="/add" element={<Add createFunc={postNewBlog} />}/>
    <Route  path="/article/:id"  element={<Article  />}/>
    </Routes>
    <footer className="text-center text-white py-5 mt-5 bg-dark">
      <span>All rights reserved to Abeer AL-Talib 2022</span>
      
      </footer>
    
    </div>

 
  )
}
