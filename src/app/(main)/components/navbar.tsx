import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row lg:flex-col gap-2 mb-4">
      <Link href="blogs">Blogs</Link>
      <Link href="tags">Tags</Link>
      <Link href="about">About Me</Link>
    </div>
  );
};

export default Navbar;
