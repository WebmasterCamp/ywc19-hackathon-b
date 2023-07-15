'use client'

import { KnowledgeBox } from '@/components/knowledge-box'
import { Layout } from '@/components/layout'
import { ShopBox } from '@/components/shop-box'
import { VideoCarousel } from '@/components/video-carousel'
import { OfficeSyndromeCarousel } from '@/components/office-syndrome-carousel'
import { Footer } from '@/components/footer'
import ImageGallery from '@/components/image-gallery'
import TherapistImageCarousel from '@/components/therapist-image-carousel'
import { RecommendPackage } from '@/components/recommend-package'
import { AllPackage } from '@/components/all-package'


export default function Home() {
  return (
    <Layout>
      <OfficeSyndromeCarousel />
      <VideoCarousel />
      <KnowledgeBox />
      <ShopBox />
      <ImageGallery />
      <TherapistImageCarousel />
      <Footer />
      <RecommendPackage />
      <AllPackage />
    </Layout>
  )
}
