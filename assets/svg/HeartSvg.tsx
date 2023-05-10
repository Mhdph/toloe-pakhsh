import React from "react";

function HeartSvg() {
  return (
    <div>
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3643 3.59873L12 4.23308L12.6357 3.59873L13.7528 2.48401C15.8694 0.371997 19.3018 0.371997 21.4183 2.48401L22.0488 1.85219L21.4183 2.48401L21.5134 2.57887C23.5968 4.65781 23.6329 8.0163 21.5949 10.1394L12.0558 20.0764C12.0256 20.1079 11.9744 20.1079 11.9442 20.0764L2.40512 10.1394C0.367059 8.0163 0.403204 4.65781 2.48661 2.57887L2.58167 2.48401C4.69822 0.371997 8.13062 0.371997 10.2472 2.48401L11.3643 3.59873Z"
          stroke="url(#paint0_linear_396_13085)"
          strokeWidth="1.8"
        />
        <defs>
          <linearGradient
            id="paint0_linear_396_13085"
            x1="24"
            y1="-6.25849e-07"
            x2="0"
            y2="1.91587e-07"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6602D" />
            <stop offset="1" stopColor="#FA8821" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default React.memo(HeartSvg);
