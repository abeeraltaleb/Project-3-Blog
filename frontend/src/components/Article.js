import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Article(props) {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
const params =useParams();
console.log({props,params});
useEffect(() => {
    axios
    .get(`http://localhost:5000/article/${params.id}`) // you can access it like this
      .then((res) => {
        console.log("DATA: ", res.data);
        setTitle(res.data.title);
        console.log(res.data.title);
        setContent(res.data.content);
      })
      .catch(error=>console.log(error))
    }, [props])
  return (
  <div>
<h1>{title}</h1>
<p>{content}</p>
  </div>
  )
}
