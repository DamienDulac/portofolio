import React from "react";

type TypographyProps = {
  children: any;
  fontColor?: string;
};
export const Typography = ({
  children,
  fontColor = "black",
}: TypographyProps) => {
  return <p className={`text-${fontColor}`}>{children}</p>;
};
