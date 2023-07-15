'use client'

import { Layout } from '@/components/layout'
import { VideoCarousel } from '@/components/video-carousel'
import Image from 'next/image'
import { useSpringCarousel } from 'react-spring-carousel'


export default function Home() {
  return (
    <Layout>
      <VideoCarousel />
    </Layout>
  )
}
