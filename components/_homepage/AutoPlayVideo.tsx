import React, { FC, useRef, useState } from 'react'
import Image from 'next/image'
import { parse } from '@config/theme'
import { css } from '@linaria/core'

type AutoPlayVideoProps = {
  videoSrc: string
  placeholderSrc: string
}

export const AutoPlayVideo: FC<AutoPlayVideoProps> = ({
  videoSrc,
  placeholderSrc,
}) => {
  const [status, setStatus] = useState<'idle' | 'playing'>('idle')
  const innerRef = useRef<HTMLVideoElement>(null)
  return (
    <div className={parent}>
      <video
        autoPlay={status === 'playing'}
        controls={false}
        ref={innerRef}
        muted
        loop
        playsInline
        src={videoSrc}
        preload="auto"
        onLoadedData={requestPlay}
        className={video}
      />
      <div className={image} data-visible={status === 'idle' ? '' : undefined}>
        <Image
          src={placeholderSrc}
          alt=""
          data-image=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )

  function requestPlay() {
    if (innerRef.current) {
      setStatus('playing')
      innerRef.current.play()
      // Remove focus from the play button to the player
      innerRef.current.focus()
    }
  }
}

const parent = parse({
  position: 'relative',
})

const image = parse(
  {
    width: '100%',
  },
  css`
    opacity: 0;
    pointer-events: none;
    transition-property: opacity;
    transition-duration: 0.2s;

    &[data-visible] {
      opacity: 1;
    }
  `
)

const video = parse(
  {
    width: '100%',
  },
  css``
)
