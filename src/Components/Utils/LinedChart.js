import moment from "moment";
import React from "react";
import CountUp from "react-countup";
import {
   Area,
   CartesianGrid,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
   LineChart,
   Legend,
   Line,
   ComposedChart,
} from "recharts";

const LinedChart = (props) => {
   const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
         return (
            <div
               style={{
                  background: "#F9F6EE",
                  padding: "20px",
                  color: "black",
               }}
            >
               <div style={{ fontSize: "15px" }}>{`${moment(label).format(
                  "LL"
               )}`}</div>
               <div style={{ border: "1px solid black", opacity: 0.2 }} />
               <div>{`New Cases: ${payload[0].value}`}</div>
               <div>{`7-Day Average: ${payload[1].value}`}</div>
            </div>
         );
      }

      return null;
   };

   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
         }}
      >
         <h4>{props.title}</h4>

         <ResponsiveContainer width="100%" aspect={12.0 / 3.0}>
            <ComposedChart
               data={props.data}
               margin={{
                  top: 10,
                  right: 40,
                  left: 0,
                  bottom: 0,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis
                  dataKey="date"
                  dy={10}
                  minTickGap={6}
                  fontSizeAdjust={0.45}
               />
               <YAxis axisLine={false} />
               <Tooltip content={<CustomTooltip />} />
               <Area
                  type="monotone"
                  dataKey="cases"
                  stroke="#8884d8"
                  fill="#8884d8"
                  name="Daily Cases"
               />
               <Line
                  type="monotone"
                  dataKey="sevenDayAvg"
                  stroke="#82ca9d"
                  strokeWidth={4}
                  strokeOpacity={0.9}
                  dot={false}
                  name="7-Day Average"
               />
               <Legend
                  verticalAlign="top"
                  align="center"
                  wrapperStyle={{ top: -1 }}
               />
            </ComposedChart>
         </ResponsiveContainer>
      </div>
   );
};

export default LinedChart;
