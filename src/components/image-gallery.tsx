
import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react'

export default function ImageGallery() {

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contentStyle: React.CSSProperties = {
    height: '450px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%',
    objectFit: 'cover'
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  }

  return (
    <div>
      <Carousel afterChange={onChange} slidesToShow={screenWidth >= 768 ? 2 : 1}>
        <div className="">
          <img src='/assets/products/paolo.avif' alt='palo' style={contentStyle} />
        </div>
        <div className="">
          <img src='/assets/products/cover-2.avif' alt='palo' style={contentStyle} />
        </div>
        <div className="">
          <img src='/assets/products/cover-3.avif' alt='palo' style={contentStyle} />
        </div>
      </Carousel>
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
          ทีมแพทย์เวชศาสตร์ฟื้นฟูและนักกายภาพบำบัด เฉพาะทาง
          ด้านโรคข้อ กระดูก และกล้ามเนื้อ ให้บริการครบวงจร ทั้งการตรวจประเมิณ วินิจฉัย และให้การรักษาโดยไม่ใช้การผ่าตัด ซึ่งใช้เทคนิคและเครื่องมือที่ทันสมัย รักษาอย่างตรงจุด แม่นยำ อาการปวดหายอย่างถาวร เน้นกระบวนการซ่อมแซมตามธรรมชาติ ทำให้มั่นใจว่าปลอดภัยและได้ผลการรักษาที่สมบูรณ์
        </p>
      </div>
    </div>
  )
}
