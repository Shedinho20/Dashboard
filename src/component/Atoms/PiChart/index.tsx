import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Quiz", score: 40, Color: "#FF4A4A" },
  { name: "Submission", score: 40, Color: "#FFAD47" },
  { name: "Research", score: 50, Color: "#3BA94A" },
];

const COLORS = ["#FFAD47", "#3BA94A", "#FF4A4A"];

export const PiChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie data={data} cx="50%" cy="40%" outerRadius={80} fill="#8884d8" dataKey="score">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            marginBottom: "200px",
            padding: "10px",
            position: "absolute",
            top: "-40px",
            width: "80%",
            justifyContent: "space-between",
            overflow: "hidden",
            flexWrap: "wrap",
          }}
        >
          {data.map((label, i) => (
            <div
              key={i}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5px" }}
            >
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: `${label.Color}`,
                  borderRadius: 10,
                  marginRight: "7px",
                }}
              />
              <p style={{ fontSize: "12px" }}>{label.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
