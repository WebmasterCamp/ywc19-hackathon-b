import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link'

const SortOptions = () => {
  return (<Menu >
    <Menu.Button className="rounded-lg bg-gray-300 p-1 flex items-center gap-1">
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.88062 4.12606L3.90149 1.92146M3.90149 1.92146L1.92236 4.12606M3.90149 1.92146V12.5889M7.52989 10.3843L9.50902 12.5889M9.50902 12.5889L11.4881 10.3843M9.50902 12.5889V1.92146" stroke="black" stroke-width="0.88895" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p className='font-bold text-sm'>เรียงตาม</p>
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5825 6.00017L8.70562 10.3187C8.24777 10.8287 7.49856 10.8287 7.0407 10.3187L3.16382 6.00017" stroke="black" stroke-width="0.993533" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </Menu.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >

                ราคา
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >

                ระยะเวลา
              </button>
            )}
          </Menu.Item>

        </div>
      </Menu.Items>
    </Transition>
  </Menu>)
}
export const AllPackage = () => {
  return (<div className="py-7 ">
    <div className="flex justify-between px-5">
      <h1 className="font-bold text-xl">แพ็คเกจแนะนำ</h1>
      <SortOptions />
    </div>
    <div className="flex mt-4 justify-between shadow-shadow-primary items-center p-5">
      <div>
        <p className="text-lg font-bold max-w-[80%]">
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
      <Link href="/summary/therapist/1234/buy">
        <button className="bg-babyblue h-fit px-6 py-2 text-sm font-bold rounded-lg">จอง</button>
      </Link>
    </div>

  </div>)
}
