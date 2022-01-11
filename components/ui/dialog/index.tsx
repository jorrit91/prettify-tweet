import React, { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as styles from './styles'
import { IconButton } from '../buttons/IconButton'

type ModalProps = {
  title: string
  triggerButton?: React.ReactElement
  variant?: 'default' | 'no-padding'
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void //eslint-disable-line
  open?: boolean
}

export const Modal: FC<ModalProps> = ({
  triggerButton,
  variant = 'no-padding',
  defaultOpen,
  onOpenChange,
  open,
  children,
}) => {
  return (
    <Dialog.Root
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      open={open}
    >
      {triggerButton && (
        <Dialog.Trigger asChild>{triggerButton}</Dialog.Trigger>
      )}
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content
        className={styles.content}
        data-padding={variant === 'default' ? '' : undefined}
      >
        <div>{children}</div>
      </Dialog.Content>
      <Dialog.Close className={styles.closeButton} asChild data-close-button>
        <IconButton icon="close" />
      </Dialog.Close>
    </Dialog.Root>
  )
}
