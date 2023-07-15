'use client'

import { KnowledgeBox } from '@/components/knowledge-box'
import { Layout } from '@/components/layout'
import { ShopBox } from '@/components/shop-box'
import { VideoCarousel } from '@/components/video-carousel'
import Image from 'next/image'
import { useSpringCarousel } from 'react-spring-carousel'


export default function Home() {
  return (
    <Layout>
      <VideoCarousel />
      <KnowledgeBox />
      <ShopBox />
    </Layout>
  )
}
