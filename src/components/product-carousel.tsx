import { useSpringCarousel } from "react-spring-carousel";

const VideoItem = ({ v }: any) => <div className="pr-5 text-primary font-medium">
  <div className="bg-primary w-[141px] h-[79px]"></div>
  <p className="text-sm line-clamp-2">{v}</p>
</div>

export const ProductCarousel = () => {
  const { carouselFragment } = useSpringCarousel({
    slideType: 'fluid',
    freeScroll: true,
    enableFreeScrollDrag: true,
    items: ["เก้าอี้นวดเพื่อสุขภาพ", "ที่วางเท้าเพื่อสุขภาพ", "เก้าอี้นวดเพื่อสุขภาพ"].map((v, i) => ({
      id: `item-${i}`,
      renderItem: (
        <VideoItem v={v} />
      )
    }))
  })
  return (<div className="py-3">
    <div className="w-full lg:!px-20 shadow-shadow-primary shadow-x-none px-6 py-5 overflow-hidden">
      <h1 className="font-bold text-xl">สินค้าแนะนำ</h1>
      <h2 className="text-sm font-medium mb-4 text-secondary">ซื้อเถอะขอแล้ว ขอเงินเข้าบ.หน่อย</h2>
      {carouselFragment}
    </div>
  </div>)

}
