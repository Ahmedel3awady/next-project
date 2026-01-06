
import { useEffect, useRef, useState } from "react"
import { ILanguage, TLang } from "./types"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

export const useLangSwitcher = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const switcher_ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const t = useTranslations()
  const locale = useLocale()
  const languages: ILanguage[] = [
    { value: 'ar', icon: 'ar_flag.svg' },
    { value: 'en', icon: 'en_flag.svg' },
  ]

  const onToggle = () => {
    setToggle(!toggle)
  }
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isClickInside = switcher_ref.current?.contains(e.target as Node);
      if (!isClickInside) {
        setToggle(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [switcher_ref]);
  const onSwitchLang = (locale: TLang) => {
    // window.location.reload()
    router.replace(`/${locale}`)
  }
  return {
    locale,
    t,
    onToggle,
    toggle,
    languages,
    switcher_ref,
    onSwitchLang,
  }

}