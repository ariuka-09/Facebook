"use client";
import { useState } from "react";
export function AddPost(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const { post } = props;
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleTextChange(e) {
    setText(e.target.value);
  }
  function handleImgChange(e) {
    setImg(e.target.value);
  }
  return (
    <div className="px-10 rounded">
      <div className="flex flex-col w-fit gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="bg-[white] rounded p-1.5 text-[15px] text-black"
        />
        <input
          type="text"
          placeholder="Text"
          value={text}
          onChange={handleTextChange}
          className="bg-[white] rounded p-1.5 text-[15px] text-black "
        />
        <input
          type="text"
          placeholder="Img"
          value={img}
          onChange={handleImgChange}
          className="bg-[white] rounded p-1.5 text-[15px] text-black "
        />
        <button
          className="cursor-pointer border-2 border-white hover:opacity-90 bg-[#0866ff]"
          onClick={() => {
            post(name, text, img);
            setName("");
            setText("");
            setImg("");
          }}
        >
          {" "}
          Post
        </button>
      </div>
    </div>
  );
}
