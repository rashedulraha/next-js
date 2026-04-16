import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col  gap-y-4 items-center justify-center">
      <h1 className="text-lg, font-semibold">auth</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
