import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
function App() {
  let [item,setItems]=useState([]);
  let addNote=(mynote)=>{
    setItems(preVal=>{
      return [...preVal,mynote]
    })
  }

  let dltItem=(id)=>{
    setItems(preval=>{
      return preval.filter((val,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote}/>
      <div className="box">
      {item.map((val,index)=>{
        if(val.title==="" && val.content===""){
          return null;
        }else{
          return(<Note key={index}
            id={index}
            title={val.title}
            content={val.content}
            dltBox={dltItem}
            />)
        }
        
      })}
      
      </div>
      <Footer/>
    </>
  );
}

export default App;
