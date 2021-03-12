import React, { useState, useEffect, useContext } from "react";
import firebase from "../config/Firebase";
import { Line } from "react-chartjs-2";
import { AuthContext } from "../AuthService";

const Chart: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);

  const user = useContext(AuthContext);
  const FS = firebase.firestore().collection("text");

  const days =
    new Date().getFullYear() + new Date().getMonth() + new Date().getDate();
  // 足してはダメ。

  useEffect(() => {
    if (user) {
      FS.where("uid", "==", `${user.uid}`)
        .where("date", ">", days) // その日まで、投稿した数。。 // データの日にち > 現在の日にち
        .get()
        .then((doc) => {
          setCount1(doc.size); // リアルタイムの投稿の数！
        }); // 前日の数をどうするか date (それぞれの投稿した日にち) >= days + 28 = 前日の日にち以下
      FS.where("uid", "==", `${user.uid}`)
        .where("date", ">", count1)
        .get()
        .then((doc) => {
          setCount2(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", ">", count2)
        .get()
        .then((doc) => {
          setCount3(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", ">", count3)
        .get()
        .then((doc) => {
          setCount4(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", ">", count4)
        .get()
        .then((doc) => {
          setCount5(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", ">", count5)
        .get()
        .then((doc) => {
          setCount6(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", ">", count6)
        .get()
        .then((doc) => {
          setCount7(doc.size);
        });
    }
  }, [user]);

  console.log("今日で", count1, "投稿", count2, count3, count4);

  const daysPlus = [count1, count2, count3, count4, count5, count6, count7];

  const graphData = {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      [`${new Date().getDate() - 6}日`],
      [`${new Date().getDate() - 5}日`],
      [`${new Date().getDate() - 4}日`],
      [`${new Date().getDate() - 3}日`],
      [`${new Date().getDate() - 2}日`],
      [`${new Date().getDate() - 1}日`],
      [`${new Date().getDate()}日`],
    ],
    datasets: [
      // 表示するデータセット
      {
        borderColor: "rgba(35,200,153,1)",
        lineTension: 0,
        data: daysPlus,
        label: "読書アウトプット量",
      },
    ],
  };
  const graphOption = {
    scales: {
      xAxes: [
        // x軸設定
        {
          scaleLabel: {
            // 軸ラベル設定
            display: true,
            labelString: `${new Date().getFullYear()}年${
              new Date().getDay() - 2
            }月${new Date().getDate() - 6}日 〜 ${new Date().getDate()}日 `,
          },
        },
      ],
    },
  };
  return (
    <>
      <Line data={graphData} options={graphOption} />
    </>
  );
};

export default Chart;
