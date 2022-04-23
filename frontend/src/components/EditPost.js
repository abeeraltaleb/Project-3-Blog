import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditPost(props) {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");

const params =useParams();
console.log({props,params});


const changeOnClick = e => {
  e.preventDefault();
};

useEffect(() => {
  axios
  .get(`http://localhost:5000/article/${params.id}`) // you can access it like this
    .then((res) => {
      console.log("DATA: ", res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
    })
    .catch(error=>console.log(error))
  }, [])

const editArticle =() =>{
axios.put(`http://localhost:5000/posts/${params.id}`,{
  title,content
})
.then(res => console.log("DATA: ", res.data))
.catch(err=> {
console.log(err)
});

}

  return (
  <div className='Add container'>
          <h1>Update Post</h1>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
          {/* <span className='message'>{message}</span> */}
           <div className="form-group">
             <label htmlFor="exampleFormControlInput1">Title</label>
             <input type="text" className="form-control" id="exampleFormControlInput1"
             value={title}
             onChange={e=>setTitle(e.target.value)}
             />
           </div>
           <div className="form-group">
             <label htmlFor="exampleFormControlTextarea1"  >Content</label>
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
             value={content}
             onChange={e=>setContent(e.target.value)}
             ></textarea>
           </div>
           <button type="submit" className="btn btn-primary mb-2"
           onClick={editArticle}
           >update</button>
           </form>
  </div>
  )
}

