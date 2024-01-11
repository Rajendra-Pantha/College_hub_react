import React from "react";
import ReactDOM from "react-dom/client";


import Nav from "./components/nav/Nav.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Signupstds from "./components/signupstds/Signupstds.jsx";
import Login from "./components/login/Login.jsx";
import Otp from "./components/otp/Otp.jsx";
import Layout2 from "./Layout2.jsx";
import Layout3 from "./Layout3.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Subjects from "./components/subjects/Subjects.jsx";
import Message from "./components/message/Message.jsx";
import Assignments from "./components/assignments/Assignments.jsx";


import Class from "./components/subjects/Class.jsx";
import Teacherdashboard from "./components/dashboard/Teacherdashboard.jsx";
import Teacherassignments from "./components/assignments/Teacherassignments.jsx";

import Details from "./components/Details.jsx";
import Chatbox from "./components/Chatbox.jsx";

import AssignmentProvider from "./AssignmentContext/AssignmentProvider.jsx";
import ClassProvider from "./ClassContext/ClassProvider.jsx";


import Hello from './Hello.jsx';
import Studentlist from './components/Studentlist.jsx';
import Popup from "./components/popup/Popup.jsx";
import Otpprovider from "./otpcontext/Otpprovider.jsx";
import Changepassword from "./components/sidebars/Changepassword.jsx";
import Changeusername from "./components/sidebars/Changeusername.jsx";
import AppProvider from "./AppContext/appProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:(<Layout />),
    children: [
      {
        path: "/",
        element: <Nav />,
      },

      {
        path: "student/signupstds",
        element: (
          <Otpprovider>
          <Signupstds
          users="Student"
          logins="/loginstudent"/>
        </Otpprovider>
        ),
      },
      {
        path: "teacher/signupteacher",
        element: (
         <Otpprovider>
          <Signupstds
           
           users="Teacher"
           logins="/loginteacher"
         />
         </Otpprovider> 
        ),
      },
      {
        path: "loginstudent",
        element: <Otpprovider><Login users="Student" signup="/student/signupstds" /></Otpprovider>,
      },
      {
        path: "loginteacher",
        element: (
         <Otpprovider> <Login  users="Teacher" signup="/teacher/signupteacher" /></Otpprovider>
        ),
      },
      {
        path: "otpverificationstds/:a",
        element: <Otpprovider><Otp users="Student"  /></Otpprovider>,
      },

      {
        path: "otpverificationteacher/:a",
        element:<Otpprovider><Otp users="Teacher"  /></Otpprovider> ,
      },
      
    ],
  },

  {
    path: "students",
    element: <Layout2 />,
    children: [
      {
        path: "dashboard",
        element: (<AppProvider><Dashboard /></AppProvider>),
      },

      {
        path: "subjectsstds",
        element: <Subjects />,
      },
      {
        path: "messagestds",
        element: (<AppProvider><Message identity="students" /></AppProvider>),
      },
      {
        path: "/students/messagestds/chatbox/:i",
        element: (
          <AppProvider>
          <ClassProvider>
            <Chatbox />
          </ClassProvider>
          </AppProvider>
        ),
      },

      {
        path: "assignmentsstds",
        element: <Assignments />,
      },
      {
        path: "assignmentsstds/details/:id",
        element: <Details />,
      },
    ],
  },
  
  {
    path: "Hello",
    element: <Hello />,
  },
  {
    path: "teacher",

    element:<Layout3 />,
    children: [{
      path: "dashboard",
      element:(<AppProvider><AssignmentProvider><Teacherdashboard/></AssignmentProvider></AppProvider>),
    },
    {
      path: "classes",
      element: (
        <AppProvider>
        <ClassProvider>
          <Class />,
        </ClassProvider>
        </AppProvider>
      ),
    },
  
   { path:"classes/studentdetails",
     element:<Studentlist/>
    },
    {
      path: "messagestds",
      element: (
        <AppProvider>
        <ClassProvider>
          <Message identity="teacher"/>
        </ClassProvider>
        </AppProvider>
      ),
    },

  
    {
      path: "/teacher/messagestds/chatbox/:i",
      element: (
        <AppProvider>
        <ClassProvider>
          <Chatbox />
        </ClassProvider>
        </AppProvider>
      ),
    },
    {
      path: "assignments",
      element: (
        <AssignmentProvider>
          <Teacherassignments />
        </AssignmentProvider>
      ),
    },
    {
      path:"assignments/popup/:id",
        element: (
        <AssignmentProvider>
          <Popup />
        </AssignmentProvider>
      ),
    }
   
   
   
]
  },
 
 {
  path:'changepassword',
  element:<Changepassword/>
 },
 {
  path:'changeusername',
  element:<Changeusername/>
 }


  

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>

    <RouterProvider router={router} >

    </RouterProvider>

  </>

);
