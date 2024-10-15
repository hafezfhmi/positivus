type TwitterIconProps = {
  color1?: string;
  color2?: string;
  className?: string;
};

export default function TwitterIcon({
  color1 = "fill-white",
  color2 = "fill-black",
  className,
}: TwitterIconProps) {
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="15" cy="15.6133" r="15" className={color1} />
      <path
        d="M21.9961 12.1048C22.6854 11.5878 23.3058 10.9674 23.7884 10.2436C23.168 10.5193 22.4442 10.7261 21.7204 10.795C22.4786 10.347 23.0301 9.65763 23.3058 8.79596C22.6165 9.20956 21.8238 9.51976 21.031 9.6921C20.3417 8.96829 19.4111 8.55469 18.3771 8.55469C16.378 8.55469 14.758 10.1746 14.758 12.1737C14.758 12.4494 14.7925 12.7252 14.8614 13.0009C11.8628 12.8286 9.1744 11.381 7.38212 9.20956C7.07192 9.72656 6.89959 10.347 6.89959 11.0363C6.89959 12.2771 7.51999 13.3801 8.51953 14.0349C7.93359 14.0005 7.34766 13.8626 6.86512 13.5869V13.6213C6.86512 15.3791 8.10593 16.8267 9.76034 17.1714C9.48461 17.2403 9.13994 17.3093 8.82973 17.3093C8.58847 17.3093 8.38166 17.2748 8.1404 17.2403C8.58847 18.688 9.93267 19.722 11.5182 19.7564C10.2773 20.7215 8.72633 21.3074 7.03745 21.3074C6.72725 21.3074 6.45152 21.273 6.17578 21.2385C7.76126 22.2725 9.65694 22.8585 11.725 22.8585C18.3771 22.8585 21.9961 17.3782 21.9961 12.5873C21.9961 12.415 21.9961 12.2771 21.9961 12.1048Z"
        className={color2}
      />
    </svg>
  );
}