import React from "react";

const Room: React.FC = () => {
  return (
    <>
      <h1>アウトプット 投稿ページ</h1>
      <div>
        <p>読んだ本は？</p>
        <input type="text" />
        <p>何ページ読んだか？</p>
        <input type="text" />
        <p>感想＆要約</p>
        <input type="text" />
      </div>
      <button>投稿</button>
    </>
  );
};

export default Room;
