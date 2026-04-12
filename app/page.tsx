import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center  py-32 px-16 ">
        <h1 className="font-bold text-2xl">
          Hello world! | i&apos;m learning next.js and nextAuth
        </h1>
        <br />
        <Button className="cursor-pointer">Client me </Button>
      </main>
    </div>
  );
}
