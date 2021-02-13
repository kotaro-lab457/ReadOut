import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

interface PostText {
  user: string;
  books: string;
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
        setPost(posts);
        console.log("post", posts);
      });
  }, []);
  return (
    <>
      <div>
        <h1>投稿一覧</h1>
        <ul>
          {post.map((list, id) => (
            <li key={id}>
              <div>
                <p>ユーザー：{list.user}</p>
                <p>タイトル：{list.books}</p>
                <p>ページ：{list.pages}</p>
                <p>感想：{list.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Room;
