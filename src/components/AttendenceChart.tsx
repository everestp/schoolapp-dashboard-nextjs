"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";
const data = [
  {
    name: "Mon",
    present: 10,
    absent: 20,
  },
  {
    name: "Tue",
    present: 30,
    absent: 18,
  },
  {
    name: "Wed",
    present: 20,
    absent: 10,
  },
  {
    name: "Thu",
    present: 27,
    absent: 20,
  },
  {
    name: "Fri",
    present: 10,
    absent: 48,
  },
  {
    name: "Sat",
    present: 20,
    absent: 38,
  },
  {
    name: "Sun",
    present: 3,
    absent: 4,
  },
];

const AttendenceChart = () => {
  return (
    <div className="bg-white rounded-g p-4 h-full">
      <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Attendence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical ={false} stroke = "#ddd"/>
          <XAxis dataKey="name" axisLine={false}  tick ={{fill :"#d1d5db"}} tickLine={false} />
          <YAxis  tick ={{fill :"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius :"10px", borderColor :"lightgray"}} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill= "#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill = "#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
