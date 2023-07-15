import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex custom-gradient-primary min-h-screen w-screen mx-auto max-w-[calc(9/18.5*100vh)]">
      <div className='m-auto text-5xl text-center font-bold'>Hello Bright Planet</div>
    </div>
  )
}
