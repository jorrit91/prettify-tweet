import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import * as fs from 'fs'
import * as path from 'path'
import { Container } from '@components/ui/Container'
import Link from 'next/link'
type StyleguideProps = {
  pages: string[]
}

const Styleguide: NextPage<StyleguideProps> = ({ pages }) => {
  return (
    <Container mt="20">
      {pages.map((page) => (
        <Link href={`/styleguide/${page}`} key={page}>
          <a
            style={{
              color: '--text-colords',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </a>
        </Link>
      ))}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dir = path.join(process.cwd(), 'pages/styleguide')
  const pages = fs.readdirSync(dir).filter((t) => t !== 'index.tsx')
  return {
    props: {
      pages: pages.map((filename) => filename.replace('.tsx', '')),
    },
  }
}
export default Styleguide
