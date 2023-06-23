import React from "react";

function FavouriteIcon() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5.40616L10.6357 4.77181L11.5666 3.84287C13.2719 2.14129 16.0374 2.14129 17.7427 3.84287L17.8219 3.92193C19.5002 5.59666 19.5293 8.30201 17.8875 10.0123L10 18.2289L2.11248 10.0123C0.470683 8.30201 0.499791 5.59666 2.17813 3.92192L2.25735 3.84287C3.96258 2.14129 6.72812 2.14129 8.43336 3.84287L9.36429 4.77181L10 5.40616ZM9.9383 18.2931C9.93839 18.2931 9.93847 18.293 9.93855 18.2929L9.9383 18.2931Z"
          stroke="#253031"
          stroke-width="1.8"
        />
      </svg>
    </div>
  );
}

export default React.memo(FavouriteIcon);
