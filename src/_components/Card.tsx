import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  border?: boolean;
  style?: string;
};

export default function Card({ style, border = true, children }: CardProps) {
  return (
    <div
      className={`p-12 rounded-[2.8125rem] ${border && "border-p-dark border-[0.0625rem] shadow-[0px_0.25rem_#191A23] shadow-p-dark"} ${style}`}
    >
      {children}
    </div>
  );
}
