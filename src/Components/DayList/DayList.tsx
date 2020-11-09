import React from 'react'
import styles from './styles.module.css'
import {
  getNumberOfDaysInMonth,
  getPreviousSundayDay,
  getWeekday
} from '../../Helpers'
import { WEEK_DAY_SHORT } from '../../Constant'

const DayList = ({ year, month, day }: IMonthList) => {
  const createDaysForCurrentMonth = (year: number, month: number) => {
    return [...Array(getNumberOfDaysInMonth(year, month))].map((_, index) => {
      return {
        date: new Date(year, month, index + 1),
        dayOfMonth: index + 1,
        isCurrentMonth: true
      }
    })
  }
  const daysForCurrentMonth = createDaysForCurrentMonth(year, month)

  const createDaysForPreviousMonth = (year: number, month: number) => {
    const firstDayOfTheMonthWeekday = getWeekday(
      daysForCurrentMonth[0].date.getDay()
    )
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday.weekDayIndex
      ? firstDayOfTheMonthWeekday.weekDayIndex - 1
      : 6

    const previousMonth = new Date(year, month - 1)
    var previousMonthLastMondayDayOfMonth = getPreviousSundayDay(
      daysForCurrentMonth[0].date
    )

    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((_, index) => {
      return {
        date: new Date(
          previousMonth.getFullYear(),
          previousMonth.getMonth(),
          previousMonthLastMondayDayOfMonth + index
        ),
        dayOfMonth: previousMonthLastMondayDayOfMonth + index,
        isCurrentMonth: false
      }
    })
  }
  function createDaysForNextMonth(year: number, month: number) {
    const lastDayOfTheMonthWeekday = getWeekday(
      new Date(year, month, daysForCurrentMonth.length).getDay()
    )
    const nextMonth = new Date(year, month + 1)
    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday.weekDayIndex
      ? 7 - lastDayOfTheMonthWeekday.weekDayIndex
      : lastDayOfTheMonthWeekday

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((_, index) => {
      return {
        date: new Date(
          nextMonth.getFullYear(),
          nextMonth.getMonth(),
          index + 1
        ),
        dayOfMonth: index + 1,
        isCurrentMonth: false
      }
    })
  }
  console.log(createDaysForPreviousMonth(year, month))
  console.log(createDaysForNextMonth(year, month))
  console.log(day)

  return (
    <ul className={styles.daysList}>
      {WEEK_DAY_SHORT.map((day) => (
        <li key={day} className={styles.daysList_day}>
          {day}
        </li>
      ))}
      {daysForCurrentMonth.map((day) => (
        <li
          key={day.dayOfMonth}
          className={`${styles.daysList_day} ${styles.pointer}`}
        >
          {day.dayOfMonth}
        </li>
      ))}
    </ul>
  )
}

export default DayList
