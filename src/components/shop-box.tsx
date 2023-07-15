import { useState } from "react"
import clsx from "clsx"
export const ShopBox = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (<div className="rounded-2xl max-w-[320px] mx-auto shadow-shadow-primary">
    <div>
      <div className="rounded-t-2xl bg-gray-100 z-20 h-[149px] ">
      </div>
    </div>
    <div>
      <div className="rounded-b-2xl z-10">
        <div className="p-5">        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Porgee physio</h1>
          {
            isExpanded ?
              <svg className="cursor-pointer" onClick={() => setIsExpanded(false)} width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00473 9.79938L7.52034 1.72031C8.28982 0.766188 9.54982 0.765503 10.3203 1.71879L16.8447 9.79077" stroke="#3E3E6B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              :
              <svg className="cursor-pointer" onClick={() => setIsExpanded(true)} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9201 1L10.4001 7.66914C9.63008 8.45675 8.37008 8.45675 7.60008 7.66914L1.08008 1" stroke="#3E3E6B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

          }
        </div>
          <div className="flex items-center gap-2">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.50004 9.51288C8.79026 9.51288 9.07764 9.45572 9.34577 9.34465C9.6139 9.23359 9.85753 9.0708 10.0627 8.86559C10.268 8.66037 10.4307 8.41674 10.5418 8.14861C10.6529 7.88048 10.71 7.5931 10.71 7.30288C10.71 7.01266 10.6529 6.72528 10.5418 6.45715C10.4307 6.18902 10.268 5.94539 10.0627 5.74017C9.85753 5.53496 9.6139 5.37217 9.34577 5.26111C9.07764 5.15004 8.79026 5.09288 8.50004 5.09288C7.91391 5.09288 7.35179 5.32572 6.93733 5.74017C6.52288 6.15463 6.29004 6.71675 6.29004 7.30288C6.29004 7.88901 6.52288 8.45113 6.93733 8.86559C7.35179 9.28004 7.91391 9.51288 8.50004 9.51288Z" stroke="#3E3E6B" stroke-width="1.0625" />
              <path d="M2.56429 6.01376C3.9597 -0.12041 13.0476 -0.113326 14.436 6.02084C15.2505 9.61917 13.0122 12.665 11.0501 14.5492C10.3645 15.2104 9.44911 15.5799 8.49658 15.5799C7.54404 15.5799 6.62865 15.2104 5.94304 14.5492C3.98804 12.665 1.7497 9.61209 2.56429 6.01376Z" stroke="#3E3E6B" stroke-width="1.0625" />
            </svg> จตุจักร
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#EA92BC" />
            </svg>
            5.0
          </div>
          <p className="text-sm line-clamp-3">
            Lorem Ipsum is simply dummy text of the.Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lor
          </p>

          <button onClick={() => setIsExpanded(e => !e)} className="rounded-lg w-full mt-2 bg-primary shadow-shadow-primary text-sm px-3 py-1 text-white">กดเพื่อดูรายละเอียดเพิ่มเติม</button>
        </div>


        {
          isExpanded && [1, 2, 3].map((item, index) => (
            <div className={clsx("flex justify-between items-center p-5", index % 2 == 0 && "bg-primary-mid-emp bg-opacity-50")}>
              <div>
                <p>
                  โปรแกรมกายภาพบำบัด
                  รักษาอาการแก้ปวดหลัง
                </p>
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4V6.5M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.5 0.999939H7.5" stroke="black" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className="text-xs">60 นาที /ครั้ง</p>

                </div>
              </div>
              <button className="bg-babyblue h-fit px-6 py-2 text-sm font-bold rounded-lg">จอง</button>
            </div>
          ))
        }
      </div>
    </div>

  </div>)
}
