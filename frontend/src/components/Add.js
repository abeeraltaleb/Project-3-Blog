import React,{useState} from 'react'

export default function Add(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const createNewPost =()=>{
    //
console.log("createNewPost from ADD");

props.createFunc({title:  newTitle ,content :newContent});
};

    return (
        <div className='Add'>
           
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Title</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title"
     onChange={(e) => {
        setNewTitle(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Content</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
     onChange={(e) => {
        setNewContent(e.target.value);
      }}
    ></textarea>
  </div>
  <button type="submit" className="btn btn-primary mb-2"
  onClick={createNewPost}
  >Create</button>


        </div>
    )
}
