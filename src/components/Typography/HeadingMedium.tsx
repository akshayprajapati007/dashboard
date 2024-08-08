import { styled, Typography } from "@mui/material"

const Heading = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  lineHeight: "normal",
})

interface IHeadingMedium {
  content: string | number
}

const HeadingMedium = ({ content }: IHeadingMedium) => {
  return <Heading>{content}</Heading>
}

export default HeadingMedium
