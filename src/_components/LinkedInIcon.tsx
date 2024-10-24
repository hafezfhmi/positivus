type LinkedInIconProps = {
  color1?: string;
  color2?: string;
  className?: string;
};

export default function LinkedInIcon({
  color1 = "fill-white",
  color2 = "fill-black",
  className,
}: LinkedInIconProps) {
  return (
    <svg
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="15" cy="15.6133" r="15" className={color1} />
      <path
        d="M8.22178 22.6719H11.3059V12.6875H8.22178V22.6719Z"
        className={color2}
      />
      <path
        d="M7.94141 9.5C7.94141 10.4844 8.7358 11.2813 9.76384 11.2813C10.7451 11.2813 11.5395 10.4844 11.5395 9.5C11.5395 8.51563 10.7451 7.67188 9.76384 7.67188C8.7358 7.67188 7.94141 8.51563 7.94141 9.5Z"
        className={color2}
      />
      <path
        d="M19.8106 22.6719H22.9414V17.1875C22.9414 14.5156 22.3339 12.4062 19.2031 12.4062C17.7078 12.4062 16.6797 13.25 16.2592 14.0469H16.2124V12.6875H13.2685V22.6719H16.3526V17.75C16.3526 16.4375 16.5863 15.1719 18.2218 15.1719C19.8106 15.1719 19.8106 16.6719 19.8106 17.7969V22.6719Z"
        className={color2}
      />
    </svg>
  );
}
