"use client";
import { Post } from "@/components/Posts";
import { useState } from "react";
import Image from "next/image";
import { AddPost, JumpToPosting } from "@/components/JumpToPosting";

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
  const [isLiked, setIsLiked] = useState(false);
  function removeHandler(id) {
    const filterredPosts = fbPosts.filter((post) => post.id !== id);
    setFbPosts(filterredPosts);
  }
  function liked() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="w-full h-[100vh] bg-[black] ">
      <div className="flex flex-col gap-10  ">
        <div className="flex justify-center">
          <p className="text-[60px] font-bold text-[#0866ff] ">fakebook</p>
        </div>
        <div className="flex flex-col items-center">
          <JumpToPosting></JumpToPosting>
        </div>

        {fbPosts.map((element, index) => {
          return (
            <div>
              <Post
                id={element.id}
                key={element.id}
                profilePic={element.profilePic}
                name={element.name}
                date={element.date}
                setting={element.setting}
                text={element.text}
                image={element.image}
                reactionCount={element.reactionCount}
                commentCount={element.commentCount}
                shareCount={element.shareCount}
                removeHandler={removeHandler}
                liked={liked}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
