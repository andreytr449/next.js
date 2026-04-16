import type { FC } from 'react'

// interface
interface IProps {
  label: string
  value: string | number
  sub: string
}

// component
const StatCardComponent: FC<Readonly<IProps>> = (props) => {
  const { label, sub, value } = props

  // render
  return (
    <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-5'>
      <p className='mb-2 text-xs tracking-widest text-zinc-500 uppercase'>{label}</p>

      <p className='text-2xl font-light text-white'>{value}</p>

      {sub && <p className='mt-1 text-xs text-zinc-600'>{sub}</p>}
    </div>
  )
}

export default StatCardComponent
