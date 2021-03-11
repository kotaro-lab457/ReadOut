import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";
import { Bar } from "react-chartjs-2";

const Chart: React.FC = () => {
  const db = firebase.firestore().collection("counters");
  useEffect(() => {}, []);
  const graphData = {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      ["1月"],
      ["2月"],
      ["3月"],
      ["4月"],
      ["5月"],
      ["6月"],
      ["7月"],
      ["8月"],
      ["9月"],
      ["10月"],
      ["11月"],
      ["12月"],
    ],
    datasets: [
      // 表示するデータセット
      {
        data: [
          16, // count数（アウトプット量）user毎
          42, // ここの配列にデータを入れたい
          117.5,
          90.5,
          120.5,
          225,
          193,
          110,
          197,
          529.5,
          156.5,
          76.5,
        ],
        label: "読書アウトプット量",
      },
    ],
  };
  return (
    <>
      <Bar data={graphData} />
      <button>送信</button>
    </>
  );
};

export default Chart;
