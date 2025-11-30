import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
const Nav = () => {
  return (
    <div className="md:w-2/3 md:h-screen md:text-black md:bg-[#859cf176] md:flex md:justify-center md:items-center bg-[#859cf176] h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <div className="font-semibold md:text-6xl md:mb-14 md:mx-0 my-6  px-5 text-5xl mb-12 text-center">
          Login/Signup
        </div>
        <div className="flex gap-12 mx-5 font-body justify-center">
          <Card
            img="https://cdn.pixabay.com/photo/2012/04/24/21/29/laptop-40935_960_720.png"
            user="Student"
            asa="student/signupstds"
          />

          <Card
            img="https://cdn.pixabay.com/photo/2020/05/23/04/08/myanmar-5207937_1280.png"
            user="Teacher"
            asa="teacher/signupteacher"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
