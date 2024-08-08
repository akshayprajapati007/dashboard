import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  styled,
  Typography,
} from "@mui/material"
import { recent_orders } from "../configs/data"
import HeadingMedium from "./Typography/HeadingMedium"

type IStatus = "Delivered" | "Cancelled" | "Pending"

const MainWrapper = styled(Box)({
  borderRadius: "8px",
  backgroundColor: "#333",
  padding: "20px",
  height: "100%",
})

const CustomTableContainer = styled(TableContainer)({
  backgroundColor: "#333",
  marginTop: "10px",
  maxHeight: "350px",
  overflowY: "auto",
})

const CustomTableCell = styled(TableCell)({
  fontWeight: "bold",
  fontSize: "1rem",
})

const UserProfileWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& >img": { width: "30px", height: "30px", borderRadius: "50%" },
})

const StatusTypography = styled(Typography)(
  ({ status }: { status: IStatus }) => ({
    backgroundColor: status === "Delivered" ? "#126853" : "#5d3236",
    color: status === "Delivered" ? "#089970" : "#a6494a",
    borderRadius: "14px",
    padding: "0px 12px",
    width: "fit-content",
    fontWeight: "bold",
  })
)

const RecentOrders = () => {
  return (
    <MainWrapper>
      <HeadingMedium content="Recent Orders" />
      <CustomTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>Customer</CustomTableCell>
              <CustomTableCell>Order No.</CustomTableCell>
              <CustomTableCell>Amount</CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recent_orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>
                  <UserProfileWrapper>
                    <img src={order.profileImage} alt="user" />
                    {order.customer}
                  </UserProfileWrapper>
                </TableCell>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <StatusTypography status={order.status as IStatus}>
                    {order.status}
                  </StatusTypography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CustomTableContainer>
    </MainWrapper>
  )
}

export default RecentOrders
