import { Box } from '@components/Box'
import { Container } from '@components/ui/Container'
import { IconMoon } from '@components/ui/icons/IconMoon'
import { IconSun } from '@components/ui/icons/IconSun'
import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import { Tabs } from '@components/ui/tabs'
import { Text } from '@components/ui/typograhpy/Text'
import { NextPage } from 'next'
import React, { useState } from 'react'

type StyleguideTabsPageProps = { children?: never }
type FirstValue = 'layout' | 'size' | 'colors'
type SecondValue = 'dark' | 'light'

const StyleguideTabsPage: NextPage<StyleguideTabsPageProps> = () => {
  const [firstValue, setFirstValue] = useState<FirstValue>('layout')
  // const [secondValue, setSecondValue] = useState<SecondValue>('dark')
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
