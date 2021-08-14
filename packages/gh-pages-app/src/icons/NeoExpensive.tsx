import { FC, SVGProps } from 'react';

export const SVGNeoExpensive: FC<SVGProps<SVGSVGElement>> = ({
  color = '#8B46A3',
  width = '300',
  height = '113'
}): JSX.Element => {
  return (
    <svg
      data-icon="neo"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 333 113"
      fill="none"
    >
      <path
        d="M94.3284 76.215L100.882 69.128C101.722 68.2194 101.722 66.7326 100.882 65.824L94.7714 59.216C93.9313 58.3074 92.5565 58.3074 91.7163 59.216L85.1631 66.3031C84.9646 66.5178 84.8423 66.8152 84.8576 67.129L84.8576 75.389C84.8576 76.0498 85.3312 76.562 85.9422 76.562L93.5799 76.562C93.8549 76.562 94.1146 76.4463 94.3284 76.215ZM79.9389 66.3031L73.3857 59.216C72.5456 58.3074 71.1708 58.3074 70.3306 59.216L64.2204 65.824C63.3803 66.7326 63.3803 68.2194 64.2204 69.128L70.7736 76.215C70.9722 76.4298 71.2472 76.562 71.5374 76.5454L79.1751 76.5454C79.7862 76.5454 80.2597 76.0333 80.2597 75.3725L80.2597 67.1125C80.2597 66.8152 80.1528 66.5343 79.9389 66.3031ZM70.7736 81.8649L64.2204 88.9519C63.3803 89.8605 63.3803 91.3473 64.2204 92.2559L70.3306 98.8639C71.1708 99.7725 72.5456 99.7725 73.3857 98.8639L79.9389 91.7769C80.1375 91.5621 80.2597 91.2647 80.2444 90.9509L80.2444 82.6909C80.2444 82.0301 79.7709 81.5179 79.1599 81.5179L71.5221 81.518C71.2472 81.518 70.9875 81.6336 70.7736 81.8649ZM93.5494 81.518L85.9116 81.5179C85.3006 81.5179 84.8271 82.0301 84.8271 82.6909L84.8271 90.9509C84.8271 91.2482 84.934 91.5621 85.1326 91.7769L91.701 98.8804C92.5412 99.789 93.916 99.789 94.7561 98.8804L100.866 92.2725C101.706 91.3639 101.706 89.8771 100.866 88.9685L94.3131 81.8814C94.1146 81.6336 93.8549 81.5179 93.5494 81.518Z"
        fill={color}
      />
      <path
        d="M58.25 90.5V97H31.15V62H57.6V68.5H39.2V76.1H55.45V82.4H39.2V90.5H58.25ZM122.325 62C125.425 62 128.109 62.5167 130.375 63.55C132.675 64.5833 134.442 66.05 135.675 67.95C136.909 69.85 137.525 72.1 137.525 74.7C137.525 77.2667 136.909 79.5167 135.675 81.45C134.442 83.35 132.675 84.8167 130.375 85.85C128.109 86.85 125.425 87.35 122.325 87.35H115.275V97H107.175V62H122.325ZM121.875 80.75C124.309 80.75 126.159 80.2333 127.425 79.2C128.692 78.1333 129.325 76.6333 129.325 74.7C129.325 72.7333 128.692 71.2333 127.425 70.2C126.159 69.1333 124.309 68.6 121.875 68.6H115.275V80.75H121.875ZM170.408 90.5V97H143.308V62H169.758V68.5H151.358V76.1H167.608V82.4H151.358V90.5H170.408ZM208.953 62V97H202.303L184.853 75.75V97H176.853V62H183.553L200.953 83.25V62H208.953ZM228.734 97.6C225.967 97.6 223.284 97.2333 220.684 96.5C218.117 95.7333 216.051 94.75 214.484 93.55L217.234 87.45C218.734 88.55 220.517 89.4333 222.584 90.1C224.651 90.7667 226.717 91.1 228.784 91.1C231.084 91.1 232.784 90.7667 233.884 90.1C234.984 89.4 235.534 88.4833 235.534 87.35C235.534 86.5167 235.201 85.8333 234.534 85.3C233.901 84.7333 233.067 84.2833 232.034 83.95C231.034 83.6167 229.667 83.25 227.934 82.85C225.267 82.2167 223.084 81.5833 221.384 80.95C219.684 80.3167 218.217 79.3 216.984 77.9C215.784 76.5 215.184 74.6333 215.184 72.3C215.184 70.2667 215.734 68.4333 216.834 66.8C217.934 65.1333 219.584 63.8167 221.784 62.85C224.017 61.8833 226.734 61.4 229.934 61.4C232.167 61.4 234.351 61.6667 236.484 62.2C238.617 62.7333 240.484 63.5 242.084 64.5L239.584 70.65C236.351 68.8167 233.117 67.9 229.884 67.9C227.617 67.9 225.934 68.2667 224.834 69C223.767 69.7333 223.234 70.7 223.234 71.9C223.234 73.1 223.851 74 225.084 74.6C226.351 75.1667 228.267 75.7333 230.834 76.3C233.501 76.9333 235.684 77.5667 237.384 78.2C239.084 78.8333 240.534 79.8333 241.734 81.2C242.967 82.5667 243.584 84.4167 243.584 86.75C243.584 88.75 243.017 90.5833 241.884 92.25C240.784 93.8833 239.117 95.1833 236.884 96.15C234.651 97.1167 231.934 97.6 228.734 97.6ZM249.119 62H257.219V97H249.119V62ZM298.98 62L283.83 97H275.83L260.73 62H269.48L280.13 87L290.93 62H298.98ZM329.002 90.5V97H301.902V62H328.352V68.5H309.952V76.1H326.202V82.4H309.952V90.5H329.002Z"
        fill="white"
      />
      <path
        d="M49.49 54.19L11.2 11.07L11.27 53H7.91V2.25H8.12L46.41 45.72L46.34 3.3H49.63V54.19H49.49ZM65.4686 3.3H96.1286V6.59H68.8986V26.33H93.3986V29.62H68.8986V49.71H97.1086V53H65.4686V3.3ZM107.026 28.22C107.026 24.72 107.679 21.4533 108.986 18.42C110.292 15.34 112.112 12.6333 114.446 10.3C116.779 7.92 119.462 6.07667 122.496 4.77C125.576 3.41666 128.866 2.74 132.366 2.74C135.866 2.74 139.156 3.41666 142.236 4.77C145.316 6.07667 148.022 7.92 150.356 10.3C152.689 12.6333 154.509 15.34 155.816 18.42C157.169 21.4533 157.846 24.72 157.846 28.22C157.846 31.72 157.169 35.01 155.816 38.09C154.509 41.1233 152.689 43.8067 150.356 46.14C148.022 48.4733 145.316 50.2933 142.236 51.6C139.156 52.9067 135.866 53.56 132.366 53.56C128.866 53.56 125.576 52.93 122.496 51.67C119.462 50.41 116.779 48.6367 114.446 46.35C112.112 44.0633 110.292 41.38 108.986 38.3C107.679 35.22 107.026 31.86 107.026 28.22ZM110.526 28.29C110.526 31.3233 111.086 34.17 112.206 36.83C113.326 39.49 114.889 41.8233 116.896 43.83C118.902 45.8367 121.212 47.4233 123.826 48.59C126.486 49.71 129.309 50.27 132.296 50.27C135.376 50.27 138.246 49.71 140.906 48.59C143.566 47.4233 145.899 45.8367 147.906 43.83C149.912 41.8233 151.476 39.49 152.596 36.83C153.762 34.17 154.346 31.3 154.346 28.22C154.346 25.1867 153.762 22.34 152.596 19.68C151.476 16.9733 149.912 14.6167 147.906 12.61C145.899 10.5567 143.566 8.94666 140.906 7.78C138.246 6.61333 135.399 6.03 132.366 6.03C129.286 6.03 126.416 6.63667 123.756 7.85C121.096 9.01667 118.762 10.6267 116.756 12.68C114.796 14.7333 113.256 17.1133 112.136 19.82C111.062 22.48 110.526 25.3033 110.526 28.29Z"
        fill="white"
      />
    </svg>
  );
};
