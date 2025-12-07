import React from "react";

export function PokeballFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M14.5 12a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0zm7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8z"></path>
    </svg>
  );
}

export function PokeballOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M183 100C183 145.84 145.84 183 100 183C54.1604 183 17 145.84 17 100C17 54.1604 54.1604 17 100 17C145.84 17 183 54.1604 183 100ZM100 167C134.296 167 162.573 141.232 166.527 108C166.839 105.377 167 102.707 167 100C167 97.2928 166.839 94.6232 166.527 92C162.573 58.7683 134.296 33 100 33C65.7041 33 37.4267 58.7683 33.4727 92C33.1606 94.6232 33 97.2928 33 100C33 102.707 33.1606 105.377 33.4727 108C37.4267 141.232 65.7041 167 100 167Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M100 129C116.016 129 129 116.016 129 100C129 83.9837 116.016 71 100 71C83.9837 71 71 83.9837 71 100C71 116.016 83.9837 129 100 129ZM113 100C113 107.18 107.18 113 100 113C92.8203 113 87 107.18 87 100C87 92.8203 92.8203 87 100 87C107.18 87 113 92.8203 113 100Z"
        fill="black"
      />
      <path d="M33.4727 92H72.1175V108H33.4727V92Z" fill="black" />
      <path d="M127.882 92H166.527V108H127.882V92Z" fill="black" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M167 100C167 102.707 166.839 105.377 166.527 108V92C166.839 94.6232 167 97.2928 167 100Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33 100C33 97.2928 33.1606 94.6232 33.4727 92V108C33.1606 105.377 33 102.707 33 100Z"
        fill="black"
      />
    </svg>
  );
}
