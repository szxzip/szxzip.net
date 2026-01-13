import type { LocaleMapping, SupportedLocale } from './locales'
import { LOCALEMAPPINGS } from './locales'

export function useTranslate(locale: SupportedLocale) {
  function translate(key: keyof LocaleMapping, ...args: Array<string | number>): string {
    const mappings = LOCALEMAPPINGS[locale]
    let translation = mappings[key] || key

    args.forEach((arg, index) => {
      translation = translation.replace(`%${index + 1}$s`, String(arg)).replace(`%d`, String(arg))
    })

    return translation
  }
  return { t: translate }
}
