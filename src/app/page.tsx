'use client'

import { KnowledgeBox } from '@/components/knowledge-box'
import { Layout } from '@/components/layout'
import { ShopBox } from '@/components/shop-box'
import { VideoCarousel } from '@/components/video-carousel'
import { OfficeSyndromeCarousel } from '@/components/office-syndrome-carousel'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <Layout>
      <OfficeSyndromeCarousel />
      <VideoCarousel />
      <KnowledgeBox />
      <ShopBox />
      <Footer />
    </Layout>
  )
}
