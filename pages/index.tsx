import Navbar from '@/components/Navbar'
import Cal from '@/components/Calendar'
import Tabs from '@/components/Tab'
import Timetable from '@/components/Timetable'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='p-4 bg-zinc-100 h-screen'>
        <div className='flex '>
          <div className='text-2xl font-bold mb-4 ps-6'>
            予約状況
          </div>
          <div className='mx-auto'>
            <Cal />
          </div>
        </div>
        <Tabs />
        <div className='bg-white h-screen w-full p-5 rounded-lg'>
          <Timetable />
        </div>
      </div>
    </>
  )
}
