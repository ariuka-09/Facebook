"use client";
import { Post } from "@/components/Posts";
import { useState } from "react";
import Image from "next/image";

import { Balloon } from "@/components/Balloon";
import { AddPost } from "@/components/AddPost";

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
    // {
    //   profilePic: "https://i.pravatar.cc/150?img=12",
    //   name: "Tserenbold Bat",
    //   date: "3h",
    //   setting: "friends",
    //   text: "Just finished a 10k run! Feeling amazing 😅",
    //   image: "https://picsum.photos/500/300?random=2",
    //   reactionCount: "2.1k",
    //   commentCount: "120",
    //   shareCount: "400",
    //   id: 2,
    // },
    // {
    //   profilePic: "https://i.pravatar.cc/150?img=23",
    //   name: "Nomin Erdene",
    //   date: "2d",
    //   setting: "public",
    //   text: "Loving this new meditation app. Highly recommend! 🧘‍♂️",
    //   image: "https://picsum.photos/500/300?random=3",
    //   reactionCount: "3.3k",
    //   commentCount: "200",
    //   shareCount: "700",
    //   id: 3,
    // },
    // {
    //   profilePic: "https://i.pravatar.cc/150?img=34",
    //   name: "Bat-Erdene Munkh",
    //   date: "5h",
    //   setting: "friends",
    //   text: "Check out my latest painting! 🎨",
    //   image: "https://picsum.photos/500/300?random=4",
    //   reactionCount: "1.2k",
    //   commentCount: "80",
    //   shareCount: "150",
    //   id: 4,
    // },
    // {
    //   profilePic: "https://i.pravatar.cc/150?img=41",
    //   name: "Enkhtuya Bold",
    //   date: "1w",
    //   setting: "public",
    //   text: "Weekend vibes with friends 🍕🎶",
    //   image: "https://picsum.photos/500/300?random=5",
    //   reactionCount: "5k",
    //   commentCount: "450",
    //   shareCount: "900",
    //   id: 5,
    // },
    // ...repeat up to 100 posts with different names and content
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
  return (
    <div className="w-full h-[100vh] bg-[black] ">
      <div className="flex flex-col gap-10  ">
        <div className="flex justify-center">
          <p className="text-[60px] font-bold text-[#0866ff] ">facebook</p>
        </div>
        <div className="flex flex-col items-center">
          <AddPost post={post}></AddPost>
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
