import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function CreateNote(props) {
  const [expand,setExpand]=useState(false);
  const expandIt=()=>{
    setExpand(true);
  }
  const reduceIt=()=>{
    setExpand(false);
  }
  const [note,setNote]=useState({
    title:"",
    content:""
    });

    const inputEvent=(event)=>{
      const{name, value }=event.target;
      setNote(preVal=>{
        return {
          ...preVal,
          [name]:value
        }
      })
    }

    const addEvent=(e)=>{
      
      props.passNote(note);
      setNote({
        title:"",
        content:""
      })
      e.preventDefault();
    }
  return (
    <>
      <div className="main_note">
        <form>
        {expand ? <input type={"text"} name="title" placeholder="Title" autoComplete="off" value={note.title} className="Title" onChange={inputEvent}/>:null}
          
          <textarea name="content" placeholder="Write a Note..." onClick={expandIt} onDoubleClick={reduceIt} style={{width:"100%",height:"550px"}} spellCheck="false" autoCorrect="false" onChange={inputEvent} value={note.content}
          ></textarea>

        {expand ? <Button varient="contained" className="plus_sign" onClick={addEvent}  style={{border:'1px solid #fbbc04',marginLeft:"auto",background:'#fbbc04'}}>
            <AddIcon style={{color:"white"}}/>
          </Button>:null}
          
        </form>
      </div>
    </>
  );
}

export default CreateNote;
