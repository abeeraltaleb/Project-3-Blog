import React from 'react'
// import axios from 'axios';
export default function Post(props) {
   const{_id,title,content}=props.posts;


   
    return (
        <div className='Post'>
            <p>Title: {title}</p>
            <p>{content}</p>
           
            {/* <button onClick={deletePost}>delete</button> */}
        </div>
    )
}
