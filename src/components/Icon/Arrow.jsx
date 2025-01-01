import React from "react";

const Arrow = ({ variant }) => {
  return (
    <svg
    style={{rotate: variant === 'down' ? "180deg": "0deg"}}
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2209_1695)">
        <path
          d="M0.399414 1.2L3.99941 4.8L7.59941 1.2"
          stroke="black"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2209_1695">
          <rect
            width="8"
            height="4.8"
            fill="white"
            transform="translate(0 0.599991)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrow;
