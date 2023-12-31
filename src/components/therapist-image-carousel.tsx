import { Carousel } from 'antd';
import { Button } from 'antd';
const contentStyle: React.CSSProperties = {
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const TherapistImageCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <button className='w-full flex justify-center py-3 rounded-none mx-auto border-0 bg-[#3E3E6B]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4.07992 15.05L10.5999 8.52999C11.3699 7.75999 12.6299 7.75999 13.3999 8.52999L19.9199 15.05" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div className="flex items-center justify-center pl-[22px] mt-[30px]">
        <h1 className="font-[#3E3E6B] text-[20px] font-bold">นักกายภาพบำบัด ทำอะไร?</h1>
      </div>
      <div className="pl-[22px] pr-[22px] max-w-xl mx-auto">
        <p className='text-center'>
          นักกายภาพบำบัด มีหน้าที่บำบัดรักษาผู้อื่นตามคำสั่งแพทย์<br />
          โดยใช้เครื่องมือทางฟิสิกส์ การบริหารร่างกายเฉพาะท่า เช่น การดึง การนวด และเทคนิคอื่น ๆ โดยนักกายภาพบำบัด<br />
          มีความชำนาญในการให้บริการทั้งในผู้ป่วยระบบประสาท<br />
          และกระดูกกล้ามเนื้อ โดยการตรวจประเมินผู้ป่วยแต่ละราย เพื่อวิเคราะห์ปัญหาของผู้ป่วย โดยใช้หลักการของ<br />
          การเคลื่อนไหว กายวิภาคศาสตร์ สรีรวิทยา และทฤษฎีต่าง ๆ ที่ผสมผสาน เพื่อใช้ในการรักษาผู้ป่วย<br />
        </p>
      </div>
    </div>
  );
};

export default TherapistImageCarousel;
