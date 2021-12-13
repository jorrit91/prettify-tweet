import { cx } from '@linaria/core'
import React, { InputHTMLAttributes } from 'react'
import * as styles from './Input.styles'

type InputStatus = 'idle' | 'error' | 'disabled'
type InputStatusProp = {
  status?: InputStatus
}

export type InputProps = InputStatusProp &
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
      ...rest
    },
    ref
  ) => {
    const id = rest.id || name
    return (
      <div className={styles.inputContainer}>
        <input
          ref={ref}
          className={cx(styles.inputStyles, className)}
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
