export function RatingCircle({ score = 1 }: { score: number }) {
  const r = 22
  const circ = 2 * Math.PI * r
  const dash = circ * (score / 10)
  return (
    <svg width='56' height='56' viewBox='0 0 56 56'>
      <circle cx='28' cy='28' r={r} fill='none' stroke='rgba(255,255,255,0.08)' strokeWidth='3' />
      <circle
        cx='28'
        cy='28'
        r={r}
        fill='none'
        stroke='rgba(255,255,255,0.75)'
        strokeWidth='3'
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap='round'
        transform='rotate(-90 28 28)'
      />
    </svg>
  )
}
