import React, { FC, useEffect, useMemo, useState } from 'react'
import '@/assets/styles/main.scss'
import CalenderProvider from '@/store/CalenderProvider'
import ViewProvider from '@/store/ViewProvider'
import SelectedDaysProvider from '@/store/SelectedDaysProvider'
import SelectedTimeProvider from '@/store/SelectedTimeProvider'
import MinMaxProvider from '@/store/MinMaxProvider'
import {
  checkInputValues,
  fixedMonth,
  fixedMonthInitValue,
  handelInitialValues,
  mergeProviders
} from '@/utils/helpers'
import {
  IDtPickerProps,
  calendarLocal,
  calendarType,
  IRange
} from '@/types/type'
import { DtWrapper } from './Components'

const DtCalendar: FC<IDtPickerProps> = ({
  initValue,
  onCalenderChange,
  onChange,
  type,
  withTime,
  local,
  showWeekend,
  todayBtn,
  maxDate,
  minDate,
  NextBtnIcon,
  PreviousBtnIcon,
  clockFromLabel,
  clockToLabel,
  clockLabel,
  nextMonthBtnTitle,
  previousMonthBtnTitle,
  calenderModalClass,
  headerClass,
  daysClass,
  timeClass,
  monthsClass,
  yearsClass,
  disabledDates,
  yearListStyle
}) => {
  const [prevInitDate, setPrevInitDate] = useState<any>(null)
  const [isUpdate, setIsUpdate] = useState<number>(0)
  const minMaxState = {
    minDate: fixedMonth(minDate),
    maxDate: fixedMonth(maxDate)
  }
  let fixedDisabledDates: any
  if (disabledDates?.length) {
    fixedDisabledDates = disabledDates?.map((date) => {
      return fixedMonth(date)
    })
  }
  const correctedType = (
    type ? type.toLocaleLowerCase() : 'single'
  ) as calendarType
  const correctedLocal = (
    local ? local.toLocaleLowerCase() : 'en'
  ) as calendarLocal
  const [fixedInitValue, setFixedInitValue] = useState(
    fixedMonthInitValue(initValue, correctedType)
  )
  const { initCalender, initTime } = useMemo(
    () =>
      handelInitialValues(
        fixedMonthInitValue(initValue, correctedType),
        correctedType,
        correctedLocal,
        fixedMonth(maxDate),
        fixedMonth(minDate)
      ),
    [initValue, maxDate, minDate]
  )
  checkInputValues(
    initValue,
    correctedLocal,
    correctedType,
    maxDate,
    minDate,
    disabledDates
  )
  useEffect(() => {
    if (correctedType === 'single' || correctedType === 'multi') {
      if (
        (initValue &&
          JSON.stringify(prevInitDate) !== JSON.stringify(initValue)) ||
        !initValue
      ) {
        setPrevInitDate(initValue)
        setFixedInitValue(fixedMonthInitValue(initValue, correctedType))
        setIsUpdate(isUpdate + 1)
      }
    }
    if (correctedType === 'range') {
      if (
        (initValue &&
          (initValue as IRange).from &&
          (initValue as IRange).to &&
          JSON.stringify(prevInitDate) !== JSON.stringify(initValue)) ||
        !initValue
      ) {
        setPrevInitDate(initValue)
        setFixedInitValue(fixedMonthInitValue(initValue, correctedType))
        setIsUpdate(isUpdate + 1)
      }
    }
  }, [initValue])
  useEffect(() => {
    if (isUpdate === 0) {
      mergeProviders(onChange, correctedType, fixedInitValue, initTime)
    } else {
      mergeProviders(
        onChange,
        correctedType,
        fixedInitValue,
        initTime,
        onCalenderChange
      )
    }
  }, [fixedInitValue])

  return (
    <div
      className={`react-calendar-datetime-picker ${
        local === 'fa' ? 'is-jalali' : ''
      }`}
      key={isUpdate}
    >
      <ViewProvider>
        <CalenderProvider initCalender={initCalender} type={correctedType}>
          <MinMaxProvider initState={minMaxState}>
            <SelectedDaysProvider
              initState={fixedInitValue}
              type={correctedType}
            >
              <SelectedTimeProvider initState={initTime} type={correctedType}>
                <div
                  className={`calender-modal  is-calender ${calenderModalClass}`}
                >
                  <DtWrapper
                    onChange={onChange}
                    type={correctedType}
                    withTime={withTime}
                    local={correctedLocal}
                    showWeekend={!!showWeekend}
                    todayBtn={!!todayBtn}
                    NextBtnIcon={NextBtnIcon}
                    PreviousBtnIcon={PreviousBtnIcon}
                    clockFromLabel={clockFromLabel}
                    clockToLabel={clockToLabel}
                    clockLabel={clockLabel}
                    nextMonthBtnTitle={nextMonthBtnTitle}
                    previousMonthBtnTitle={previousMonthBtnTitle}
                    headerClass={headerClass}
                    daysClass={daysClass}
                    timeClass={timeClass}
                    monthsClass={monthsClass}
                    yearsClass={yearsClass}
                    disabledDates={fixedDisabledDates}
                    yearListStyle={yearListStyle}
                  />
                </div>
              </SelectedTimeProvider>
            </SelectedDaysProvider>
          </MinMaxProvider>
        </CalenderProvider>
      </ViewProvider>
    </div>
  )
}

export default React.memo(DtCalendar)
