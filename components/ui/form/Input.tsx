import { AppTheme, parseAll } from '@config/theme'
import { cx } from '@linaria/core'
import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import { ThemeSystemProps } from 'theme-system'
import { IconClose } from '../icons/IconClose'
import * as styles from './Input.styles'

type InputStatus = 'idle' | 'error' | 'disabled'
type InputStatusProp = {
  status?: InputStatus
}

export type InputProps = Pick<ThemeSystemProps<AppTheme>, 'mb'> &
  InputStatusProp &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    label: string
    onChange: (value: string) => void //eslint-disable-line
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
    const [isFilled, setIsFilled] = useState(() => {
      if (typeof value === 'string') {
        return value.length > 0
      } else if (typeof value === 'number') {
        return true
      } else {
        return false
      }
    })

    useEffect(() => {
      if (typeof value === 'string' && value.length === 0) {
        setIsFilled(false)
      } else {
        setIsFilled(true)
      }
    }, [value])

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
          data-filled={isFilled ? '' : undefined}
          disabled={status === 'disabled'}
          {...rest}
        />
        <span className={styles.squircleHelper} data-squircle-helper />
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <button
          className={styles.removeValue}
          data-visible={isFilled ? '' : undefined}
          onClick={() => onChange('')}
        >
          <IconClose />
        </button>
      </div>
    )

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      onChange && onChange(e.target.value)
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
