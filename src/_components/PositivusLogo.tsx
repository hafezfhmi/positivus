type PositivusLogoProps = {
  className?: string;
  color1?: string;
};

export default function PositivusLogo({
  color1 = "fill-black",
  className,
}: PositivusLogoProps) {
  return (
    <svg
      width="144"
      height="24"
      viewBox="0 0 144 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_346_1160)">
        <path
          d="M11.8063 3.62989L23.3513 0.228516L19.9826 11.8063L23.3513 23.3513L11.8063 19.9826L0.228516 23.3513L3.62989 11.8063L0.228516 0.228516L11.8063 3.62989Z"
          className={color1}
        />
      </g>
      <path
        d="M32.0879 20.3337V1.96777H39.3818C40.5012 1.96777 41.4983 2.19516 42.3728 2.64994C43.2649 3.08722 43.9558 3.71691 44.4455 4.53901C44.9528 5.34361 45.2064 6.31438 45.2064 7.45132V7.7924C45.2064 8.92934 44.944 9.90886 44.4193 10.731C43.9121 11.553 43.2211 12.1827 42.3466 12.62C41.472 13.0573 40.4838 13.2759 39.3818 13.2759H34.9215V20.3337H32.0879ZM34.9215 10.7047H39.0932C40.0902 10.7047 40.8861 10.4423 41.4808 9.9176C42.0755 9.39286 42.3728 8.67571 42.3728 7.76616V7.50379C42.3728 6.57675 42.0755 5.85086 41.4808 5.32612C40.8861 4.80138 40.0902 4.53901 39.0932 4.53901H34.9215V10.7047Z"
        className={color1}
      />
      <path
        d="M53.6775 20.701C52.3831 20.701 51.2287 20.4387 50.2142 19.9139C49.2172 19.3717 48.4301 18.6021 47.8529 17.6051C47.2757 16.6081 46.9871 15.4274 46.9871 14.0631V13.6695C46.9871 12.3052 47.2757 11.1333 47.8529 10.1537C48.4301 9.15673 49.2172 8.38711 50.2142 7.84487C51.2287 7.30264 52.3831 7.03153 53.6775 7.03153C54.9719 7.03153 56.1263 7.30264 57.1408 7.84487C58.1553 8.38711 58.9512 9.15673 59.5284 10.1537C60.1056 11.1333 60.3942 12.3052 60.3942 13.6695V14.0631C60.3942 15.4274 60.1056 16.6081 59.5284 17.6051C58.9512 18.6021 58.1553 19.3717 57.1408 19.9139C56.1263 20.4387 54.9719 20.701 53.6775 20.701ZM53.6775 18.2872C54.8669 18.2872 55.8289 17.9112 56.5636 17.159C57.3157 16.3894 57.6918 15.3312 57.6918 13.9843V13.7482C57.6918 12.4014 57.3245 11.3519 56.5898 10.5998C55.8552 9.83015 54.8844 9.44534 53.6775 9.44534C52.5056 9.44534 51.5436 9.83015 50.7914 10.5998C50.0568 11.3519 49.6895 12.4014 49.6895 13.7482V13.9843C49.6895 15.3312 50.0568 16.3894 50.7914 17.159C51.5436 17.9112 52.5056 18.2872 53.6775 18.2872Z"
        className={color1}
      />
      <path
        d="M69.0586 20.701C67.4144 20.701 66.0501 20.3337 64.9656 19.5991C63.8811 18.8644 63.2165 17.7537 62.9716 16.267L65.4903 15.6635C65.6303 16.3807 65.8664 16.9491 66.1987 17.3689C66.5311 17.7887 66.9421 18.0861 67.4319 18.261C67.9391 18.4359 68.4814 18.5234 69.0586 18.5234C69.9156 18.5234 70.5716 18.3572 71.0263 18.0249C71.4986 17.6925 71.7347 17.264 71.7347 16.7392C71.7347 16.2145 71.5161 15.8297 71.0788 15.5848C70.6415 15.3399 69.9944 15.1388 69.1373 14.9814L68.2452 14.8239C67.3707 14.6665 66.5748 14.4391 65.8577 14.1418C65.1405 13.8444 64.572 13.4334 64.1522 12.9086C63.7324 12.3839 63.5226 11.7105 63.5226 10.8884C63.5226 9.66398 63.9773 8.71944 64.8869 8.05477C65.7964 7.37261 67.0033 7.03153 68.5076 7.03153C69.9594 7.03153 71.1488 7.36386 72.0758 8.02853C73.0204 8.67572 73.6326 9.55903 73.9124 10.6785L71.3937 11.3869C71.2362 10.5998 70.9039 10.0488 70.3967 9.73394C69.8894 9.40161 69.2597 9.23544 68.5076 9.23544C67.773 9.23544 67.1957 9.37537 66.7759 9.65523C66.3562 9.9176 66.1463 10.2937 66.1463 10.7834C66.1463 11.3082 66.3474 11.693 66.7497 11.9379C67.1695 12.1827 67.7292 12.3664 68.4289 12.4888L69.3472 12.6463C70.2742 12.8037 71.1226 13.0223 71.8922 13.3022C72.6618 13.582 73.2652 13.9843 73.7025 14.5091C74.1573 15.0338 74.3847 15.7335 74.3847 16.6081C74.3847 17.9024 73.9037 18.9082 72.9417 19.6253C71.9796 20.3425 70.6853 20.701 69.0586 20.701Z"
        className={color1}
      />
      <path
        d="M77.5434 20.3337V7.39884H80.2458V20.3337H77.5434ZM78.9077 5.64096C78.383 5.64096 77.9369 5.47479 77.5696 5.14246C77.2198 4.79263 77.0449 4.3466 77.0449 3.80437C77.0449 3.26214 77.2198 2.82485 77.5696 2.49252C77.9369 2.14269 78.383 1.96777 78.9077 1.96777C79.45 1.96777 79.896 2.14269 80.2458 2.49252C80.5956 2.82485 80.7705 3.26214 80.7705 3.80437C80.7705 4.3466 80.5956 4.79263 80.2458 5.14246C79.896 5.47479 79.45 5.64096 78.9077 5.64096Z"
        className={color1}
      />
      <path
        d="M89.1102 20.3337C88.3231 20.3337 87.6934 20.0976 87.2212 19.6253C86.7664 19.153 86.539 18.5234 86.539 17.7362V9.68147H82.9708V7.39884H86.539V3.1222H89.2414V7.39884H93.0983V9.68147H89.2414V17.264C89.2414 17.7887 89.4863 18.0511 89.9761 18.0511H92.6785V20.3337H89.1102Z"
        className={color1}
      />
      <path
        d="M96.2732 20.3337V7.39884H98.9756V20.3337H96.2732ZM97.6375 5.64096C97.1128 5.64096 96.6667 5.47479 96.2994 5.14246C95.9496 4.79263 95.7747 4.3466 95.7747 3.80437C95.7747 3.26214 95.9496 2.82485 96.2994 2.49252C96.6667 2.14269 97.1128 1.96777 97.6375 1.96777C98.1797 1.96777 98.6258 2.14269 98.9756 2.49252C99.3254 2.82485 99.5003 3.26214 99.5003 3.80437C99.5003 4.3466 99.3254 4.79263 98.9756 5.14246C98.6258 5.47479 98.1797 5.64096 97.6375 5.64096Z"
        className={color1}
      />
      <path
        d="M105.977 20.3337L101.622 7.39884H104.482L107.919 18.3397H108.339L111.776 7.39884H114.635L110.28 20.3337H105.977Z"
        className={color1}
      />
      <path
        d="M122.216 20.5698C121.237 20.5698 120.362 20.3512 119.593 19.9139C118.823 19.4766 118.22 18.8557 117.782 18.0511C117.345 17.2465 117.127 16.2845 117.127 15.165V7.39884H119.829V14.9814C119.829 16.1008 120.109 16.9316 120.669 17.4739C121.228 17.9986 122.007 18.261 123.004 18.261C124.106 18.261 124.989 17.8937 125.654 17.159C126.336 16.4069 126.677 15.3312 126.677 13.9319V7.39884H129.379V20.3337H126.729V18.3922H126.309C126.065 18.9169 125.627 19.4154 124.998 19.8877C124.368 20.3425 123.441 20.5698 122.216 20.5698Z"
        className={color1}
      />
      <path
        d="M138.674 20.701C137.03 20.701 135.665 20.3337 134.581 19.5991C133.496 18.8644 132.832 17.7537 132.587 16.267L135.106 15.6635C135.246 16.3807 135.482 16.9491 135.814 17.3689C136.146 17.7887 136.557 18.0861 137.047 18.261C137.554 18.4359 138.097 18.5234 138.674 18.5234C139.531 18.5234 140.187 18.3572 140.642 18.0249C141.114 17.6925 141.35 17.264 141.35 16.7392C141.35 16.2145 141.131 15.8297 140.694 15.5848C140.257 15.3399 139.61 15.1388 138.753 14.9814L137.861 14.8239C136.986 14.6665 136.19 14.4391 135.473 14.1418C134.756 13.8444 134.187 13.4334 133.768 12.9086C133.348 12.3839 133.138 11.7105 133.138 10.8884C133.138 9.66398 133.593 8.71944 134.502 8.05477C135.412 7.37261 136.619 7.03153 138.123 7.03153C139.575 7.03153 140.764 7.36386 141.691 8.02853C142.636 8.67572 143.248 9.55903 143.528 10.6785L141.009 11.3869C140.852 10.5998 140.519 10.0488 140.012 9.73394C139.505 9.40161 138.875 9.23544 138.123 9.23544C137.388 9.23544 136.811 9.37537 136.391 9.65523C135.971 9.9176 135.762 10.2937 135.762 10.7834C135.762 11.3082 135.963 11.693 136.365 11.9379C136.785 12.1827 137.345 12.3664 138.044 12.4888L138.963 12.6463C139.89 12.8037 140.738 13.0223 141.507 13.3022C142.277 13.582 142.881 13.9843 143.318 14.5091C143.773 15.0338 144 15.7335 144 16.6081C144 17.9024 143.519 18.9082 142.557 19.6253C141.595 20.3425 140.301 20.701 138.674 20.701Z"
        className={color1}
      />
      <defs>
        <clipPath id="clip0_346_1160">
          <rect width="23.6134" height="23.6134" className={color1} />
        </clipPath>
      </defs>
    </svg>
  );
}
