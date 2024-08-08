import CustomerFeedbackCard from "./Cards/CustomerFeedbackCard"
import { Box, styled } from "@mui/material"
import { feedbacks } from "../configs/data"
import HeadingMedium from "./Typography/HeadingMedium"

const MainWrapper = styled(Box)({
  borderRadius: "8px",
  backgroundColor: "#333",
  padding: "20px",
  height: "100%",
})

const FeedbacksWrapper = styled(Box)({
  maxHeight: "350px",
  overflowY: "auto",
  marginTop: "10px",
})

const CustomerFeedbacks = () => {
  return (
    <MainWrapper>
      <HeadingMedium content="Customer's Feedback" />
      <FeedbacksWrapper>
        {feedbacks.map((feedbackInfo) => {
          const { feedback, name, profileImage, rating } = feedbackInfo

          return (
            <CustomerFeedbackCard
              key={`${name}${rating}`}
              name={name}
              rating={rating}
              feedback={feedback}
              profileImage={profileImage}
            />
          )
        })}
      </FeedbacksWrapper>
    </MainWrapper>
  )
}

export default CustomerFeedbacks
