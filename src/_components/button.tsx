import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  style?: string;
};

export default function Button({ style, children }: ButtonProps) {
  return (
    <button
      className={`w-full py-5 px-7 rounded-[0.875rem] text-xl leading-7 text-white bg-p-dark ${style}`}
    >
      {children}
    </button>
  );
}
