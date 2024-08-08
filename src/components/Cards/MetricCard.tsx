import { styled, Box } from "@mui/system"
import HeadingSmall from "../Typography/HeadingSmall"
import HeadingMedium from "../Typography/HeadingMedium"
import HeadingNetProfit from "../Typography/HeadingNetProfit"

const Card = styled(Box)({
  borderRadius: "6px",
  backgroundColor: "#333",
  padding: "12px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
  minHeight: "135px",
})

const Image = styled("img")({
  height: "40px",
  width: "40px",
})

const FiguresWrapper = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: "5px",
  marginTop: "5px",
})

interface IMetricCard {
  icon: string
  heading: string
  amount: string | number
  netPercentage: number
}

const MetricCard = ({ icon, heading, amount, netPercentage }: IMetricCard) => {
  const prefixedAmount =
    typeof amount === "number" && Number(amount) < 10 ? `0${amount}` : amount

  return (
    <Card>
      <Image src={icon} alt="icon" />
      <HeadingSmall content={heading} />
      <FiguresWrapper>
        <HeadingMedium content={prefixedAmount} />
        <HeadingNetProfit netPercentage={netPercentage} />
      </FiguresWrapper>
    </Card>
  )
}

export default MetricCard
