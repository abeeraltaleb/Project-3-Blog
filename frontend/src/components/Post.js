import React from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
export default function Post(props) {
   const {_id,title,content}=props.posts;
    return (
<div className='Post container'>
<div className='row'>
<div className="card ms-20" style={{width: "40rem"}}  >
  <div className="card-body">
    <form>
    <h5 type="text" className="card-title">{title}</h5>
    <p className="card-text">{content}</p>
    </form>


    <Link to={`/article/${_id}`}  >
      <a className='btn btn-outline-info'>Readmore</a>
      </Link> 
    <button
                onClick={() => {
                  props.deletePost(_id);
                }}
                className="btn btn-outline-danger"
             >Delete</button>



<Link to={`/edit/${_id}`}  >
      <a className='btn btn-outline-info'>Edit</a>
      </Link> 
            


  </div>
</div>
       </div>     
           
             
             
             

</div>
    )
}