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
      --squircle-fill: var(--input-border-color);
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
        top: -3px;
        left: -3px;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        opacity: 0;
        transition-property: transform, opacity;
        transition-duration: 0.2s;
        --squircle-radius: 22px;
        --squircle-smooth: 20;
        --squircle-outline: 0;
        --squircle-fill: var(--input-focus-border-color);
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
  },
  css`
    color: var(--input-color);
    background-color: var(--input-background);
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
      color: var(--input-color);
      text-align: center;
      font-weight: ${theme.fontWeights.bold};
    }

    &[data-filled] {
      padding-right: 3.5rem;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 4.5rem;
    }

    @supports not (background: paint(squircle)) {
      outline: none;
      border: 1px solid var(--input-border-color);
      border-radius: 0.75rem;
      transition-property: border box-shadow;
      transition-duration: 0.2s;
      box-shadow: 0 0 0 0 var(--input-shadow-color);

      @media screen and (hover: hover) and (pointer: fine) {
        &:hover {
          border-color: ${theme.colors.brightBlueHover};
        }
      }

      &:active,
      &:focus-within {
        border-color: ${theme.colors.brightBlueHover};
        box-shadow: 0 0 0 3px var(--input-focus-border-color);

        &[data-status='error'] {
          box-shadow: 0 0 0 3px var(--input-error-shadow-color);;
        }
      }

      &[data-status='error'] {
        border-color: var(--input-error-border-color);
      }
    }

    @supports (background: paint(squircle)) {
      outline: none;
      border: 0;
      --squircle-radius: 20px;
      --squircle-smooth: 20;
      --squircle-fill: var(--input-background);
      border-radius: 0;
      background: paint(squircle);
      z-index: 1;
      filter: drop-shadow(0px 1px 1px var(--input-shadow-color));

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

      &[data-status='error'] {
        + [data-squircle-helper]:after {
          --squircle-fill: var(--input-error-shadow-color);
        }
        + [data-squircle-helper]:before {
          --squircle-fill: var(--input-error-border-color);
          opacity: 1;
      }
    }
  `
)

export const label = parse({
  display: 'none',
})

export const removeValue = parse(
  {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  css`
    background-color: var(--input-remove-value-background);
    color: var(--input-remove-value-color);
    border-radius: 1rem;
    height: 1.5rem;
    width: 1.5rem;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.2s;
    pointer-events: none;

    svg {
      height: 0.75rem;
      width: 0.75rem;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      height: 2rem;
      width: 2rem;

      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
    }

    &[data-visible] {
      opacity: 1;
      pointer-events: all;
    }
  `
)
