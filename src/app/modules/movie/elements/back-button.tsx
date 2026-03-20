import { Link } from '@/pkg/locale'
import { ChevronLeft } from 'lucide-react'

export const BackButton = () => {
  return (
    <Link
      href='/items'
      className="bg-background/50 group/button focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 fixed top-24 left-10 z-30 inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding p-3 text-sm font-medium whitespace-nowrap backdrop-blur-2xl transition-all outline-none select-none focus-visible:ring-3 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
    >
      <ChevronLeft color='#fff' size={15} />
    </Link>
  )
}
