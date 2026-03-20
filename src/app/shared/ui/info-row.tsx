import React from 'react'

export function InfoRow({ label, value }: { label: string; value: string | React.ReactNode }) {
  return (
    <div className='flex items-baseline justify-between border-b border-zinc-800/60 py-3'>
      <span className='text-xs tracking-wide text-zinc-500'>{label}</span>
      <span className='max-w-xs text-right text-sm text-zinc-300'>{value}</span>
    </div>
  )
}
