import { Box, styled } from "@mui/material"
import { menus } from "../configs/data"
import MenuCard from "./Cards/MenuCard"

const MenuListWrapper = styled(Box)({
  borderRadius: "8px",
  backgroundColor: "#333",
  padding: "12px 25px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  height: "100%",
  justifyContent: "space-between",
})

const MenuList = () => {
  return (
    <MenuListWrapper>
      {menus.map((menu) => {
        const { icon, heading } = menu
        return <MenuCard key={heading} icon={icon} heading={heading} />
      })}
    </MenuListWrapper>
  )
}

export default MenuList
