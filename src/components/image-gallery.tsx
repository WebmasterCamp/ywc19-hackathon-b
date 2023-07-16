import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery() {
  const [viewImage, setViewImage] = useState(0);
  const images = ["/assets/products/paolo.avif", "/assets/products/cover-2.avif", "/assets/products/cover-3.avif"]
  return (
    <div>
      <img src={images[viewImage]} className="w-full bg-[#7D9ED3] bg-opacity-3 h-[375px] object-contain" />
      <div className="flex">
        {
          images.map((image, index) =>
            <Image key={index} onClick={() => setViewImage(index)} className={clsx("w-1/3 h-[130px] bg-[#89abe3]", index === viewImage && "opacity-30")} src={image} alt="" width={130} height={130} />
          )
        }
      </div>
      <div className="flex text-primary max-w-3xl mx-auto items-center pl-[22px] mt-[30px]">
        <h1 className="text-xl font-bold">Porgee physio</h1>
        <div className="flex ml-[17px] items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path d="M8.50004 9.96321C8.79026 9.96321 9.07764 9.90605 9.34577 9.79499C9.6139 9.68392 9.85753 9.52114 10.0627 9.31592C10.268 9.1107 10.4307 8.86707 10.5418 8.59894C10.6529 8.33081 10.71 8.04343 10.71 7.75321C10.71 7.46299 10.6529 7.17561 10.5418 6.90748C10.4307 6.63935 10.268 6.39572 10.0627 6.19051C9.85753 5.98529 9.6139 5.8225 9.34577 5.71144C9.07764 5.60038 8.79026 5.54321 8.50004 5.54321C7.91391 5.54321 7.35179 5.77605 6.93733 6.19051C6.52288 6.60496 6.29004 7.16708 6.29004 7.75321C6.29004 8.33934 6.52288 8.90146 6.93733 9.31592C7.35179 9.73037 7.91391 9.96321 8.50004 9.96321Z" stroke="#414141" stroke-width="1.0625" />
            <path d="M2.56429 6.46409C3.9597 0.329923 13.0476 0.337006 14.436 6.47117C15.2505 10.0695 13.0122 13.1153 11.0501 14.9995C10.3645 15.6608 9.44911 16.0303 8.49658 16.0303C7.54404 16.0303 6.62865 15.6608 5.94304 14.9995C3.98804 13.1153 1.7497 10.0624 2.56429 6.46409Z" stroke="#3E3E6B" stroke-width="1.0625" />
          </svg>
          <h3>จตุจักร</h3>
        </div>
      </div>
      <div className="pl-[22px] pr-[22px] max-w-3xl mx-auto">
        <p>
          Lorem Ipsum is simply dummy text of the.Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the
        </p>
      </div>
    </div>
  )
}
