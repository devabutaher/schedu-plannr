import { createBrowserRouter } from "react-router-dom";
import Billing from "../../Dashboard/Dashboard/Billing/Billing";
import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Plans from "../../Pages/Home/Membership/Plan";
import Profile from "../../Pages/Profile/Profile";
import Fifteen from "../../Pages/Schedule/Fifteen/Fifteen";
import Schedule from "../../Pages/Schedule/Schedule/Schedule";
import SixtyMins from "../../Pages/Schedule/SixtyMins/SixtyMins";
import ThirtyMins from "../../Pages/Schedule/ThirtyMins/ThirtyMins";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Team from "../../Pages/Team/Team";
import CreateTeam from "../../Pages/Team/CreateTeam";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import MySchedule from "../../Pages/Schedule/MySchedule/MySchedule";
import UpdateProfile from "../../Pages/Profile/UpdateProfile";
import Payment from "../../Dashboard/Dashboard/Billing/Payment";
import AdminRoute from "../AdminRoute/AdminRoute";
import Admin from "../../Dashboard/Dashboard/Admin/Admin";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import AllUser from "../../Dashboard/AllUser/AllUser";
import AddBlog from "../../Pages/Blog/AddBlog";
import SinglePost from "../../Pages/Blog/SinglePost";
import Getuserinfo from "../../Pages/Blog/Getuserinfo";
import InputBox from "../../Pages/videoChat/InputBox";
import Room from "../../Pages/videoChat/Room";
import Availability from "../../Pages/Availability/Availability";
import Resources from "../../Pages/Resources/Resources";
import IntegrationDetails from "../../Pages/Resources/IntegrationDetails";
import Zoom from "../../Pages/Resources/Zoom";
import Meet from "../../Pages/Resources/Meet";
import MsTeam from "../../Pages/Resources/MsTeam";
import ScheduleMeetingDetails from "../../Pages/Resources/ScheduleMeetingDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/plan",
        element: <Plans></Plans>,
      },
      {
        path: "/supports",
        element: <InputBox></InputBox>,
      },
      {
        path: "/room/:id",
        element: <Room></Room>,
      },

      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/resources",
        element: <Resources/>
      },
      {
        path: "/integrationDetails",
        element: <IntegrationDetails/>
      },
      {
        path: "/zoom",
        element: <Zoom/>
      },
      {
        path: "/meet",
        element: <Meet/>
      },
      {
        path: "/msTeam",
        element: <MsTeam/>
      },
      {
        path: "/scheduleMeetingDetails",
        element: <ScheduleMeetingDetails/>
      },
      {
        path: "blogs/blogPost/:id",
        element: <SinglePost></SinglePost>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/schedule",
    element: <Schedule></Schedule>,
    children: [
      {
        path: "/schedule/fifteen",
        element: <Fifteen></Fifteen>,
      },
      {
        path: "/schedule/thirty",
        element: <ThirtyMins></ThirtyMins>,
      },
      {
        path: "/schedule/sixteen",
        element: <SixtyMins></SixtyMins>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/allUser",
        element: <AllUser />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/dashboard/billing",
        element: <Billing />,
      },
      {
        path: "/dashboard/addBlog",
        element: <Getuserinfo />,
      },
      {
        path: "/dashboard/billing/membership/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard/createTeam",
        element: <CreateTeam />,
      },
      {
        path: "/dashboard/team",
        element: <Team />,
      },
      {
        path: '/dashboard/mySchedule',
        element: <MySchedule></MySchedule>,
      },
      {
        path: '/dashboard/availability',
        element: <Availability/>
      },
      {

        path: '/dashboard/admin',
        element: <AdminRoute><Admin /></AdminRoute>
      },
    ],
  },
]);
