import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'

export const button = parse(
  {
    width: '100%',
    position: 'relative',
    fontWeight: 'bold',
    color: 'white',
  },
  css`
    overflow: hidden;
    font-size: 18px;
    line-height: 1.2;
    border: none;
    padding: 1rem 1.5rem;
    transition-property: all;
    transition-duration: 0.2s;

    @supports not (background: paint(squircle)) {
      border-radius: 0.75rem;
      background: ${theme.colors.brightBlue};

      @media screen and (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${theme.colors.brightBlueHover};
        }
      }
    }

    @supports (background: paint(squircle)) {
      --squircle-radius: 20px;
      --squircle-smooth: 20;
      --squircle-fill: #3061f6;
      border-radius: 0;
      background: paint(squircle);
      z-index: 1;

      &:before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition-property: opacity;
        transition-duration: 0.2s;
        --squircle-radius: 20px;
        --squircle-smooth: 20;
        --squircle-fill: black;
        background: paint(squircle);
        opacity: 0;
      }

      @media screen and (hover: hover) and (pointer: fine) {
        &:hover {
          &:before {
            opacity: 0.15;
          }
        }
      }
    }

    &[data-auto-width] {
      width: auto;
    }

    [data-content] {
      z-index: 1;
    }

    &[data-loading] {
      span {
        opacity: 0;
      }
      [data-loading-animation] {
        opacity: 1;
      }
    }

    & > [data-loading-animation] {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  `
)
