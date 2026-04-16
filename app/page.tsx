import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Lock, Mail } from "lucide-react";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-linear-to-br from-sky-500 to-sky-700 p-4">
      <div className="w-full max-w-md space-y-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-sky-100">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
            <Lock className="w-8 h-8 text-sky-600" />
          </div>
          <h1 className={cn("text-4xl font-bold text-sky-900", font.className)}>
            Auth
          </h1>
          <p className="text-lg text-sky-700 font-medium">
            Secure authentication service
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-sky-400" />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-sky-400" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded text-sky-600 focus:ring-sky-500"
              />
              <span className="text-sm text-sky-700">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-sky-600 hover:text-sky-800 font-medium">
              Forgot password?
            </a>
          </div>

          <LoginButton>
            <Button className="w-full py-3 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-medium rounded-lg shadow-md hover:from-sky-700 hover:to-sky-800 transition-all duration-300 transform hover:-translate-y-0.5">
              Sign In
            </Button>
          </LoginButton>

          <div className="text-center">
            <p className="text-sm text-sky-600">
              Don&apos;t have an account?
              <a
                href="#"
                className="font-medium text-sky-800 hover:text-sky-900">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
