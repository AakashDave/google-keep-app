import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function CreateNote(props) {
  let [expand,setExpand]=useState(false);
const [note,setNote]=useState({
  title:"",
  content:""
})

let inputEvent=(event)=>{
  const {value,name}=event.target;
  setNote(preVal=>{
    return {
      ...preVal,
      [name]:value
    }
  })
}

let applyEvent=(e)=>{
  e.preventDefault();
  props.passNote(note);
  setNote({
    title:"",
    content:""
  })
}

function expandIt() {
  setExpand(true);
}
function reduceIt() {
  setExpand(false);
}

  return (
    <>
      <div className="main_note">
        <form>
        {expand ? <input type={"text"} name="title" placeholder="Title" autoComplete="off" onChange={inputEvent} value={note.title} className="Title"/> : null}
        
          <textarea name="content" placeholder="Write a Note..." style={{width:"100%",height:"550px"}} spellCheck="false" onChange={inputEvent} onClick={expandIt} onDoubleClick={reduceIt} autoCorrect="false" value={note.content}
          ></textarea>

        {expand ? <Button varient="contained" className="plus_sign" onClick={applyEvent} style={{border:'1px solid #fbbc04',marginLeft:"auto",background:'#fbbc04'}}>
            <AddIcon style={{color:"white"}}/>
          </Button>: null}
        
          
        </form>
      </div>
    </>
  );
}

export default CreateNote;
