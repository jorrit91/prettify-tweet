import { AppTheme, parseAll } from '@config/theme'
import { cx } from '@linaria/core'
import React, { InputHTMLAttributes } from 'react'
import { ThemeSystemProps } from 'theme-system'
import * as styles from './Input.styles'

type InputStatus = 'idle' | 'error' | 'disabled'
type InputStatusProp = {
  status?: InputStatus
}

export type InputProps = Pick<ThemeSystemProps<AppTheme>, 'mb'> &
  InputStatusProp &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string
  }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      onFocus,
      onBlur,
      status = 'idle',
      className,
      label,
      value,
      name,
      mb = '8',
      ...rest
    },
    ref
  ) => {
    const id = rest.id || name
    return (
      <div className={cx(styles.inputContainer, className, parseAll({ mb }))}>
        <input
          ref={ref}
          className={styles.inputStyles}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          data-status={status}
          name={name}
          value={value}
          id={id}
          disabled={status === 'disabled'}
          {...rest}
        />
        <span className={styles.squircleHelper} data-squircle-helper />
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      </div>
    )

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      onChange && onChange(e)
    }
    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
      onFocus && onFocus(e)
    }
    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
      onBlur && onBlur(e)
    }
  }
)

Input.displayName = 'Input'
