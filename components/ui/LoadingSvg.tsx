import { css, cx } from '@linaria/core'
import React, { FC } from 'react'

export const LoadingSvg: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        d="M22.6666 8.66671V3.33337M22.6666 8.66671V14M22.6666 8.66671H17.3333M22.6666 8.66671H28"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M21.3333 24.6667V20.6667M21.3333 24.6667V28.6667M21.3333 24.6667H17.3333M21.3333 24.6667H25.3333"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M8 15.3334V11.3334M8 15.3334V19.3334M8 15.3334H4M8 15.3334H12"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect
        width="2"
        height="2"
        x="10.667"
        y="6"
        fill="#fff"
        rx="1"
        className={cx(dot, firstDot)}
      />
      <rect
        width="2"
        height="2"
        x="9.333"
        y="23.333"
        fill="#fff"
        rx="1"
        className={cx(dot, secondDot)}
      />
      <rect
        width="2.667"
        className={cx(dot, thirdDot)}
        height="2.667"
        x="15.333"
        y="16"
        fill="#fff"
        rx="1.333"
      />
    </svg>
  )
}

const firstDot = css`
  animation-duration: 750ms;
`
const secondDot = css`
  animation-duration: 1000ms;
`
const thirdDot = css`
  animation-duration: 1250ms;
`

const dot = css`
  transform-origin: center;
  animation-name: animateDot;
  animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
  animation-iteration-count: infinite;

  @keyframes animateDot {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`
