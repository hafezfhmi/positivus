type PlusProps = {
  className?: string;
};

export default function Plus({ className }: PlusProps) {
  return (
    <div
      className={`w-3 h-3 relative before:content-[""] before:w-full before:h-[0.1875rem] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-p-dark after:content-[""] after:w-full after:h-[0.1875rem] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:bg-p-dark ${className}`}
    ></div>
  );
}
