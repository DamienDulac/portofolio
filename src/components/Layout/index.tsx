import React from "react";
import { Navbar, Footer, Logo } from "../index";
import Link from "next/link";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
