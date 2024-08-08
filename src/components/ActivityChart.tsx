import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import HeadingMedium from "./Typography/HeadingMedium"
import { Box, MenuItem, Select, styled } from "@mui/material"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"

const MainWrapper = styled(Box)({
  padding: "20px",
  backgroundColor: "#333",
  borderRadius: "8px",
  height: "100%",
})

const InfoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "5px",
  marginBottom: "10px",
})

const CustomSelect = styled(Select)({
  borderRadius: "24px",
  fontSize: "1rem",
  "& .Mui-focused": {
    borderRadius: "24px",
  },
  "& .MuiSelect-filled": {
    padding: "9px 18px",
  },
})

const ChartWrapper = styled(Box)({
  width: "100%",
  height: 240,
})

interface DataPoint {
  name: number
  uv: number
}

const data: DataPoint[] = [
  { name: 5, uv: 5000 },
  { name: 6, uv: 2500 },
  { name: 9, uv: 4500 },
  { name: 10, uv: 6000 },
  { name: 11, uv: 3500 },
  { name: 12, uv: 5000 },
  { name: 13, uv: 2500 },
  { name: 14, uv: 4000 },
  { name: 15, uv: 3000 },
  { name: 16, uv: 6000 },
  { name: 17, uv: 7000 },
  { name: 18, uv: 5500 },
  { name: 19, uv: 8000 },
  { name: 20, uv: 7000 },
  { name: 21, uv: 15000 },
  { name: 22, uv: 8500 },
  { name: 23, uv: 6000 },
  { name: 24, uv: 7500 },
  { name: 25, uv: 5000 },
  { name: 26, uv: 6500 },
  { name: 27, uv: 4000 },
]

interface CustomXAxisTickProps {
  x: number
  y: number
  payload: {
    value: number
  }
}

const CustomXAxisTick: React.FC<CustomXAxisTickProps> = ({ x, y, payload }) => {
  const displayTicks = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]
  if (displayTicks.includes(payload.value)) {
    return (
      <text x={x} y={y + 15} fill="#ffffff" textAnchor="middle">
        {payload.value}
      </text>
    )
  }
  return null
}

interface CustomYAxisTickProps {
  x: number
  y: number
  payload: {
    value: number
  }
}

const CustomYAxisTick: React.FC<CustomYAxisTickProps> = ({ x, y, payload }) => {
  return (
    <text x={x - 10} y={y + 5} fill="#ffffff" textAnchor="end">
      {payload.value === 0 ? "0" : `${payload.value / 1000}k`}
    </text>
  )
}

const ActivityChart: React.FC = () => {
  return (
    <MainWrapper>
      <InfoWrapper>
        <HeadingMedium content="Activity" />
        <CustomSelect
          variant="filled"
          disableUnderline
          defaultValue="weekly"
          IconComponent={ArrowDropDownRoundedIcon}
        >
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </CustomSelect>
      </InfoWrapper>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: -5, bottom: 2 }}
          >
            <CartesianGrid stroke="#d0d0d0" vertical={false} />
            <XAxis
              dataKey="name"
              tick={(props) => <CustomXAxisTick {...props} />}
              stroke="#ffffff"
              axisLine={false}
              tickLine={false}
              tickMargin={2}
            />
            <YAxis
              tick={(props) => <CustomYAxisTick {...props} />}
              stroke="#ffffff"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#ffffff" }}
              labelStyle={{ color: "#ffffff" }}
            />
            <Bar dataKey="uv" fill="#7294ff" radius={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </MainWrapper>
  )
}

export default ActivityChart
