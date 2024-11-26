import { useState, useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const Footer = lazy(() => import("./Components/Footer"));
const Index = lazy(() => import("./Components/Index"));
const Login = lazy(() => import("./Components/Login"));
const Official = lazy(() => import("./Components/Official"));
const Part1 = lazy(() => import("./Components/Part1"));
const Part2 = lazy(() => import("./Components/Part2"));
const Register = lazy(() => import("./Components/Signup"));
const Profile = lazy(() => import("./Components/Profile"));
const QueryBox = lazy(() => import("./Components/QueryBox"));
const Otpverify = lazy(() => import("./Components/VerifyOTP"));
const Talk = lazy(() => import("./Components/Talk"));
const Meet = lazy(() => import("./Components/Meet"));
const MeetingRoom = lazy(() => import("./Components/MeetingRoom"));
const UsersTable = lazy(() => import("./Components/UserList"));
const LibraryUI = lazy(() => import("./Components/Library"));
const About = lazy(() => import("./Components/About"));
const Rules = lazy(() => import("./Components/Rules"));
const ReadBook = lazy(() => import("./Components/ReadBook"));
const Popping = lazy(() => import("./Components/Popping"));
const DailyProblems = lazy(() => import("./Components/DailyProblems"));
const ExecutiveTeam = lazy(() => import("./Components/Teams/ExecutiveTeam"));
const DevelopmentTeam = lazy(() => import("./Components/Teams/DevelopmentTeam"));
const PayPal = lazy(()=> import ("./Components/PayPalComponent"))
const QRPage = lazy(()=> import ("./Components/QRPage"))
const CoreTeam = lazy(()=> import ("./Components/Teams/CoreTeam"))
const DesignTeam = lazy(() => import("./Components/Teams/DesignTeam"));
const ContentTeam = lazy(() => import("./Components/Teams/ContentTeam"));
const ActivityTeam = lazy(() => import("./Components/Teams/ActivityTeam"));
const PRTeam = lazy(() => import("./Components/Teams/PRTeam"));
const Treasury = lazy(() => import("./Components/Teams/Treasury"));
const AppointmentCommittee = lazy(() => import("./Components/Teams/AppointmentCommittee"));
const DisciplinaryCommittee = lazy(() => import("./Components/Teams/DisciplinaryCommittee"));
const LiveUsers = lazy(() => import("./Components/Live_Usere"));
const HistoryUsers = lazy(() => import("./Components/History_Users"));
const DonateUs = lazy(()=> import ("./Components/DonateUs"));
import Cookies from "js-cookie";

function App() {
  const [details, setDetails] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  const getToken = () => {
    const token = Cookies.get("Token");
    if (token) {
      return token;
    }
    return null;
  };
  const getProfileInfo = async () => {
    const profile = Cookies.get("ProfileInfo");
    if (profile) {
      let decodedProfile = decodeURIComponent(profile.substring(2));
      return JSON.parse(decodedProfile);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      if (token !== null) {
        setAuthenticated(true);
      }

      const profile = await getProfileInfo();
      if (profile) {
        setDetails({
          name: profile.name,
          email: profile.email,
          college: profile.college,
          department: profile.department,
          year: profile.year,
          password: profile.password,
        });
      }
    };
    fetchData();
  }, []);

  const router_val = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense>
          <Popping>
            <Part1 />
          </Popping>
          <Part2 />
          <Popping>
            <QueryBox />
          </Popping>
          <Footer />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/verifyOTP",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Otpverify />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/official",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Official />
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/executivecommittee",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ExecutiveTeam details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/liveusers",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LiveUsers details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/historyusers",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <HistoryUsers details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/developmentteam",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <DevelopmentTeam details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/designteam",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <DesignTeam details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/contentteam",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ContentTeam details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/activityteam",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ActivityTeam details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/prteam",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <PRTeam details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/corecommittee",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <CoreTeam details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/notice/donation",
      element: (
        <Suspense fallback = {<div>Loading...</div>}><DonateUs/></Suspense>
      )
    },
    {
      path: "/admins/coreteam/treasurycommittee",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Treasury details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/coreteam/appointmentsub-committee",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <AppointmentCommittee details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/notice/donation/qrcode",
      element: (
        <Suspense><QRPage/></Suspense>
      )
    },
    {
      path: "/notice/donation/paypal/:donation",
      element: (
      <Suspense><PayPal/></Suspense>
    )
    },
    {
      path: "/admins/coreteam/disciplinarysub-committee",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <DisciplinaryCommittee details={details}/>
        </Suspense>
      ),
    },
    {
      path: "/admins/userlist",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <UsersTable details={details} />
        </Suspense>
      ) : (
        <></>
      ),
    },
    {
      path: "/profiles",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Profile details={details} />
        </Suspense>
      ) : (
        <></>
      ),
    },
    {
      path: "/groupchat",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Talk details={details} />
        </Suspense>
      ) : (
        <></>
      ),
    },
    {
      path: "/meeting",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Meet details={details} />
        </Suspense>
      ) : (
        <></>
      ),
    },
    {
      path: "/jms_meet/:roomId/:username",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MeetingRoom details={details} />
        </Suspense>
      ) : (
        <></>
      ),
    },
    {
      path: "/library/resources",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <LibraryUI details={details} />
        </Suspense>
      ) : (
        <></>
      ),
    },
    {
      path: "/library/problems",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <DailyProblems />
        </Suspense>
      ) : (
        <></>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/rules",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Rules />
        </Suspense>
      ),
    },
    {
      path: "/readbook/:thisurl",
      element: authenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <ReadBook />
        </Suspense>
      ) : (
        <></>
      ),
    },
  ]);

  return (
    <div className="relative bg-black">
      <div className="sticky top-0 left-0 z-20">
        <Suspense>
          <Index auth={authenticated} details={details} />
        </Suspense>
      </div>
      <RouterProvider router={router_val} />
    </div>
  );
}

export default App;
