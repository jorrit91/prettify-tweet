import { AppTheme, parseAll } from '@config/theme'
import { cx } from '@linaria/core'
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  useEffect,
  useState,
} from 'react'
import { ThemeSystemProps } from 'theme-system'
import { LoadingSvg } from '../LoadingSvg'
import * as styles from './styles'

type AsAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: 'link'
}
type AsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
}
type AsDivProps = ButtonHTMLAttributes<HTMLDivElement> & {
  as?: 'div'
}
const loadingTexts = [
  'This might take a second...',
  'Preparing the goodness...',
  'Just a sec...',
  'Result will be 🤤',
  'Parsing pixels...',
  'Smoothing corners...',
  'Parsing colors...',
  'Generating tastiness...',
]
let timer

type ButtonAs = AsAnchorProps | AsButtonProps | AsDivProps

export type ButtonProps = Pick<ThemeSystemProps<AppTheme>, 'mb'> &
  ButtonAs &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    width?: 'auto' | 'fill'
    status?: 'loading' | 'idle' | 'disabled'
  }

export const Button: FC<ButtonProps> = ({
  children,
  status,
  as,
  width = 'auto',
  className,
  mb,
  ...rest
}) => {
  const [errorText, setErrorText] = useState(null)
  let Element: any = 'button'
  if (as === 'link') {
    Element = 'a'
  }
  if (as === 'div') {
    Element = 'div'
  }

  useEffect(() => {
    resetTimer()
    if (status === 'loading') {
      timer = setInterval(() => {
        setErrorText(
          loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
        )
      }, 3500)
    }

    return () => {
      resetTimer()
    }
  }, [status])

  return (
    <Element
      {...rest}
      className={cx(styles.button, className, parseAll({ mb }))}
      data-variant="default"
      data-auto-width={width === 'auto' ? '' : undefined}
      data-status={status}
      disabled={status === 'loading' || status === 'disabled'}
      data-loading={status === 'loading' ? '' : undefined}
    >
      <span>{children}</span>
      {status === 'loading' && (
        <span data-loading-animation className={styles.loading}>
          <LoadingSvg />
          {errorText && <span>{errorText}</span>}
        </span>
      )}
    </Element>
  )

  function resetTimer() {
    clearInterval(timer)
    setErrorText(null)
  }
}
