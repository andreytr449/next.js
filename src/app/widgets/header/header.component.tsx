import { LanguagesIcon } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type { FC } from 'react'

import { AuthButtonComponent } from '@/app/features/auth-button'
import { LanguageDropdownComponent } from '@/app/features/language-switcher'
import { Logo } from '@/app/shared/assets'
import { Link } from '@/pkg/locale'
import { Button } from '@/pkg/theme/components/button'

import { navigationData } from './header.constant'

// interface
interface IProps {}

const HeaderComponent: FC<Readonly<IProps>> = async (props) => {
  const {} = props

  const t = await getTranslations('Header')

  // render
  return (
    <header className='bg-background/80 sticky top-0 z-50 mx-3 rounded-4xl border border-b-gray-900 backdrop-blur-md md:mx-28'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
          <Link href='/'>
            <Logo className='text-foreground gap-3' />
          </Link>

          {navigationData.map((item) => (
            <Link key={item.key} href={item.href} className='hover:text-primary max-sm:hidden'>
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          <LanguageDropdownComponent
            align='center'
            trigger={
              <Button variant='outline' size='icon'>
                <LanguagesIcon />
              </Button>
            }
          />

          <AuthButtonComponent />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
