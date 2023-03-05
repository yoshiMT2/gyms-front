
import { useAtom } from 'jotai'
import { storeTabAtom, storeTabAtoms } from '../utils/atom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => {

  const [storeTabs] = useAtom(storeTabAtoms)
  const [currentTab, setCurrentTab] = useAtom(storeTabAtom)

  const toggleTab = (idx: number) => {
    setCurrentTab(idx)
  }

  const tabs = [
    { id: 0, name: '心斎橋', href: ''},
    { id: 1, name: '梅田', href: ''},
    { id: 2, name: '第3', href: ''},
    { id: 3, name: '三宮', href: ''},
    { id: 4, name: '京橋', href: ''},
    { id: 5, name: '本町', href: ''},
    { id: 6, name: '和泉', href: ''},
    { id: 7, name: '川西', href: ''},
    { id: 8, name: '深井', href: ''},
    { id: 9, name: '大阪駅', href: ''},
    { id: 10, name: '全店舗', href: ''},
    { id: 11, name: '全スタッフ', href: ''},
    { id: 12, name: '全予約', href: ''},
  ]

  return (
    <div className=" border-gray-200 sm:pb-0">
      <div className="mt-3 sm:mt-4">
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-0 justify-center">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={classNames(
                  tab.id === currentTab
                    ? 'border-indigo-500 text-indigo-600 bg-white rounded-t-lg'
                    : 'border-transparent text-gray-400 hover:text-gray-600 transition-colors cursor-pointer',
                  'whitespace-nowrap py-2 px-2 md:px-4 lg:px-6 font-semibold text-xs ounded-t-lg lg:text-sm'
                )}
                onClick={() => toggleTab(tab.id)}
              >
                {tab.name}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Tabs