import { styled, Typography } from "@mui/material"
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"

const NetProfitTypography = styled(Typography)(
  ({ profit }: { profit: string }) => ({
    color: profit === "true" ? "#34C759" : "#e75757",
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem",
  })
)

interface IHeadingNetProfit {
  netPercentage: number
}

const HeadingNetProfit = ({ netPercentage }: IHeadingNetProfit) => {
  const isProfit = netPercentage >= 0
  const figure = String(netPercentage).replace("-", "")

  return (
    <NetProfitTypography profit={isProfit.toString()}>
      {isProfit ? (
        <ArrowDropUpRoundedIcon fontSize="small" />
      ) : (
        <ArrowDropDownRoundedIcon fontSize="small" />
      )}
      {`${figure}%`}
    </NetProfitTypography>
  )
}

export default HeadingNetProfit
