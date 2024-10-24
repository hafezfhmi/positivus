type FacebookIconProps = {
  color1?: string;
  color2?: string;
  className?: string;
};

export default function FacebookIcon({
  color1 = "fill-white",
  className,
}: FacebookIconProps) {
  return (
    <svg
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 15.7046C30 7.36785 23.2863 0.613281 15 0.613281C6.71371 0.613281 0 7.36785 0 15.7046C0 23.2502 5.44355 29.5179 12.6411 30.6133V20.0859H8.83064V15.7046H12.6411V12.4186C12.6411 8.64574 14.879 6.51592 18.2661 6.51592C19.9597 6.51592 21.6532 6.82018 21.6532 6.82018V10.5321H19.7782C17.9032 10.5321 17.2984 11.6883 17.2984 12.9054V15.7046H21.4718L20.8065 20.0859H17.2984V30.6133C24.496 29.5179 30 23.2502 30 15.7046Z"
        className={color1}
      />
    </svg>
  );
}
