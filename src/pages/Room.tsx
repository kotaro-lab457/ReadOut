import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

interface PostText {
  name: string;
  content: string;
  pages: string;
}

const Room: React.FC = () => {
  const [post, setPost] = useState<PostText[]>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("comments")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        const posts: any = snapshot.docs.map((doc) => {
          return doc.data();
        });
        console.log(posts);
        setPost(posts);
      });
    //console.log(post);
  }, []);
  return (
    <>
      <div>
        <h1>投稿一覧</h1>
        <ul>
          {post.map((list, id) => (
            <li key={id}>
              <div>
                <p>タイトル：{list.name}</p>
                <p>ページ：{list.pages}</p>
                <p>感想</p>
                <p>{list.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Room;
