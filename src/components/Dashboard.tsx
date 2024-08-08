import { Box, Grid } from "@mui/material"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ActivityChart from "./ActivityChart"
import NetProfitCard from "./Cards/NetProfitCard"
import CustomerFeedbacks from "./CustomerFeedbacks"
import MetricList from "./MetricList"
import RecentOrders from "./RecentdOrders"
import MenuList from "./MenuList"

const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Header />
      <Box display="flex" flex={1} overflow="hidden">
        <Sidebar />
        <Box padding={2} flex={1} overflow="auto">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7} lg={8}>
              <MetricList />
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <NetProfitCard />
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <ActivityChart />
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <MenuList />
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <RecentOrders />
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <CustomerFeedbacks />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
