"use client"

import { useLocale } from "next-intl"

export const useRtl = () => {
  const locale = useLocale()
  return locale == 'ar' && 'rtl'
}