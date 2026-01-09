import { Temporal } from '@js-temporal/polyfill'

export function formatDate(date: Date) {
  const instant = Temporal.Instant.from(date.toISOString())
  return instant.toZonedDateTimeISO(Temporal.Now.timeZoneId()).toLocaleString('zh-CN', { dateStyle: 'medium' })
}
