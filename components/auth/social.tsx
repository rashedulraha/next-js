"use client";

import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  const handleGithubLogin = () => {
    console.log("Hello github login");
  };
  const handleGoogleLogin = () => {
    console.log("Hello google login");
  };
  return (
    <div className="flex items-center w-full  gap-x-2 ">
      <div className="w-full">
        <Button
          variant={"outline"}
          size={"lg"}
          className="w-full cursor-pointer"
          onClick={handleGithubLogin}>
          <FaGithub className="w-5 h-5" />
        </Button>
      </div>
      <div className="w-full">
        <Button
          variant={"outline"}
          size={"lg"}
          className="w-full cursor-pointer"
          onClick={handleGoogleLogin}>
          <FcGoogle className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
