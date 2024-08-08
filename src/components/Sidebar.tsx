import { List, ListItemButton, Box, styled } from "@mui/material"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined"
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined"
import { LogoutIcon } from "../assets"

const SidebarWrapper = styled(Box)({
  height: "100%",
  backgroundColor: "#333",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
})

const CustomListItem = styled(ListItemButton)({
  padding: "16px",
})

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Box flex={1}>
        <List>
          <CustomListItem>
            <HomeRoundedIcon style={{ color: "#90caf9" }} />
          </CustomListItem>
          <CustomListItem>
            <InsertChartOutlinedOutlinedIcon style={{ color: "#d0d0d0" }} />
          </CustomListItem>
          <CustomListItem>
            <AssignmentTurnedInOutlinedIcon style={{ color: "#d0d0d0" }} />
          </CustomListItem>
          <CustomListItem>
            <AccountBalanceWalletOutlinedIcon style={{ color: "#d0d0d0" }} />
          </CustomListItem>
          <CustomListItem>
            <LocalMallOutlinedIcon style={{ color: "#d0d0d0" }} />
          </CustomListItem>
        </List>
      </Box>
      <Box>
        <CustomListItem>
          <img src={LogoutIcon} alt="logout" />
        </CustomListItem>
      </Box>
    </SidebarWrapper>
  )
}

export default Sidebar
