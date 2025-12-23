import React from "react";
import Container from "../Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" border-b border-stone-700 sticky top-0 z-50 bg-zinc-900">
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* web site main logo */}
          <Link href={"/"}>Daily Food</Link>

          {/*  website main navbar  */}
          <div className="space-x-5">
            <Link className="hover:underline transition-all" href={"/"}>
              Home
            </Link>
            <Link className="hover:underline transition-all" href={"/foods"}>
              Foods
            </Link>
            <Link className="hover:underline transition-all" href={"/reviews"}>
              Reviews
            </Link>
            <Link
              className="hover:underline transition-all"
              href={"/feedbacks"}>
              Feedbacks
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
