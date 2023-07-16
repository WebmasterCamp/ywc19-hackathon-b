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
import { ProductCarousel } from '@/components/product-carousel'
import { ProgramCarousel } from '@/components/program-carousel'


export default function Summary() {
  return (
    <>
      <div className='mb-7'>
        <TherapistImageCarousel />

      </div>
      <ShopBox />
      <ProgramCarousel />
      <Footer />
    </>
  )
}
