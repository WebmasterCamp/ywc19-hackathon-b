import { useSpringCarousel } from 'react-spring-carousel'
import Image from 'next/image'

export function OfficeSyndromeCarousel() {

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem
  } = useSpringCarousel({
    itemsPerSlide: 1,
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div className='text-center'>
            <Image className='flex m-auto' src="/sample.png" alt="Office Syndrome 1" width={300} height={200} />
            <div className='px-5'>
              <h1 className=' text-[#3e3e6b] text-xl font-bold mt-[25px]'>Lorem Ipsum is simply dumsdsdsdmy </h1>
              <p className='font-semibold text-sm mt-[5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia nemo ipsam eius, impedit ea officiis, adipisci distinctio quos numquam odio aliquam vel. Perferendis doloribus omnis eaque quis, commodi similique.</p>
              <p className='font-semibold text-sm mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='font-semibold text-sm mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

          </div>

        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div className='text-center'>
            <Image className='flex m-auto' src="/sample.png" alt="Office Syndrome 1" width={300} height={200} />
            <div className='px-5'>
              <h1 className=' text-[#3e3e6b] text-xl font-bold mt-[25px]'>Lorem Ipsum is simply dumsdsdsdmy </h1>
              <p className='font-semibold text-sm mt-[5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia nemo ipsam eius, impedit ea officiis, adipisci distinctio quos numquam odio aliquam vel. Perferendis doloribus omnis eaque quis, commodi similique.</p>
              <p className='font-semibold text-sm mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='font-semibold text-sm mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

          </div>

        )
      },
    ]
  })

  return (
    <div className='overflow-hidden mt-[30px]'>
      {carouselFragment}
      <div className="carousel-button flex justify-center items-center mt-[45px] mb-[30px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="10" viewBox="0 0 25 10" fill="none">
          <circle className="carousel-bullet" cx="5" cy="5" r="5" onClick={slideToPrevItem} />
          <circle className="carousel-bullet" cx="19.2858" cy="5" r="5" onClick={slideToNextItem} />
        </svg>
      </div>
      <div className="flex item-center justify-center py-4">
        <button className='btn-primary w-[45px] mr-[12px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path d="M10.1133 3.42812C9.42746 3.22315 8.67064 3.08913 7.83499 3.08913C4.0588 3.08913 1 6.14792 1 9.92412C1 13.7082 4.0588 16.767 7.83499 16.767C11.6112 16.767 14.67 13.7082 14.67 9.932C14.67 8.52874 14.2443 7.22008 13.519 6.13216M8.81254 1L11.0909 3.61732L8.43414 5.55666" stroke="white" stroke-width="1.18252" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button className='btn-primary w-[200px] mr-[12px]'>กดเพื่อรักษาต่อ</button>
        <button className='btn-primary w-[45px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M8.15 6.85L13.48 1.52M14 4.12V1H10.88M6.85 1H5.55C2.3 1 1 2.3 1 5.55V9.45C1 12.7 2.3 14 5.55 14H9.45C12.7 14 14 12.7 14 9.45V8.15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
