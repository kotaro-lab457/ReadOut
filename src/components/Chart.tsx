import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";
import { Line } from "react-chartjs-2";

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

  const user = useSelector(selectUser);
  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    if (user) {
      let date = new Date();
      let dateMonth = date.getMonth() + 1;
      const getDate = (dt: any) => {
        return dt <= 1
          ? 30
          : dt <= 2
          ? 60
          : dt <= 3
          ? 87
          : dt <= 4
          ? 117
          : dt <= 5
          ? 146
          : dt <= 6
          ? 177
          : dt <= 7
          ? 206
          : dt <= 8
          ? 236
          : dt <= 9
          ? 266
          : dt <= 10
          ? 295
          : dt <= 11
          ? 325
          : 354;
      };
      const days =
        date.getFullYear() +
        date.getMonth() +
        date.getDate() +
        getDate(dateMonth);
      console.log("当月の値", days);

      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 9)
        .get()
        .then((doc) => {
          setCount1(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 8)
        .get()
        .then((doc) => {
          setCount2(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 7)
        .get()
        .then((doc) => {
          setCount3(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 6)
        .get()
        .then((doc) => {
          setCount4(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 5)
        .get()
        .then((doc) => {
          setCount5(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 4)
        .get()
        .then((doc) => {
          setCount6(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 3)
        .get()
        .then((doc) => {
          setCount7(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 2)
        .get()
        .then((doc) => {
          setCount8(doc.size);
        });
      FS.where("user", "==", `${user.displayName}`)
        .where("date", "<=", days - 1)
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
    console.log("9日前", lastWeek);

    const longDay = `${lastMonth}月${lastWeek}日 〜 ${
      days.getMonth() + 1
    }月${days.getDate()}日 `;
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
