import React from 'react'
import ReactDOM from 'react-dom/client'

import Nav from './components/nav/Nav.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Signupstds from './components/signupstds/Signupstds.jsx'
import Login from './components/login/Login.jsx'
import Otp from './components/otp/Otp.jsx'
import Layout2 from './Layout2.jsx';
import Layout3 from './Layout3.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Subjects from './components/subjects/Subjects.jsx';
import Message from './components/message/Message.jsx';
import Assignments from './components/assignments/Assignments.jsx';
import Settings from './components/settings/Settings.jsx';
import Class from './components/subjects/Class.jsx';
import Teacherdashboard from './components/dashboard/Teacherdashboard.jsx';
import Teacherassignments from './components/assignments/Teacherassignments.jsx';
import Teachermessage from './components/message/Teachermessage.jsx';
import Setting from './components/settings/Setting.jsx';
import Details from './components/Details.jsx';
const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "",
      element: <Nav />,
    },
    {
      path: "signupstds",
      element: <Signupstds otp='/otpverificationstds' users="Student" logins="/loginstudent" />,
    },
    {
      path: "signupteacher",
      element: <Signupstds otp='/otpverificationteacher' users='Teacher' logins="/loginteacher" />,
    },
    {
      path: "loginstudent",
      element: <Login otp='/otpverificationstds' signup='/signupstds' />
    },
    {
      path: "loginteacher",
      element: <Login otp='/otpverificationteacher' signup='/signupteacher' />
    },
    {
      path: "otpverificationstds",
      element: <Otp dashboard='/students'  />
    },
    {
      path: "otpverificationteacher",
      element: <Otp  dashboard='/teacher'/>
    },
    
   
    ]

  },

  {
    path: "students",
    element:<Layout2 />,
    children: [{
      path: "",
      element:<Dashboard/>,
    },
    {
      path: "subjectsstds",
      element:<Subjects/>,
    },
    {
      path: "messagestds",
      element:<Message/>,
    },
    {
      path: "assignmentsstds",
      element:<Assignments/>,
    },
    {
      path : "details/:id",
      element : <Details/>
    },
    {
      path: "settingstds",
      element:<Settings/>,
    },
   
]
  },
  {
    path: "teacher",
    element:<Layout3 />,
    children: [{
      path: "",
      element:<Teacherdashboard/>,
    },
    {
      path: "classes",
      element:<Class/>,
    },
    {
      path: "messages",
      element:<Teachermessage/>,
    },
    {
      path: "assignments",
      element:<Teacherassignments/>,
    },
    {
      path: "settingstds",
      element:<Setting/>,
    },
   
]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
