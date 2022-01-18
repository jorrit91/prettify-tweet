import { parse } from '@config/theme'
import { css } from '@linaria/core'

export const closeButton = parse(
  {
    position: 'fixed',
  },
  css`
    bottom: 1.25rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 11;
    opacity: 0;
    pointer-events: none;
    transition-property: opacity transform;
    transition-duration: 0.2s;
    transform: translateY(0.5rem);
  `
)

export const overlay = parse(
  { position: 'fixed', height: '100%', width: '100%' },
  css`
    top: 0;
    left: 0;
    background: var(--modal-overlay);
    opacity: 0.95;
    position: fixed;
    z-index: 10;

    &[data-state='open'] {
      animation-name: fadeIn;
      animation-fill-mode: forwards;
      animation-duration: 0.1s;
    }

    &[data-state='closed'] {
      animation-fill-mode: forwards;
      animation-duration: 0.1s;
      animation-name: fadeOut;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `
)

export const content = parse(
  {
    position: 'fixed',
  },
  css`
    overflow: hidden;
    width: calc(100% - 2.5rem);
    max-width: 30rem;
    top: 50%;
    left: 50%;
    z-index: 11;
    transform: translate(-50%, -50%);
    border: 1px solid var(--modal-border);
    background: var(--modal-background);
    border-radius: 0.75rem;
    box-shadow: var(--modal-shadow);

    &[data-state='open'] {
      animation-name: fadeContentIn;
      animation-fill-mode: forwards;
      animation-duration: 0.25s;

      + [data-close-button] {
        opacity: 1;
        pointer-events: all;
        transform: translateY(0);
      }
    }

    &[data-state='closed'] {
      animation-fill-mode: forwards;
      animation-duration: 0.25s;
      animation-name: fadeContentOut;
    }

    @keyframes fadeContentIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes fadeContentOut {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    &[data-padding] {
      padding: 1rem;
    }
  `
)
