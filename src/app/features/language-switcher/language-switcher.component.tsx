'use client'

import { useLocale } from 'next-intl'
import type { ReactNode } from 'react'
import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/app/shared/ui'
import { usePathname, useRouter } from '@/pkg/locale'

import { LOCALES } from './language-switcher.constant'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

export const LanguageDropdown = ({ defaultOpen, align, trigger }: Props) => {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const [language, setLanguage] = useState(locale)

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setLanguage(newLocale)
  }

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger suppressHydrationWarning asChild data-testid='language-switcher'>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-50' align={align || 'end'}>
        <DropdownMenuRadioGroup value={language} onValueChange={handleLocaleChange}>
          {Object.entries(LOCALES).map(([locale, label]) => (
            <DropdownMenuRadioItem
              key={locale}
              value={locale}
              data-testid={`lang-${locale}`}
              className='data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden'
            >
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
