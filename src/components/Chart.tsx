import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";
import { Line } from "react-chartjs-2";

const Chart: React.FC = () => {
  const [date, setDate] = useState(null);
  const [totalDays, setTotalDays] = useState<string>("");
  const [count, setCount] = useState<number[]>([]);
  const user = useSelector(selectUser);
  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    if (user) {
      let date = new Date();
      let dateMonth = date.getMonth() + 1;
      const getDate = (dt: number) => {
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
      
      for (let i = 9; i > 0; i--) {
        FS.where("user", "==", `${user.displayName}`)
          .where("date", "<=", days - i)
          .get()
          .then((doc) => {
            setCount([...count, doc.size]);
          });
        }
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

    const longDay = `${lastMonth}月${lastWeek}日 〜 ${
      days.getMonth() + 1
    }月${days.getDate()}日 `;
    setTotalDays(longDay);
  }, [user]);

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
        data: count,
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
