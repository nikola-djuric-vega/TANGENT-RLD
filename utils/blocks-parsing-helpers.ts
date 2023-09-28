import { ALL_MONTHS_SHORT, WEEK_DAYS_BY_NAME } from 'data/schedule-text'

export const handleMonth = (number: number): string => {
  return ALL_MONTHS_SHORT[number - 1]
}

export const handleStatus = (status: string): boolean =>
  status.trim() === 'TRUE-C' ? true : false

export const checkDay = (day: string): string => {
  let finalDayInMonth = day
  const dayInMonth = day.split('')
  const lastDigit = dayInMonth[dayInMonth.length - 1]
  const secondLastDigit = dayInMonth[dayInMonth.length - 2]

  if (lastDigit === 'A') {
    return 'N/A'
  }

  if (secondLastDigit === '0') {
    const secondLastDigitInd = dayInMonth.indexOf(secondLastDigit)
    dayInMonth.splice(secondLastDigitInd, 1)
    finalDayInMonth = dayInMonth.join('')
  }

  if (finalDayInMonth.length <= 2) {
    return `${finalDayInMonth}${getOrdinal(+finalDayInMonth)}`
  } else {
    const checkForNumbersInString = finalDayInMonth.match(/\d+/)
    const numbersInString = checkForNumbersInString![0]
    return `${finalDayInMonth}${getOrdinal(+numbersInString)}`
  }
}

const getOrdinal = (n: number) => {
  let ord = 'th'

  if (n % 10 == 1 && n % 100 != 11) {
    ord = 'st'
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = 'nd'
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = 'rd'
  }

  return ord
}

export const uniqueValuesFromArray = (arr: string[]): string[] => {
  const uniqueValues = new Set(arr)
  const uniqueValuesArray = Array.from(uniqueValues)
  return uniqueValuesArray
}

export const checkAllWeekDays = (): string[] => {
  const weekDayIndex = new Date().getDay()

  const weekDaysByName = [...WEEK_DAYS_BY_NAME]
  const weekdaysBeforeToday: string[] = []
  const weekDaysFromToday = weekDaysByName.reduce(
    (acc: string[], day, index) => {
      if (index >= weekDayIndex) {
        acc.push(day)
      } else {
        weekdaysBeforeToday.push(day)
      }

      return acc
    },
    []
  )

  return weekDaysFromToday.concat(weekdaysBeforeToday)
}

export const handleAllWeekDays = (
  days: string[]
): [string[], { startOfWeekMonth: string; endOfWeekMonth: string }] => {
  const allDaysArray = uniqueValuesFromArray(days)
  const weekDayDate = new Date().getDate()

  const checkWeekDaysArray = allDaysArray.reduce(
    (acc: string[], day, index, arr) => {
      const date = Number(day.split('/')[0])
      if (date === weekDayDate && acc.length < 7) {
        return acc.concat(...arr.slice(index, index + 7))
      } else {
        return acc
      }
    },
    []
  )

  const thisWeekDaysArray =
    checkWeekDaysArray.length < 7 ? [] : checkWeekDaysArray

  const startOfWeekMonth =
    thisWeekDaysArray.length > 1
      ? handleMonth(Number(thisWeekDaysArray[0].split('/')[1]))
      : ''

  const endOfWeekMonth =
    thisWeekDaysArray.length > 1
      ? handleMonth(
          Number(thisWeekDaysArray[thisWeekDaysArray.length - 1].split('/')[1])
        )
      : ''

  const weekDaysArray = checkAllWeekDays()
  const formattedWeekdays = weekDaysArray.map((day, index) => {
    const splitDate = day.concat(thisWeekDaysArray[index]?.split('/')[0])
    const splitDay = splitDate.split(' ')

    return splitDay[1] === 'undefined' ? splitDay[0].concat(' N/A') : splitDate
  })

  return [formattedWeekdays, { startOfWeekMonth, endOfWeekMonth }]
}
