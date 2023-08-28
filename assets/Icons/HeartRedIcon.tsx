import React from 'react';

function HeartRedIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <path
        d='M9.06907 3.20586L10 4.13479L10.9309 3.20586C12.9875 1.15371 16.3218 1.15371 18.3784 3.20586L18.4576 3.28491C20.4829 5.30592 20.5181 8.57163 18.5368 10.6356L10.5876 18.9165C10.2672 19.2502 9.73277 19.2502 9.41243 18.9165L1.46322 10.6356C-0.518123 8.57163 -0.482937 5.30592 1.54242 3.28491L1.62163 3.20586C3.67819 1.15371 7.01252 1.15371 9.06907 3.20586Z'
        fill='url(#paint0_linear_1465_1614)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1465_1614'
          x1='20'
          y1='1.66675'
          x2='0'
          y2='1.66675'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#F02D3C' />
          <stop offset='1' stop-color='#F6622C' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default React.memo(HeartRedIcon);
