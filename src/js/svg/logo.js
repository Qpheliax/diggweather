import React from "react";

const Logo = () => {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 85">
      <defs>
        <linearGradient id="b">
          <stop offset="0" stopColor="#15719f" />
          <stop offset="1" stopColor="#15719f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="a">
          <stop offset="0" stopColor="#ff7d20" />
          <stop offset="1" stopColor="#ff7d20" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientTransform="matrix(1.329 0 0 1.26772 -26.149191 30.07115)"
          gradientUnits="userSpaceOnUse"
          y2="88.873642"
          x2="105.57565"
          y1="88.873642"
          x1="41.575653"
          id="d"
          xlinkHref="#a"
        />
        <linearGradient
          gradientTransform="matrix(1.329 0 0 1.26772 -26.149199 30.071148)"
          gradientUnits="userSpaceOnUse"
          y2="84.893501"
          x2="152.08061"
          y1="84.893501"
          x1="67.260521"
          id="c"
          xlinkHref="#b"
        />
      </defs>
      <g transform="translate(-17.461437 -99.573)">
        <path
          d="M149.66724 111.41657c-14.28275-4.26431-23.82571-3.65542-33.40514 1.67709-5.87761-11.30008-14.77638-4.94132-29.888787 1.67708-12.795802.74717-28.699738.51239-17.581646 23.47926-6.036824 12.15926-6.359573 17.2288 8.790817 18.44798 29.643926 22.20056 22.440796 6.1636 45.712286 6.70836 12.99021 8.01985 33.91734-1.52605 42.19594-11.73962 17.97589-21.58059 6.47552-39.00578-15.82347-40.25015z"
          fill="#1c98d6"
          fillOpacity=".99528294"
          stroke="url(#c)"
          strokeWidth="3.19957423"
        />
        <ellipse
          cx="71.633301"
          cy="142.73811"
          rx="42.195942"
          ry="38.573048"
          fill="#ffb74d"
          stroke="url(#d)"
          strokeWidth="4.4132061"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Logo;
