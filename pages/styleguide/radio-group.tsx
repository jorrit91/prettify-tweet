import { Box } from '@components/Box'
import { Container } from '@components/ui/Container'
import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import { Text } from '@components/ui/typograhpy/Text'
import { NextPage } from 'next'
import React, { useState } from 'react'

type StyleguideRadioGroupPageProps = { children?: never }
type Value = 'auto' | 'centered'

const StyleguideRadioGroupPage: NextPage<
  StyleguideRadioGroupPageProps
> = () => {
  const [value, setValue] = useState<Value>('auto')
  return (
    <Container mt="32">
      <Box mb="32" style={{ width: 'auto' }}>
        <RadioGroup
          value={value}
          onValueChange={(val) => setValue(val as Value)}
          name="Select layout"
        >
          <RadioGroupItem value="auto" isActive={value === 'auto'}>
            <Text variant="regular">Auto layout</Text>
          </RadioGroupItem>
          <RadioGroupItem value="centered" isActive={value === 'centered'}>
            <Text variant="regular">Centered</Text>
          </RadioGroupItem>
        </RadioGroup>
      </Box>
    </Container>
  )
}

export default StyleguideRadioGroupPage
