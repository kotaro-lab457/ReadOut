import React, { useState, useEffect, useContext } from "react";
import firebase from "../config/Firebase";
import { Line } from "react-chartjs-2";
import { AuthContext } from "../Auth/AuthService";

const Chart: React.FC = () => {
  const [date, setDate] = useState(null);
  const [totalDays, setTotalDays] = useState("");
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

  console.log("time", new Date().getTime());
  console.log("time", new Date(2000).getTime() - 1);

  useEffect(() => {
    if (user) {
      const days =
        new Date().getFullYear() + new Date().getMonth() + new Date().getDate();
      console.log(days, "2021 , 4 , 2 ");
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 20)
        .get()
        .then((doc) => {
          setCount1(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 21)
        .get()
        .then((doc) => {
          setCount2(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 22)
        .get()
        .then((doc) => {
          setCount3(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 23)
        .get()
        .then((doc) => {
          setCount4(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 24)
        .get()
        .then((doc) => {
          setCount5(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 25)
        .get()
        .then((doc) => {
          setCount6(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 26)
        .get()
        .then((doc) => {
          setCount7(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 27)
        .get()
        .then((doc) => {
          setCount8(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days + 28)
        .get()
        .then((doc) => {
          setCount9(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .get()
        .then((doc) => {
          setCount10(doc.size);
        });
    }

    // 10日分の日付作成(x軸)
    let day = new Date();
    let dateDays: any = [[new Date().getDate() + "日"]];
    for (let i = 0; i < 9; i++) {
      day.setDate(day.getDate() - 1);
      let days = [day.getDate() + "日"];
      dateDays.unshift(days);
    }
    setDate(dateDays);

    // 10日分の日付（9日前〜翌日）
    let days = new Date();
    let previous = new Date();
    previous.setDate(days.getDate() - 9);
    let lastMonth = previous.getMonth() + 1;
    let lastWeek = previous.getDate();
    console.log(lastWeek);

    const longDay = `${lastMonth}月${lastWeek}日 〜 ${
      day.getMonth() + 1
    }月${day.getDate()}日 `;
    setTotalDays(longDay);
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
    labels:
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      date,
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
            labelString: totalDays,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 1,
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
