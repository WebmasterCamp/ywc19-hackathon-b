export const RecommendPackage = () => {

  return (<div className="py-7 ">
    <h1 className="font-bold text-xl px-5">แพ็คเกจทั้งหมด</h1>
    <div className="flex mt-4 justify-between shadow-shadow-primary items-center p-5">
      <div>
        <p className="text-lg font-bold max-w-[50%]">
          โปรแกรมกายภาพบำบัด
          รักษาอาการแก้ปวดหลัง
        </p>
        <div className="flex items-center py-4 gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4V6.5M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.5 0.999939H7.5" stroke="black" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className="text-xs">60 นาที /ครั้ง</p>
        </div>
      </div>
      <button className="bg-babyblue h-fit px-6 py-2 text-sm font-bold rounded-lg">จอง</button>
    </div>

  </div>)
}
