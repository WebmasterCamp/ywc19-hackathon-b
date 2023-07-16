export const Journey4 = ({
  fade,
  onClick,
  name,
}: {
  fade: boolean;
  onClick: any;
  name: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-1 w-screen h-screen justify-center items-center ${
        fade && "opacity-0"
      } transition-opacity duration-[3000ms] relative`}
    >
      <div className="absolute m-auto">
        วันนี้ก็เป็นอีกวันนึงที่ {name}
        ปวดเมื่อยตัวอีกแล้ว
      </div>
      <div className="absolute bottom-5 m-auto">แตะเพื่อไปต่อ</div>
      <svg
        width="397"
        height="844"
        viewBox="0 0 397 844"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_123_1205)">
          <rect width="397" height="844" fill="white" />
          <rect
            x="-15.28"
            y="-16.2856"
            width="420"
            height="860"
            fill="url(#paint0_radial_123_1205)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_123_1205"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(195 394.5) rotate(90) scale(516 252)"
          >
            <stop offset="0.3" stop-color="#2B2B2B" stop-opacity="0" />
            <stop offset="0.76875" stop-color="#2B2B2B" stop-opacity="0.11" />
            <stop offset="1" stop-opacity="0.35" />
          </radialGradient>
          <clipPath id="clip0_123_1205">
            <rect width="397" height="844" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
