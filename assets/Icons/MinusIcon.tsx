import React from "react";

function MinusIcon() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="4"
        viewBox="0 0 16 4"
        fill="none"
      >
        <path
          d="M1.33333 0.666626C0.596954 0.666626 0 1.26358 0 1.99996C0 2.73634 0.596954 3.33329 1.33333 3.33329H14.6667C15.403 3.33329 16 2.73634 16 1.99996C16 1.26358 15.403 0.666626 14.6667 0.666626H1.33333Z"
          fill="#253031"
        />
      </svg>
    </div>
  );
}

export default React.memo(MinusIcon);
