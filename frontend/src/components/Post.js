import React from 'react'
// import axios from 'axios';
export default function Post(props) {
   const{_id,title,content}=props.posts;


   
    return (
<div className='Post'>
<div className='row'>
<div className="card ms-20" style={{width: "40rem"}}  >
  <div className="card-body">
    <form>
    <h5 type="text" className="card-title">{title}</h5>
    <p className="card-text">{content}</p>
    </form>
    <button
                onClick={() => {
                  props.deletePost(_id);
                }}
                className="btn btn-outline-danger"
             >Delete</button>

            <button
                onClick={() => {
                  props.editPost(_id);
                }}
                className="btn btn-outline-info"
             >Edit</button>


  </div>
</div>
       </div>     
           
             
             
             

</div>
    )
}
