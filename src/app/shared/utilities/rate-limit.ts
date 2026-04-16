// check if the user is rate limited
export const isRateLimited = (attemptsSet: Set<string>, ip: string, limit: number, windowMs: number): boolean => {
  const now = Date.now()

  attemptsSet.forEach((entry) => {
    const [entryIp, timestampStr] = entry.split('|')
    const timestamp = parseInt(timestampStr, 10)

    if (now - timestamp > windowMs) {
      attemptsSet.delete(entry)
    }
  })

  let currentAttempts = 0
  attemptsSet.forEach((entry) => {
    if (entry.startsWith(`${ip}|`)) {
      currentAttempts++
    }
  })

  if (currentAttempts >= limit) {
    return true
  }

  attemptsSet.add(`${ip}|${now}`)
  return false
}
