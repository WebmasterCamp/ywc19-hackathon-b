import { useSpringCarousel } from "react-spring-carousel";

const VideoItem = () => <div className="pr-5 text-primary font-medium">
  <div className="bg-primary w-[141px] h-[79px]"></div>
  <p className="text-sm line-clamp-2">Lorem Ipsum is simply dummy text of the </p>
</div>

export const VideoCarousel = () => {
  const { carouselFragment } = useSpringCarousel({
    slideType: 'fluid',
    freeScroll: true,
    enableFreeScrollDrag: true,
    items: Array.from({ length: 16 }).map((_, i) => ({
      id: `item-${i}`,
      renderItem: (
        <VideoItem />
      )
    }))
  })
  return (<div className="py-3">
    <div className="w-full lg:!px-20 shadow-shadow-primary shadow-x-none px-6 py-5 overflow-hidden">
      <h1 className="font-bold text-xl">ท่าสำหรับยืดตัว</h1>
      <h2 className="text-sm font-medium mb-4 text-secondary">ยืดๆ ยาดๆ บิดนิดนึง</h2>
      {carouselFragment}
    </div>
  </div>)

}
