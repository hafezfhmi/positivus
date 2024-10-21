import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  border?: boolean;
  className?: string;
};

export default function Card({
  className,
  border = true,
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-[2.8125rem] p-12 ${border && "border border-p-dark shadow-[0px_0.25rem_#191A23] shadow-p-dark"} ${className}`}
    >
      {children}
    </div>
  );
}
