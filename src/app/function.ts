const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']
const arabicNumbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠']

export function formatPrice(val: string | number): string {
  return String(val).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function toPersian(value: string | number, numeric?: boolean): string {
  if (!value) {
    return ''
  }
  let formatted = String(numeric ? formatPrice(String(value)) : value)
  for (let i = 0, numbersLen = englishNumbers.length; i < numbersLen; i++) {
    formatted = formatted.replace(
      new RegExp(englishNumbers[i], 'g'),
      persianNumbers[i]
    )
  }
  return formatted
}