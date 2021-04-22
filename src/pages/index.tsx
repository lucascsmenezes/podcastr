import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement, useEffect } from 'react'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/Home'

interface HomeStaticProps {}

type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

export default function Home({}: HomeProps): ReactElement {
  return (
    <Container>
      <SEO title="Home" description={'Olá eu sou a description'} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  return {
    props: {},
    revalidate: 1000 // uma hora: 60 * 60 * 1
  }
}
