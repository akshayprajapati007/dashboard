import { Box, styled, Typography } from "@mui/material"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import HeadingSmall from "../Typography/HeadingSmall"
import HeadingLarge from "../Typography/HeadingLarge"
import HeadingNetProfit from "../Typography/HeadingNetProfit"

const Card = styled(Box)({
  borderRadius: "6px",
  backgroundColor: "#333",
  padding: "12px 14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "5px",
  minHeight: "135px",
  height: "100%",
})

const ContentCard = styled(Box)({
  display: "flex",
  height: "100%",
  flexDirection: "column",
})

const AmountCard = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
})

const ProgressWrapper = styled(Box)({
  width: "95px",
  height: "95px",
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
})

const ProgressContent = styled(Box)({
  position: "absolute",
  textAlign: "center",
  color: "#ffffff",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
})

const ProgressPercentage = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  lineHeight: "normal",
})

const ProgressDesc = styled(Typography)({
  fontSize: "0.6rem",
  lineHeight: "normal",
})

const ProgressInstruction = styled(Typography)({
  fontSize: "0.7rem",
  lineHeight: "normal",
  marginTop: "5px",
  textAlign: "center",
})

const NetProfitCard = () => {
  return (
    <Card>
      <Box height="100%">
        <ContentCard>
          <HeadingSmall content="Net Profit" />
          <AmountCard>
            <HeadingLarge content="$ 6759.25" />
            <HeadingNetProfit netPercentage={3} />
          </AmountCard>
        </ContentCard>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <ProgressWrapper>
          <CircularProgressbar
            value={70}
            strokeWidth={13}
            styles={buildStyles({
              pathColor: `#7294ff`,
              textColor: "#ffffff",
              trailColor: "#283366",
              backgroundColor: "#1d1d1d",
              strokeLinecap: "round",
            })}
          />
          <ProgressContent>
            <ProgressPercentage>70%</ProgressPercentage>
            <ProgressDesc>Goal Completed</ProgressDesc>
          </ProgressContent>
        </ProgressWrapper>
        <ProgressInstruction>
          *The values here have been rounded off.
        </ProgressInstruction>
      </Box>
    </Card>
  )
}

export default NetProfitCard
