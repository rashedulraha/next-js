import React from "react";
import Container from "./Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-gray-500">
      <Container>
        <div className="flex items-center justify-between py-3 ">
          <div>
            <h2>Dev Story</h2>
          </div>
          <nav className="flex items-center gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/blog/author"}>Blog</Link>
            <Link href={`/user/${12}`}>User</Link>
            <Link href={`/register`}>Register</Link>
            <Link href={`/login`}>Login</Link>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
