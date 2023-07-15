import { useSpringCarousel } from "react-spring-carousel";

const VideoItem = () => <div className="pr-5">
  <div className="bg-[#BECFE9] w-[141px] h-[79px]"></div>
  <p className="text-sm">Lorem Ipsum is simply dummy text of the</p>
</div>

export const VideoCarousel = () => {
  const { carouselFragment } = useSpringCarousel({
    slideType: 'fluid',
    freeScroll: true,
    items: Array.from({ length: 16 }).map((_, i) => ({
      id: `item-${i}`,
      renderItem: (
        <VideoItem />
      )
    }))
  })
  return <div className="w-full overflow-hidden">{carouselFragment}</div>
}
