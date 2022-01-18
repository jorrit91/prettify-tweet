import { Modal } from '@components/ui/dialog'
import { Link } from '@components/ui/link'
import { Text } from '@components/ui/typograhpy/Text'
import { AnimatePresence } from 'framer-motion'
import { HomepageStatus } from 'pages'
import React, { FC } from 'react'
import { AutoPlayVideo } from '../AutoPlayVideo'
import { AnimationParent } from './AnimationParent'

type HomepageInfoProps = {
  status: HomepageStatus
}

export const HomepageInfo: FC<HomepageInfoProps> = ({ status }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {status === 'valid' ? (
        <AnimationParent key="valid">
          <Text variant="small" color="brightBlue">
            URL looks good, hit ENTER to prettify!
          </Text>
        </AnimationParent>
      ) : (
        <AnimationParent key="idle">
          <Modal
            title="Copy URL"
            triggerButton={
              <Link size="small" as="button">
                💡 Where to find your tweets’ URL?
              </Link>
            }
          >
            <AutoPlayVideo
              videoSrc="/find-tweet-url.mp4"
              placeholderSrc="/find-tweet-url-placeholder.jpg"
            />
          </Modal>
        </AnimationParent>
      )}
    </AnimatePresence>
  )
}
