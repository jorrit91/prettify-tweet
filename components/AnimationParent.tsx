import { m } from 'framer-motion'
import React, { FC } from 'react'

export const AnimationParent: FC = ({ children }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -3 }}
      transition={{ duration: 0.1 }}
      style={{ minHeight: '2rem' }}
    >
      {children}
    </m.div>
  )
}
