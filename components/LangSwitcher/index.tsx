import Image from "../Core/Image"
import { cn } from "@/utils/cn"
import { Each } from "../Core/Each"
import { useLangSwitcher } from "./useLangSwitcher"
import Button from "../Button"

export default function LangSwitcher() {
  const { locale, languages, t, onToggle, toggle, switcher_ref, onSwitchLang } = useLangSwitcher()

  return (
    // <div className="min-w-[120px] flex items-center gap-2 cursor-pointer relative" onClick={onToggle} ref={switcher_ref}>
    //   <Image src={`/icons/${locale}_flag.svg`} width={20} height={20} />
    //   <span>{t(`languages.${locale}`)}</span>
    //   <Image className={cn('transition-all duration-300', toggle && 'rotate-180')} src="/icons/arrow_down.svg" width={20} height={20} />
    //   <ul className={
    //     cn('w-full shadow-card transition-all h-fit duration-300 flex gap-3 p-3  justify-center flex-col rounded-md z-50 bg-white absolute inset-0 top-[30px]', toggle ? 'scale-y-100' : 'scale-y-0')}>
    //     <Each of={languages} render={(item) => (
    //       <li className="flex items-center gap-2 " onClick={() => onSwitchLang(item.value)}>
    //         <Image src={`/icons/${item.icon}`} width={20} height={20} />
    //         <span className={cn(item.value === locale && 'text-primary')}>{t(`languages.${item.value}`)}</span>
    //       </li>
    //     )} />
    //   </ul>
    // </div>
    <Button
      variant="outline"
      size="sm"
      className="flex items-center !gap-1 border !border-[#D1D5DC] !rounded-xl !h-[45px] !px-3 !py-2"
      onClick={() => onSwitchLang(locale === 'ar' ? 'en' : 'ar')}
    >
      <Image src={`/images/icons/lang.svg`} width={15} height={15} className="w-[15px] h-[15px]" />
      <span className={cn(`text-dark text-xs font-semibold uppercase`)}>
        {locale === 'ar' ? t("languages.en") : t("languages.ar")}
      </span>
    </Button>
     
  )
}
