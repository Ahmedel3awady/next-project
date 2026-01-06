
import { cn } from '@/utils/cn';
import { PropsWithChildren, } from 'react';
import { useSidebar } from './useSidebar';
import SideBarLinks from './SideBarLinks';

export default function SideBar({ children }: PropsWithChildren) {
  const { classes, toggleDrawer, backDrop, mobile } = useSidebar()

  return (
    <main className='flex ' >
      <div>
        <div className={cn(`h-screen pt-5 px-5 border-e transition-all duration-300 ease-linear border-slate-200 absolute bg-white z-[100] md:sticky overflow-y-auto overflow-x-hidden `, classes)}>
          <SideBarLinks />
        </div>
        <div onClick={toggleDrawer} className={cn(`bg-black/70 h-screen absolute inset-0 z-[50] transition-all duration-75 ease-linear`, backDrop && mobile ? ' opacity-100 ' : 'opacity-0 z-[-1]')}></div>
      </div>
      <div className="w-full min-h-screen">
        {children}
      </div>
    </main>
  )
}
