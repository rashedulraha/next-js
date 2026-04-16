"use client";

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
  //? handle login button click
  const handleLoginButtonCLick = () => {
    console.log("Login button click");
  };
  return (
    <span onClick={handleLoginButtonCLick} className="cursor-pointer">
      {children}
    </span>
  );
};
