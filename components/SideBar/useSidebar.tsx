import { useResize } from "@/hooks/useResize"
import { observer } from "@/utils/observer"
import { useEffect, useState } from "react"

export const useSidebar = () => {
  const [drawer, setDrawer] = useState<boolean>(false)
  const [backDrop, setBackDrop] = useState<boolean>(false)
  const [classes, setClasses] = useState<string>('w-[300px]')
  const { mobile } = useResize()
  const toggleDrawer = () => {
    setDrawer(!drawer)
    setBackDrop(!backDrop)
  }

  observer.subscribe('toggleDrawer', toggleDrawer)

  useEffect(() => {
    if (drawer) {
      setClasses('w-[0px] px-0')
    } else {
      setClasses('w-[300px]')

    }
  }, [drawer])
  useEffect(() => {
    if (mobile) {
      setBackDrop(true)
      setDrawer(false)

    } else {
      setBackDrop(false)
      if (backDrop) {
        setDrawer(true)
      }
    }
  }, [mobile])

  return {
    classes,
    mobile,
    backDrop,
    toggleDrawer
  }
}