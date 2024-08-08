import { styled, Typography, TypographyOwnProps } from "@mui/material"

const Heading = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
})

interface IHeadingLarge {
  content: string | number
  align?: TypographyOwnProps["align"]
}

const HeadingLarge = ({ content, align }: IHeadingLarge) => {
  return <Heading align={align}>{content}</Heading>
}

export default HeadingLarge
