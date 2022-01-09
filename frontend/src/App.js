import React ,{useState,useEffect} from 'react'
import "./App.css";
import axios from 'axios'
import Post from './components/Post';
import Add from './components/Add';
export default function App() {
const [posts, setPosts] = useState([]);
  
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





 const mapOverPosts=posts.map
((postObj,i)=>
 <Post
  key={i}
  posts={postObj}

  />);

 
 
  return (
    <div className='App'>
      <p>app</p>
      {/* <button onClick={getData}>GET Posts</button> */}
      {mapOverPosts}
     
      <Add createFunc={postNewBlog} />
    </div>
  )
}
