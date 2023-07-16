export const Journey5 = ({
  fade,
  onClick,
}: {
  fade: boolean;
  onClick: any;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-1 w-screen h-screen justify-center bg-[#575757] items-center ${
        fade && "opacity-0"
      } transition-opacity duration-[3000ms] relative`}
    >
      <div className="absolute bottom-5 text-white m-auto">แตะเพื่อไปต่อ</div>
    </div>
  );
};
