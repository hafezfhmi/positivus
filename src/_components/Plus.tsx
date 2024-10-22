type PlusProps = {
  className?: string;
  isActive?: boolean;
};

export default function Plus({ className, isActive = false }: PlusProps) {
  return (
    <div
      className={`relative h-3 w-3 before:absolute before:left-1/2 before:top-1/2 before:h-[0.1875rem] before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-p-dark before:content-[""] after:absolute after:left-1/2 after:top-1/2 after:h-[0.1875rem] after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:bg-p-dark after:transition after:content-[""] lg:h-6 lg:w-6 lg:before:h-1.5 lg:after:h-1.5 ${className} ${isActive && "after:rotate-0"}`}
    ></div>
  );
}
