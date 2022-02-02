import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Sem 1",
    score: 7,
  },
  {
    name: "Sem 2",
    score: 4.5,
  },
  {
    name: "Sem 3",
    score: 6,
  },
  {
    name: "Sem 4",
    score: 6,
  },
  {
    name: "Sem 5",
    score: 7,
  },
  {
    name: "Sem 6",
    score: 9,
  },
  {
    name: "Sem 7",
    score: 6.4,
  },
];

export const BaChart = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barGap={20}
        barSize={15}
      >
        <XAxis
          dataKey="name"
          style={{
            fontSize: "12px",
            opacity: 0.4,
          }}
          tickLine={false}
        />
        <YAxis
          style={{
            fontSize: "12px",
            opacity: 0.4,
          }}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="score" radius={20}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.score > 6.5 ? "#13C57C" : "#A1E8CB"}
              style={{ borderTopRightRadius: "10px" }}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
