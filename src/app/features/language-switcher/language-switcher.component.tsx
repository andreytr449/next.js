'use client'

import { useLocale } from 'next-intl'
import type { FC, ReactNode } from 'react'
import { useState } from 'react'

import { usePathname, useRouter } from '@/pkg/locale'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/pkg/theme/components/dropdown-menu'

import { LOCALES } from './language-switcher.constant'

// interface
interface IProps {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

// component
const LanguageDropdownComponent: FC<Readonly<IProps>> = (props) => {
  const { trigger, align, defaultOpen } = props

  const locale = useLocale()

  const pathname = usePathname()
  const router = useRouter()

  const [language, setLanguage] = useState(locale)

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setLanguage(newLocale)
  }

  // render
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

export default LanguageDropdownComponent
