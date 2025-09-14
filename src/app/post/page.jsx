"use client";
import { useState } from "react";
import { AddPost } from "./_components/AddPost";
export default function Home() {
  const posts = [
    {
      profilePic: "https://i.pravatar.cc/150?img=5",
      name: "Khandsuren Gantogtokh",
      date: "1d",
      setting: "public",
      text: "Best meditation with swimming 🏊‍♀️",
      image: "https://picsum.photos/500/300?random=1",
      reactionCount: "4.6k",
      commentCount: "499",
      shareCount: "1.6k",
      id: 1,
    },
  ];
  const [fbPosts, setFbPosts] = useState(posts);
  const post = (name, text, img) => {
    setFbPosts([
      ...fbPosts,
      {
        profilePic: "https://i.pravatar.cc/150?img=41",
        name: name,
        date: "just now",
        setting: "public",
        text: text,
        image: img,
        reactionCount: "0",
        commentCount: "0",
        shareCount: "0",
        id: fbPosts.length + 1,
      },
    ]);
  };
  return <AddPost post={post}></AddPost>;
}
