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
import Hello from "./Hello.jsx";

import Class from "./components/subjects/Class.jsx";
import Teacherdashboard from "./components/dashboard/Teacherdashboard.jsx";
import Teacherassignments from "./components/assignments/Teacherassignments.jsx";

import Details from "./components/Details.jsx";
import Chatbox from "./components/Chatbox.jsx";

import AssignmentProvider from "./AssignmentContext/AssignmentProvider.jsx";

<<<<<<< HEAD
import AssignmentProvider from './AssignmentContext/AssignmentProvider.jsx';
import Hello from './Hello.jsx';
import Studentlist from './components/Studentlist.jsx';
=======
>>>>>>> e352e33eb7da636cda63377ccbc8e5b06e436fe1
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Nav />,
      },

      {
        path: "signupstds",
        element: (
          <Signupstds
            otp="/otpverificationstds"
            users="Student"
            logins="/loginstudent"
          />
        ),
      },
      {
        path: "signupteacher",
        element: (
          <Signupstds
            otp="/otpverificationteacher"
            users="Teacher"
            logins="/loginteacher"
          />
        ),
      },
      {
        path: "loginstudent",
        element: <Login otp="/otpverificationstds" signup="/signupstds" />,
      },
      {
        path: "loginteacher",
        element: (
          <Login otp="/otpverificationteacher" signup="/signupteacher" />
        ),
      },
      {
        path: "otpverificationstds",
        element: <Otp dashboard="/students/dashboard" />,
      },
      {
        path: "otpverificationteacher",
        element: <Otp dashboard="/teacher/dashboard" />,
      },
    ],
  },

  {
    path: "students",
    element: <Layout2 />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "subjectsstds",
        element: <Subjects />,
      },
      {
        path: "messagestds",
        element: <Message />,
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
    path: "students/messagestds/chatbox/:i",
    element: <Chatbox />,
  },
  {
    path: "Hello",
    element: <Hello />,
  },
  {
    path: "teacher",
<<<<<<< HEAD
    element:<Layout3 />,
    children: [{
      path: "dashboard",
      element:<AssignmentProvider><Teacherdashboard/></AssignmentProvider>,
    },
    {
      path: "classes",
      element:<Class/>,
    },
   { path:"classes/studentdetails",
     element:<Studentlist/>
    },
    {
      path: "messagestds",
      element:<Message />,
    },
    {
      path: "/teacher/messagestds/chatbox/:i",
      element:<Chatbox/>,
    },
    {
      path: "assignments",
      element:<AssignmentProvider><Teacherassignments/></AssignmentProvider>,
    },
   
   
   
]
  },
 
  {
    path:"Hello",
    element:<Hello/>
  }

=======
    element: <Layout3 />,
    children: [
      {
        path: "dashboard",
        element: <Teacherdashboard />,
      },
      {
        path: "classes",
        element: <Class />,
      },
      {
        path: "messagestds",
        element: <Message />,
      },
      {
        path: "assignments",
        element: (
          <AssignmentProvider>
            <Teacherassignments />
          </AssignmentProvider>
        ),
      },
    ],
  },
  {
    path: "teacher/messagestds/chatbox/:i",
    element: <Chatbox />,
  },
>>>>>>> e352e33eb7da636cda63377ccbc8e5b06e436fe1
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
