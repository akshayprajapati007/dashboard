import { Box } from "@mui/material"
import MetricCard from "./Cards/MetricCard"
import { styled } from "@mui/system"
import { metrics } from "../configs/data"

const Card = styled(Box)({
  display: "flex",
  gap: "10px",
  height: "100%",
  flexWrap: "wrap",
})

const MetricList = () => {
  return (
    <Card>
      {metrics.map((metric) => {
        const { icon, title, value, netPercentage } = metric

        return (
          <MetricCard
            key={title}
            icon={icon}
            amount={value}
            heading={title}
            netPercentage={netPercentage}
          />
        )
      })}
    </Card>
  )
}

export default MetricList
