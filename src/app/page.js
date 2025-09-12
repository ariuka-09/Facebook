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
    {
      profilePic: "https://i.pravatar.cc/150?img=12",
      name: "Tserenbold Bat",
      date: "3h",
      setting: "friends",
      text: "Just finished a 10k run! Feeling amazing 😅",
      image: "https://picsum.photos/500/300?random=2",
      reactionCount: "2.1k",
      commentCount: "120",
      shareCount: "400",
      id: 2,
    },
    {
      profilePic: "https://i.pravatar.cc/150?img=23",
      name: "Nomin Erdene",
      date: "2d",
      setting: "public",
      text: "Loving this new meditation app. Highly recommend! 🧘‍♂️",
      image: "https://picsum.photos/500/300?random=3",
      reactionCount: "3.3k",
      commentCount: "200",
      shareCount: "700",
      id: 3,
    },
    {
      profilePic: "https://i.pravatar.cc/150?img=34",
      name: "Bat-Erdene Munkh",
      date: "5h",
      setting: "friends",
      text: "Check out my latest painting! 🎨",
      image: "https://picsum.photos/500/300?random=4",
      reactionCount: "1.2k",
      commentCount: "80",
      shareCount: "150",
      id: 4,
    },
    {
      profilePic: "https://i.pravatar.cc/150?img=41",
      name: "Enkhtuya Bold",
      date: "1w",
      setting: "public",
      text: "Weekend vibes with friends 🍕🎶",
      image: "https://picsum.photos/500/300?random=5",
      reactionCount: "5k",
      commentCount: "450",
      shareCount: "900",
      id: 5,
    },
    // ...repeat up to 100 posts with different names and content
  ];
  const [fbPosts, setFbPosts] = useState(posts);
  function removeHandler(id) {
    const filterredPosts = fbPosts.filter((post) => post.id !== id);
    setFbPosts(filterredPosts);
  }

  return fbPosts.map((element, index) => {
    function post() {}
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
        />
        <AddPost post={post}></AddPost>
      </div>
    );
  });
}
/* <Post
        profilePic="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-1/482089205_1170691381723979_607858962561793200_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=dxlwkstfRJMQ7kNvwGwbx7Q&_nc_oc=Adl8tSUog2nuAZGfneut2kph-h8SytoLCgk3xV_lzcimlbfRb1gTg9j-0kaDNW46ck4&_nc_zt=24&_nc_ht=scontent.fuln8-1.fna&_nc_gid=gYhsRRyAcZPu6nkA6dw0ZA&oh=00_AfaFMYS-b6UQEc8F19EzpnqUvL8MT-zp8Ukbu5LmVwKcfw&oe=68BE19CC"
        name="Khandsuren Gantogtokh"
        date="1d"
        setting="public"
        text="best meditation with swimming 🏊‍♀️"
        image="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/541446937_1328896899236759_4831060987877852604_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mfYdTwPjJowQ7kNvwG2GUbs&_nc_oc=AdmGOl-exrwz5ctAbye0rtQ-yoEn0p9fJG4GZSlVc_YRVYySng0NZg5F7mYWqma7Qms&_nc_zt=23&_nc_ht=scontent.fuln8-1.fna&_nc_gid=6lGsn2N8JQI3mYaeaC2Oeg&oh=00_AfaaMGJM7KUSUcCt5-bEZR2eDolEej_aFYaa9XXMhynFww&oe=68BE1B7A"
        reactionCount="4.6k"
        commentCount="499"
        shareCount="1.6k"
      ></Post> */
/* <Post
        profilePic="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-1/351363919_199334103062894_9068609386125173171_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=PmuwyLW-OsIQ7kNvwFX8qXB&_nc_oc=AdkXsj3IdvX8G0uzP1bfsOXQYI0HbZlHEHQoAQU6sWPuAWQgy2utSbhTV1-_fnkge5M&_nc_zt=24&_nc_ht=scontent.fuln8-1.fna&_nc_gid=0A_-_psB6lbsZ2H9hpVWzA&oh=00_AfYN3rdmPkTsyzl_Z4Fdkys5NMHOWb9dOidI6s29atauxA&oe=68BE2E3E"
        name="Meme for mathematicians"
        date="1d"
        setting="public"
        text=""
        image="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/542187398_1071988768482683_8126962495475436157_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QAP68tZm4wYQ7kNvwGQvDl2&_nc_oc=AdmcNbd74iygnfwF3SfhhiaVQ41bXwLkxu38uixVmFmmThRzkyrLyANWuLUc0Cixtz8&_nc_zt=23&_nc_ht=scontent.fuln8-1.fna&_nc_gid=0A_-_psB6lbsZ2H9hpVWzA&oh=00_AfatJ8f3EWgDSBWzbd7rweKeYd--JefRoTt-YDCQGvO9ZQ&oe=68BE20CB"
        reactionCount="1.9k"
        commentCount="169"
        shareCount="183"
      ></Post>
      <Post
        profilePic="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-1/347811925_265887139227330_7415253662892000460_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=ZtQrIMf5A0cQ7kNvwEpDEp6&_nc_oc=AdlOTnM7O8G5OKWuMtSvOD0a2TYI2tmPwnZw4q9UYd9SvZ0oLngWCp6xmy8_LK3RGaY&_nc_zt=24&_nc_ht=scontent.fuln8-1.fna&_nc_gid=DBT8iWjrEMpyh-tcruC6Vg&oh=00_Afapkmf_xxthigeSSGL008BoZj1glnfvp0r4HOaNhYaYGw&oe=68BE280C"
        name="NBA"
        date="12m"
        setting="public"
        text="The two moods of every NBA fan during this offseason. We're getting there! 🥹⏳… See more"
        image="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/542710457_1328266838664080_7118413287710316908_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xpMqVfSxRjcQ7kNvwG3Zc-0&_nc_oc=AdnQU3hmx4_usN3M6C_OTWsn9meMM8n5MAahEG5YO7BrexnY7KMvK12NpEfptNVH5kY&_nc_zt=23&_nc_ht=scontent.fuln8-1.fna&_nc_gid=fyOE-mqBHCJicWDAots6yg&oh=00_Afa3BlFN3nIQLt-Y3iDCPWbVk7meYhX2gxdWtvgFws-lmQ&oe=68BE236B"
        reactionCount="107"
        commentCount="1"
        shareCount="5"
      ></Post>
      <Balloon color="red"></Balloon> */

// <div>
//   <Post
//     profilePic="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-1/482089205_1170691381723979_607858962561793200_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=dxlwkstfRJMQ7kNvwGwbx7Q&_nc_oc=Adl8tSUog2nuAZGfneut2kph-h8SytoLCgk3xV_lzcimlbfRb1gTg9j-0kaDNW46ck4&_nc_zt=24&_nc_ht=scontent.fuln8-1.fna&_nc_gid=gYhsRRyAcZPu6nkA6dw0ZA&oh=00_AfaFMYS-b6UQEc8F19EzpnqUvL8MT-zp8Ukbu5LmVwKcfw&oe=68BE19CC"
//     name="Khandsuren Gantogtokh"
//     date="1d"
//     setting="public"
//     text="best meditation with swimming 🏊‍♀️"
//     image="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/541446937_1328896899236759_4831060987877852604_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mfYdTwPjJowQ7kNvwG2GUbs&_nc_oc=AdmGOl-exrwz5ctAbye0rtQ-yoEn0p9fJG4GZSlVc_YRVYySng0NZg5F7mYWqma7Qms&_nc_zt=23&_nc_ht=scontent.fuln8-1.fna&_nc_gid=6lGsn2N8JQI3mYaeaC2Oeg&oh=00_AfaaMGJM7KUSUcCt5-bEZR2eDolEej_aFYaa9XXMhynFww&oe=68BE1B7A"
//     reactionCount="4.6k"
//     commentCount="499"
//     shareCount="1.6k"
//   ></Post>
//   <Post
//     profilePic="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-1/351363919_199334103062894_9068609386125173171_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=PmuwyLW-OsIQ7kNvwFX8qXB&_nc_oc=AdkXsj3IdvX8G0uzP1bfsOXQYI0HbZlHEHQoAQU6sWPuAWQgy2utSbhTV1-_fnkge5M&_nc_zt=24&_nc_ht=scontent.fuln8-1.fna&_nc_gid=0A_-_psB6lbsZ2H9hpVWzA&oh=00_AfYN3rdmPkTsyzl_Z4Fdkys5NMHOWb9dOidI6s29atauxA&oe=68BE2E3E"
//     name="Meme for mathematicians"
//     date="1d"
//     setting="public"
//     text=""
//     image="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/542187398_1071988768482683_8126962495475436157_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QAP68tZm4wYQ7kNvwGQvDl2&_nc_oc=AdmcNbd74iygnfwF3SfhhiaVQ41bXwLkxu38uixVmFmmThRzkyrLyANWuLUc0Cixtz8&_nc_zt=23&_nc_ht=scontent.fuln8-1.fna&_nc_gid=0A_-_psB6lbsZ2H9hpVWzA&oh=00_AfatJ8f3EWgDSBWzbd7rweKeYd--JefRoTt-YDCQGvO9ZQ&oe=68BE20CB"
//     reactionCount="1.9k"
//     commentCount="169"
//     shareCount="183"
//   ></Post>
//   <Post
//     profilePic="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-1/347811925_265887139227330_7415253662892000460_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=ZtQrIMf5A0cQ7kNvwEpDEp6&_nc_oc=AdlOTnM7O8G5OKWuMtSvOD0a2TYI2tmPwnZw4q9UYd9SvZ0oLngWCp6xmy8_LK3RGaY&_nc_zt=24&_nc_ht=scontent.fuln8-1.fna&_nc_gid=DBT8iWjrEMpyh-tcruC6Vg&oh=00_Afapkmf_xxthigeSSGL008BoZj1glnfvp0r4HOaNhYaYGw&oe=68BE280C"
//     name="NBA"
//     date="12m"
//     setting="public"
//     text="The two moods of every NBA fan during this offseason. We're getting there! 🥹⏳… See more"
//     image="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/542710457_1328266838664080_7118413287710316908_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xpMqVfSxRjcQ7kNvwG3Zc-0&_nc_oc=AdnQU3hmx4_usN3M6C_OTWsn9meMM8n5MAahEG5YO7BrexnY7KMvK12NpEfptNVH5kY&_nc_zt=23&_nc_ht=scontent.fuln8-1.fna&_nc_gid=fyOE-mqBHCJicWDAots6yg&oh=00_Afa3BlFN3nIQLt-Y3iDCPWbVk7meYhX2gxdWtvgFws-lmQ&oe=68BE236B"
//     reactionCount="107"
//     commentCount="1"
//     shareCount="5"
//   ></Post>
// </div>
