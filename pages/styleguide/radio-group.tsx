import { Box } from '@components/Box'
import { Container } from '@components/ui/Container'
import { IconMoon } from '@components/ui/icons/IconMoon'
import { IconSun } from '@components/ui/icons/IconSun'
import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import { Text } from '@components/ui/typograhpy/Text'
import { NextPage } from 'next'
import React, { useState } from 'react'

type StyleguideRadioGroupPageProps = { children?: never }
type FirstValue = 'auto' | 'centered'
type SecondValue = 'dark' | 'light'

const StyleguideRadioGroupPage: NextPage<
  StyleguideRadioGroupPageProps
> = () => {
  const [firstValue, setFirstValue] = useState<FirstValue>('auto')
  const [secondValue, setSecondValue] = useState<SecondValue>('dark')
  return (
    <Container mt="32">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '20vh',
          maxWidth: '270px',
        }}
      >
        <Box mb="32" style={{ width: 'auto' }}>
          <RadioGroup
            value={firstValue}
            onValueChange={(val) => setFirstValue(val as FirstValue)}
            name="Select layout"
          >
            <RadioGroupItem value="auto" isActive={firstValue === 'auto'}>
              <Text variant="regular">Auto layout</Text>
            </RadioGroupItem>
            <RadioGroupItem
              value="centered"
              isActive={firstValue === 'centered'}
            >
              <Text variant="regular">Centered</Text>
            </RadioGroupItem>
          </RadioGroup>
        </Box>
        <Box mb="32" style={{ width: 'auto' }}>
          <RadioGroup
            value={secondValue}
            onValueChange={(val) => setSecondValue(val as SecondValue)}
            name="Select mode"
          >
            <RadioGroupItem value="dark" isActive={secondValue === 'dark'}>
              <IconMoon />
            </RadioGroupItem>
            <RadioGroupItem value="light" isActive={secondValue === 'light'}>
              <IconSun />
            </RadioGroupItem>
          </RadioGroup>
        </Box>
      </div>
    </Container>
  )
}

export default StyleguideRadioGroupPage
