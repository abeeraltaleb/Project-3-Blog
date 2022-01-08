import React from 'react'

export default function Post(props) {
   const{_id,title,content}=props.posts;

   
   
    return (
        <div className='Post'>
            <p>Title: {title}</p>
            <p>{content}</p>
        </div>
    )
}
