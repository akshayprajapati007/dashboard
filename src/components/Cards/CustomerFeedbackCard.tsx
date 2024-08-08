import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"

const MainWrapper = styled(Box)({
  backgroundColor: "#333",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  padding: "10px 0px",
})

const UserContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  "& img": {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
  },
})

const Separator = styled(Box)({
  height: "2px",
  width: "100%",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  marginTop: "10px",
})

interface ICustomerFeedbackCard {
  name: string
  feedback: string
  rating: number
  profileImage: string
}

const CustomerFeedbackCard = ({
  name,
  feedback,
  rating,
  profileImage,
}: ICustomerFeedbackCard) => {
  return (
    <MainWrapper>
      <UserContent>
        <img src={profileImage} alt="User Profile" />
        <Typography variant="h6">{name}</Typography>
      </UserContent>
      <Typography variant="body2">{"⭐".repeat(rating)}</Typography>
      <Typography variant="body2">{feedback}</Typography>
      <Separator />
    </MainWrapper>
  )
}

export default CustomerFeedbackCard
