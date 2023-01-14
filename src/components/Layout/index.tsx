import React from "react";
import { Navbar, Footer, Logo } from "../index";
import Link from "next/link";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="antialiased flex flex-col bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
