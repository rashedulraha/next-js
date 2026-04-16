import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-gradient-to-br from-sky-500 to-sky-700 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1
            className={cn(
              "text-6xl font-bold text-sky-600 drop-shadow-md",
              font.className,
            )}>
            Auth
          </h1>
          <p className="font-semibold text-sky-700 text-center">
            A simple authentication service
          </p>
          <LoginButton>
            <Button className="mt-4 bg-sky-500">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
