import { Box, styled } from "@mui/material"

const Heading = styled(Box)({
  fontSize: "0.8rem",
})

interface IHeadingSmall {
  content: string | number
}

const HeadingSmall = ({ content }: IHeadingSmall) => {
  return <Heading>{content}</Heading>
}

export default HeadingSmall
