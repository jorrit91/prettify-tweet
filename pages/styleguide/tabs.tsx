import { Box } from '@components/Box'
import { Container } from '@components/ui/Container'
import { Tabs } from '@components/ui/tabs'
import { NextPage } from 'next'
import React, { useState } from 'react'

type StyleguideTabsPageProps = { children?: never }
type FirstValue = 'layout' | 'size' | 'colors'

const StyleguideTabsPage: NextPage<StyleguideTabsPageProps> = () => {
  const [firstValue, setFirstValue] = useState<FirstValue>('layout')
  return (
    <Container mt="32">
      <Box mb="32" style={{ width: 'auto' }}>
        <Tabs
          value={firstValue}
          onValueChange={(val) => setFirstValue(val as FirstValue)}
          name="Choose layout"
          items={[
            {
              title: 'Layout',
              value: 'layout',
            },
            {
              title: 'Size',
              value: 'size',
            },
            {
              title: 'Colors',
              value: 'colors',
            },
          ]}
        />
      </Box>
    </Container>
  )
}

export default StyleguideTabsPage
