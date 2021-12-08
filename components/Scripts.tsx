import Script from 'next/script'
import React, { FC } from 'react'

export const Scripts: FC = () => {
  return (
    <Script
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
      if ("paintWorklet" in CSS) {
        CSS.paintWorklet.addModule(
          "https://www.unpkg.com/css-houdini-squircle/squircle.min.js"
        );
      }
      `,
      }}
    />
  )
}
