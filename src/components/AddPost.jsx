"use client";
import { useState } from "react";
export function AddPost(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const {post} = props;
  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleTextChange(e){
    setText(e.target.value  )
  }
  return (
    <div className="flex flex-col w-fit gap-4">
      <input type="text" value={name} onChange={handleNameChange} className="bg-white text-black" />
      <input type="text" value={text} onChange={handleTextChange} className="bg-[violet] text-black " />
      <button className="cursor-pointer border-2 border-white" onClick={post(name, text)}> Post</button>
    </div>
  );
}
