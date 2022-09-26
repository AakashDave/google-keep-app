import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
function App() {
  const [addItem,setItems]=useState([]);

  let addNote=(mynote)=>{
    setItems(preVal=>{
      return [...preVal,mynote];
    })
  }

  let onDel=(id)=>{
    setItems((preVal)=>{
      return preVal.filter((currData,index)=>{
        return index !== id
      })
    })
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote}/>
      <div className="box">
      {addItem.map((val,index) => {
         return (<Note key={index}
                      id={index}
                      title={val.title}
                      content={val.content}
                      deleteItem={onDel}/>)
      })}
      </div>
      <Footer/>
    </>
  );
}

export default App;
