"use client";
import { useState } from "react";
export function AddPost(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [post] = props;
  return (
    <div>
      <input type="text" value={name} />
      <input type="text" value={text} />
      <button onClick={post}>Post</button>
    </div>
  );
}
