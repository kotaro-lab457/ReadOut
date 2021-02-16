import React from "react";

const Editing: React.FC = () => {
  return (
    <>
      <h1>編集画面</h1>
      <input name="title" />
      <input name="page" />
      <input name="comment" />
      <button>キャンセル</button>
      <button>更新</button>
    </>
  );
};

export default Editing;
