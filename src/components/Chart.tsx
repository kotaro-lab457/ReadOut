import React, { useState, useEffect, useContext } from "react";
import firebase from "../config/Firebase";
import { Line } from "react-chartjs-2";
import { AuthContext } from "../Auth/AuthService";

const Chart: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count9, setCount9] = useState(0);
  const [count10, setCount10] = useState(0);

  const user = useContext(AuthContext);
  const FS = firebase.firestore().collection("text");

  const days =
    new Date().getFullYear() + new Date().getMonth() + new Date().getDate();

  useEffect(() => {
    if (user) {
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 20)
        .get()
        .then((doc) => {
          setCount1(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 21)
        .get()
        .then((doc) => {
          setCount2(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 22)
        .get()
        .then((doc) => {
          setCount3(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 23)
        .get()
        .then((doc) => {
          setCount4(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 24)
        .get()
        .then((doc) => {
          setCount5(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 25)
        .get()
        .then((doc) => {
          setCount6(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 26)
        .get()
        .then((doc) => {
          setCount7(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 27)
        .get()
        .then((doc) => {
          setCount8(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 28)
        .get()
        .then((doc) => {
          setCount9(doc.size);
        });
      FS.where("uid", "==", `${user.uid}`)
        .where("date", "<=", days + 29)
        .get()
        .then((doc) => {
          setCount10(doc.size);
        });
    }
  }, [user]);

  const daysPlus = [
    count1,
    count2,
    count3,
    count4,
    count5,
    count6,
    count7,
    count8,
    count9,
    count10,
  ];

  const graphData = {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      [`${new Date().getDate() - 9}日`],
      [`${new Date().getDate() - 8}日`],
      [`${new Date().getDate() - 7}日`],
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
        borderColor: "#4fc3f7",
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
            labelString: `${new Date().getMonth() + 1}月${
              new Date().getDate() - 9
            }日 〜 ${new Date().getMonth() + 1}月${new Date().getDate()}日 `,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 1,
            beginAtZero: true,
          },
        },
      ],
    },
    option: {
      responsive: true,
    },
  };
  return (
    <>
      <Line data={graphData} options={graphOption} />
    </>
  );
};

export default Chart;
