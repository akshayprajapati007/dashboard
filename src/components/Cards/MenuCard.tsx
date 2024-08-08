import { Box, IconButton, Typography } from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import { styled } from "@mui/system"

const MenuWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  justifyContent: "space-between",
  padding: "20px 5px",
})

const MenuContentWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  "& img": {
    height: "60px",
    width: "60px",
    backgroundColor: "#44444b",
    borderRadius: "50%",
    padding: "12px",
  },
  "& p": {
    fontSize: "1.2rem",
  },
})

const MenuButton = styled(IconButton)({
  height: "40px",
  width: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
})

interface IMenuCard {
  icon: string
  heading: string
}

const MenuCard = ({ icon, heading }: IMenuCard) => {
  return (
    <MenuWrapper>
      <MenuContentWrapper>
        <img src={icon} alt="icon" />
        <Typography>{heading}</Typography>
      </MenuContentWrapper>
      <MenuButton>
        <ArrowForwardIosRoundedIcon fontSize="small" />
      </MenuButton>
    </MenuWrapper>
  )
}

export default MenuCard
