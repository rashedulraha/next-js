"use client";

import { useRouter } from "next/navigation";

//? create button interfaces
interface LoginButton {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButton) => {
  //? implement router function
  const router = useRouter();
  //? handle login button click

  const handleLoginButtonCLick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO:Implement model</span>;
  }

  return (
    <span onClick={handleLoginButtonCLick} className="cursor-pointer">
      {children}
    </span>
  );
};
