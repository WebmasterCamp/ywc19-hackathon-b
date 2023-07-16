'use client'

import { Footer } from '@/components/footer'
import ImageGallery from '@/components/image-gallery'
import { RecommendPackage } from '@/components/recommend-package'
import { AllPackage } from '@/components/all-package'



export default function Summary() {
  return (
    <>
      <div className='mb-7'>
        <ImageGallery />
      </div>
      <RecommendPackage />
      <AllPackage />
      <Footer />
    </>
  )
}
