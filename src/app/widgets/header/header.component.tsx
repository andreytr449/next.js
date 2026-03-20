import { Logo } from '@/app/shared/assets'
import { Link } from '@/pkg/locale'
import { navigationData } from './header.constant'
import { getTranslations } from 'next-intl/server'
import { LanguageDropdown } from '@/app/features/language-switcher'
import { Button } from '@/app/shared/ui'
import { LanguagesIcon } from 'lucide-react'
import { AuthButton } from '@/app/features/auth-button'

export const Header = async () => {
  const t = await getTranslations('Header')
  return (
    <header className='bg-background/80 sticky top-0 z-50 mx-28 rounded-4xl border border-b-gray-900 backdrop-blur-md'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
          <Link href='/'>
            <Logo className='text-foreground gap-3' />
          </Link>
          {navigationData.map((item) => (
            <Link key={item.key} href={item.href} className='hover:text-primary max-md:hidden'>
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          <LanguageDropdown
            align='center'
            trigger={
              <Button variant='outline' size='icon'>
                <LanguagesIcon />
              </Button>
            }
          />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}
