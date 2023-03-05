import { useState } from 'react'
import { tabAtom } from '@/utils/atom'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { AiOutlineHistory } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import logo from '@/public/gyms-logo.png'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const [currentTab, setCurrentTab] = useAtom(tabAtom)

  const tabs = [
    { id: 0, name: 'ホーム', href: '' },
    { id: 1, name: '予約', href: '' },
    { id: 2, name: '会員', href: '' },
    { id: 3, name: '申込み', href: '' },
    { id: 4, name: '役務', href: '' },
    { id: 5, name: 'カルテ', href: '' },
    { id: 6, name: '入出金', href: '' },
    { id: 7, name: 'タスク', href: '' },
    { id: 8, name: '対応履歴', href: '' },
    { id: 9, name: 'タグ', href: '' },
    { id: 10, name: '写真', href: '' },
    { id: 11, name: '解約', href: '' },
    { id: 12, name: '勤怠', href: '' },
    { id: 13, name: '食事', href: '' },
  ]

  function toggleTabs(tabId: number | ((prev: number) => number)) {
    setCurrentTab(tabId)
    console.log(tabId)
  }

  return (
    <>
      <div className="mx-auto">
        <div className="relative flex h-10 justify-between">
          <div className='my-2 ml-8'>
            <Image
              src={logo}
              alt="Picture of the author"
              width={90}
              height={20}
            />
          </div>
          <div className="flex flex-1 justify-center items-stretch">
            <div className="ml-6 flex">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href='#'
                  onClick={() => toggleTabs(tab.id)}
                  className={classNames(
                    tab.id === currentTab
                      ? 'border-b-2 border-indigo-600'
                      : 'border-b-2 border-transparent hover:border-slate-300',
                    'inline-flex items-center px-4 transition pt-1 text-sm font-medium text-gray-900'
                  )}
                >
                  {tab.name}
                </a>
              ))}

            </div>
          </div>
          <div className='inline-flex items-center mr-6'>
            <a
              className='inline-flex items-center space-x-1 px-4 transition pt-1 text-sm font-medium text-gray-900'
              href='#'
            >
              <AiOutlineHistory />
              <p className=''>履歴</p>
            </a>
            <a
              className='inline-flex items-center space-x-1 px-4 transition pt-1 text-sm font-medium text-gray-900'
              href='#'
            >
              <BsGear />
              <p className=''>設定</p>
            </a>
          </div>

        </div>
      </div>
    </>

  )

}

export default Navbar