import {
  BurgerIcon,
  LocationIcon,
  TotalCancelledIcon,
  TotalDeliveredIcon,
  TotalOrdersIcon,
  TotalRevenueIcon,
  TrayIcon,
  ProfileIcon,
  Profile2Icon,
  Profile3Icon,
  Profile4Icon,
} from "../assets/index"

export const metrics = [
  {
    title: "Total Orders",
    value: 75,
    icon: TotalOrdersIcon,
    netPercentage: 3,
  },
  {
    title: "Total Delivered",
    value: 70,
    icon: TotalDeliveredIcon,
    netPercentage: -3,
  },
  {
    title: "Total Cancelled",
    value: 5,
    icon: TotalCancelledIcon,
    netPercentage: 3,
  },
  {
    title: "Total Revenue",
    value: "$12k",
    icon: TotalRevenueIcon,
    netPercentage: -3,
  },
]

export const menus = [
  {
    icon: LocationIcon,
    heading: "Goals",
  },
  {
    icon: BurgerIcon,
    heading: "Popular Dishes",
  },
  {
    icon: TrayIcon,
    heading: "Menus",
  },
]

export const recent_orders = [
  {
    profileImage: ProfileIcon,
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    profileImage: Profile2Icon,
    customer: "Jane Cooper",
    orderNo: "48967586",
    amount: "$305.02",
    status: "Delivered",
  },
  {
    profileImage: Profile3Icon,
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    profileImage: Profile4Icon,
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$95.00",
    status: "Pending",
  },
  {
    profileImage: Profile2Icon,
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    profileImage: Profile3Icon,
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
]

export const feedbacks = [
  {
    profileImage: ProfileIcon,
    name: "Jenny Wilson",
    feedback: "The food was excellent and so was the service.",
    rating: 5,
  },
  {
    profileImage: Profile3Icon,
    name: "Dianne Russell",
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
    rating: 5,
  },
  {
    profileImage: Profile4Icon,
    name: "Devon Lane",
    feedback: "Normally wings are wings, but these are lean meaty and tender.",
    rating: 4,
  },
  {
    profileImage: ProfileIcon,
    name: "Jenny Wilson",
    feedback: "The food was excellent and so was the service.",
    rating: 5,
  },
  {
    profileImage: Profile2Icon,
    name: "Dianne Russell",
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
    rating: 5,
  },
  {
    profileImage: Profile3Icon,
    name: "Devon Lane",
    feedback: "Normally wings are wings, but these are lean meaty and tender.",
    rating: 4,
  },
]
