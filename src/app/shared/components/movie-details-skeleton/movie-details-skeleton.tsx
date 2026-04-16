import type { FC } from 'react'

import BoneComponent from './bone.component'

// interface
interface IProps {}

// component
const MovieDetailsSkeleton: FC<Readonly<IProps>> = (props) => {
  // render
  return (
    <div className='min-h-screen bg-black font-sans text-white'>
      <div className='relative h-[500px] w-full overflow-hidden bg-zinc-950'>
        <BoneComponent className='absolute inset-0 rounded-none! opacity-60' />
        <div className='absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black' />

        <div className='relative z-10 flex h-full items-end gap-8 px-10 pb-10'>
          <BoneComponent
            style={{
              width: 128,
              height: 192,
              borderRadius: 8,
              flexShrink: 0,
            }}
          />

          <div className='flex flex-col gap-3'>
            <BoneComponent style={{ width: 120, height: 10 }} />
            <BoneComponent style={{ width: 320, height: 52, borderRadius: 3 }} />

            <div className='flex gap-2'>
              {[64, 52, 72].map((w, i) => (
                <BoneComponent key={i} style={{ width: w, height: 26, borderRadius: 999 }} />
              ))}
            </div>

            <div className='flex items-center gap-4'>
              <BoneComponent style={{ width: 36, height: 10 }} />
              <BoneComponent style={{ width: 4, height: 4, borderRadius: '50%' }} />
              <BoneComponent style={{ width: 52, height: 10 }} />
              <BoneComponent style={{ width: 4, height: 4, borderRadius: '50%' }} />
              <BoneComponent style={{ width: 60, height: 10 }} />
              <BoneComponent style={{ width: 32, height: 20, borderRadius: 4 }} />
              <BoneComponent style={{ width: 32, height: 20, borderRadius: 4 }} />
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-5xl px-10 py-12'>
        <div className='mb-12'>
          <BoneComponent style={{ width: 72, height: 9, marginBottom: 16 }} />
          <div className='flex max-w-2xl flex-col gap-2'>
            {[100, 96, 88, 72].map((w, i) => (
              <BoneComponent key={i} style={{ width: `${w}%`, height: 13 }} />
            ))}
          </div>
        </div>

        <div className='mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4'>
          <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-5'>
            <BoneComponent style={{ width: 52, height: 9, marginBottom: 14 }} />
            <div className='flex items-center gap-3'>
              <BoneComponent style={{ width: 56, height: 56, borderRadius: '50%' }} />
              <div className='flex flex-col gap-2'>
                <BoneComponent style={{ width: 40, height: 22 }} />
                <BoneComponent style={{ width: 64, height: 9 }} />
              </div>
            </div>
          </div>

          {['Budget', 'Revenue', 'Popularity'].map((_, i) => (
            <div key={i} className='rounded-xl border border-zinc-800 bg-zinc-900 p-5'>
              <BoneComponent style={{ width: 48 + i * 10, height: 9, marginBottom: 12 }} />
              <BoneComponent style={{ width: 56, height: 26, marginBottom: 6 }} />
              <BoneComponent style={{ width: 80, height: 9 }} />
            </div>
          ))}
        </div>

        <hr className='mb-12 border-zinc-800/50' />

        <div className='mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2'>
          <div>
            <BoneComponent style={{ width: 44, height: 9, marginBottom: 12 }} />
            {[100, 88, 76, 100, 64, 80].map((w, i) => (
              <div key={i} className='flex items-center justify-between border-b border-zinc-800/60 py-3'>
                <BoneComponent style={{ width: w * 0.38, height: 9 }} />
                <BoneComponent style={{ width: w, height: 11 }} />
              </div>
            ))}
          </div>

          <div>
            <BoneComponent style={{ width: 64, height: 9, marginBottom: 12 }} />
            {[148, 120, 100, 132].map((w, i) => (
              <div key={i} className='flex items-center justify-between border-b border-zinc-800/60 py-3'>
                <BoneComponent style={{ width: w, height: 11 }} />
                <BoneComponent style={{ width: 30, height: 20, borderRadius: 4 }} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center justify-between border-t border-zinc-800/40 pt-6'>
          <BoneComponent style={{ width: 90, height: 9 }} />
          <BoneComponent style={{ width: 80, height: 28, borderRadius: 999 }} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsSkeleton
