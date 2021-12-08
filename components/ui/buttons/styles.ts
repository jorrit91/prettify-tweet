import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'
import { rgba } from 'polished'

export const button = parse(
  {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  css`
    height: 3rem;
    overflow: hidden;
    font-size: 18px;
    line-height: 1.2;
    border: none;
    padding: 0 1.5rem;
    transition-property: all;
    transition-duration: 0.2s;
    outline: none;

    @supports not (background: paint(squircle)) {
      border-radius: 0.75rem;
      background: ${theme.colors.brightBlue};

      &:focus-visible {
        box-shadow: 0px 0px 2px 1px rgb(255 255 255 / 60%);
      }

      @media screen and (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${theme.colors.brightBlueHover};
        }
      }

      &:disabled {
        cursor: not-allowed;
        background: ${theme.colors.brightBlueHover};

        span {
          opacity: 0.5;
        }
      }
    }

    @supports (background: paint(squircle)) {
      --squircle-radius: 20px;
      --squircle-smooth: 20;
      --squircle-fill: ${theme.colors.brightBlue};
      border-radius: 0;
      background: paint(squircle);
      z-index: 1;

      &:focus-visible {
        filter: drop-shadow(0px 0px 2px white);
      }

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
        &:not(:disabled):hover {
          &:before {
            opacity: 0.2;
          }
        }
      }

      &:disabled {
        cursor: not-allowed;
        &:before {
          opacity: 0.2;
        }

        span {
          opacity: 0.5;
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

export const loading = parse({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const iconButton = css`
  width: 3rem;
  height: 3rem;

  @supports (background: paint(squircle)) {
    --squircle-fill: ${theme.colors.shade400};
  }

  @supports not (background: paint(squircle)) {
    border-radius: 0.75rem;
    background: ${theme.colors.shade400};

    @media screen and (hover: hover) and (pointer: fine) {
      &:not(:disabled):hover {
        background: ${rgba(theme.colors.shade400, 0.5)};
      }
    }
  }

  &:active {
    &[data-animate='left'] {
      [data-icon-container] {
        transform: translateX(-0.15rem);
      }
    }
    &[data-animate='down'] {
      [data-icon-container] {
        transform: scale(0.9);
      }
    }
  }
`

export const iconContainer = parse(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  css`
    transition-property: transform;
    transition-duration: 0.2s;
    z-index: 0;
  `
)
