import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {

  let deleteNote=()=>{
    props.dltBox(props.id);
  }

  return (
    <>
    <div className="Note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="deleteIcon" onClick={deleteNote}>
          <DeleteForeverIcon  className="dlt"/>
        </button>
    </div>
      
    </>
  );
}

export default Note;
