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
      <div className="pl-[22px] pr-[22px]">
        <p>
          Lorem Ipsum is simply dummy text of the.Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the
        </p>
      </div>
    </div>
  );
};

export default TherapistImageCarousel;
