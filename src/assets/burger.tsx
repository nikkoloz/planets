import React from "react";

interface Props {
  color: string;
  className: string;
}

const MenuIcon: React.FC<Props> = ({ color, className }) => (
  <svg
    className={className}
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill=""
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_429_11066)">
      <path
        d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ fill: color }}
      />
    </g>
    <defs>
      <clipPath id="clip0_429_11066">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.000915527)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default MenuIcon;
