import {
  AppBar,
  IconButton,
  Avatar,
  styled,
  Box,
  Badge,
  TextField,
  useMediaQuery,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined"
import { LogoIcon, ProfileIcon } from "../assets"

const RightWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  justifyContent: "flex-end",
})

const CustomIconButton = styled(IconButton)({
  backgroundColor: "#44444b",
  margin: "0px 5px",
  height: "40px",
  width: "40px",
})

const CenterContentBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})

const LogoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "25px",
})

const CustomSearchField = styled(TextField)({
  "& MuiOutlinedInput-root": {
    borderRadius: "6px",
  },
  "& input": {
    padding: "8px 12px",
    color: "#fff",
  },
})

const Header = () => {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("md")
  )

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1d1d1d" }}>
      <CenterContentBox padding="10px">
        <LogoWrapper flex={1} paddingLeft="5px">
          <img src={LogoIcon} alt="logo" height="30px" width="30px" />
          <CustomSearchField
            sx={{ display: isSmallScreen ? "none" : "block" }}
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </LogoWrapper>
        <RightWrapper>
          <CustomIconButton
            color="inherit"
            sx={{ display: isSmallScreen ? "block" : "none" }}
          >
            <SearchIcon fontSize="small" />
          </CustomIconButton>
          <CustomIconButton color="inherit">
            <MailOutlineOutlinedIcon fontSize="small" />
          </CustomIconButton>
          <CustomIconButton color="inherit">
            <SettingsOutlinedIcon fontSize="small" />
          </CustomIconButton>
          <CustomIconButton color="inherit">
            <Badge color="primary" badgeContent={1} variant="dot">
              <NotificationsNoneOutlinedIcon fontSize="small" />
            </Badge>
          </CustomIconButton>
          <Avatar
            sx={{
              width: "38px",
              height: "38px",
            }}
            alt="User"
            src={ProfileIcon}
          />
        </RightWrapper>
      </CenterContentBox>
    </AppBar>
  )
}

export default Header
