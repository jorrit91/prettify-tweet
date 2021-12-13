import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'
import { rem } from 'polished'

export const inputContainer = parse({
  position: 'relative',
})

export const squircleHelper = parse(
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'block',
  },
  css`
    @supports (background: paint(squircle)) {
      top: 0;
      left: 0;
      transition-property: opacity;
      transition-duration: 0.2s;
      --squircle-radius: 20px;
      --squircle-smooth: 20;
      --squircle-outline: 1px;
      --squircle-fill: ${theme.colors.shade300};
      background: paint(squircle);
      pointer-events: none;

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
        --squircle-outline: 1px;
        --squircle-fill: ${theme.colors.brightBlue};
        background: paint(squircle);
        opacity: 0;
      }

      &:after {
        content: '';
        position: absolute;
        display: block;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        opacity: 0;
        transition-property: transform, opacity;
        transition-duration: 0.2s;
        --squircle-radius: 18px;
        --squircle-smooth: 20;
        --squircle-outline: 0;
        --squircle-fill: ${theme.colors.darkBlue};
        background: paint(squircle);
        transform-origin: center center;
        transform: scale(0.9);
        opacity: 0;
        z-index: -1;
      }
    }
  `
)

export const inputStyles = parse(
  {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    bg: 'shade400',
  },
  css`
    height: 4rem;
    font-size: ${rem(18)};
    line-height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &::placeholder {
      color: white;
      text-align: center;
      font-weight: ${theme.fontWeights.bold};
    }

    @supports not (background: paint(squircle)) {
      outline: none;
      border: 1px solid ${theme.colors.shade300};
      border-radius: 0.75rem;
      transition-property: border box-shadow;
      transition-duration: 0.2s;
      box-shadow: 0 0 0 0 ${theme.colors.darkBlue};

      @media screen and (hover: hover) and (pointer: fine) {
        &:hover {
          border-color: ${theme.colors.brightBlueHover};
        }
      }

      &:active,
      &:focus-within {
        border-color: ${theme.colors.brightBlueHover};
        box-shadow: 0 0 0 3px ${theme.colors.darkBlue};
      }
    }

    @supports (background: paint(squircle)) {
      outline: none;
      border: 0;
      --squircle-radius: 20px;
      --squircle-smooth: 20;
      --squircle-fill: ${theme.colors.shade400};
      border-radius: 0;
      background: paint(squircle);
      z-index: 1;
      filter: drop-shadow(0px 1px 1 px #141721);

      @media screen and (hover: hover) and (pointer: fine) {
        &:not(:disabled):hover {
          + [data-squircle-helper]:before {
            opacity: 1;
          }
        }
      }

      &:focus {
        filter: none;
        + [data-squircle-helper]:before {
          opacity: 1;
        }

        + [data-squircle-helper]:after {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  `
)

export const label = parse({
  display: 'none',
})
