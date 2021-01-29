import React, { FC, useEffect, useRef } from 'react'
import './style/main.scss'
import { DtWrapper, InputPicker } from './Components'
import CalenderProvider from './store/CalenderProvider'
import ViewProvider from './store/ViewProvider'
import SelectedDaysProvider from './store/SelectedDaysProvider'
import SelectedTimeProvider from './store/SelectedTimeProvider'
import MinMaxProvider from './store/MinMaxProvider'
import { checkInputValues, handelInitialValues } from './Helpers'
import useComponentVisible from './hooks/useComponentVisible'
import { IDay, IRange } from './Types'
interface IDtPickerProps {
  defaultValue?: IDay | IDay[] | IRange | null | undefined
  onChange: (date: any) => void
  onCalenderHide?: any
  onCalenderShow?: any
  type?: string
  withTime?: boolean
  local?: string
  showWeekend?: boolean
  clearBtn?: boolean
  isRequired?: boolean
  todayBtn?: boolean
  isDisabled?: boolean
  maxDate?: IDay
  minDate?: IDay
  placeholder?: string
  NextBtnIcon?: any
  PreviousBtnIcon?: any
  fromLabel?: string
  toLabel?: string
  clockFromLabel?: string
  clockToLabel?: string
  clockLabel?: string
  nextMonthBtnTitle?: string
  previousMonthBtnTitle?: string
  inputClass?: string
  clearBtnClass?: string
  calenderModalClass?: string
  headerClass?: string
  daysClass?: string
  timeClass?: string
  monthsClass?: string
  yearsClass?: string
  disabledDates?: IDay[]
}
const DtPicker: FC<IDtPickerProps> = ({
  defaultValue,
  onChange,
  type,
  withTime,
  local,
  showWeekend,
  clearBtn,
  isRequired,
  todayBtn,
  onCalenderHide,
  onCalenderShow,
  isDisabled,
  maxDate,
  minDate,
  placeholder,
  NextBtnIcon,
  PreviousBtnIcon,
  fromLabel,
  toLabel,
  clockFromLabel,
  clockToLabel,
  clockLabel,
  nextMonthBtnTitle,
  previousMonthBtnTitle,
  inputClass,
  clearBtnClass,
  calenderModalClass,
  headerClass,
  daysClass,
  timeClass,
  monthsClass,
  yearsClass,
  disabledDates
}) => {
  const inputRef = useRef(null)
  const minMaxState = {
    minDate: minDate,
    maxDate: maxDate
  }
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false, onCalenderHide, inputRef)

  const handelComponentVisible = () => {
    if (isComponentVisible) return
    if (!isComponentVisible && onCalenderShow) {
      onCalenderShow()
    }
    setIsComponentVisible(!isComponentVisible)
  }
  const correctedType = type ? type.toLocaleLowerCase() : 'single'
  const correctedLocal = local ? local.toLocaleLowerCase() : 'en'
  const { initCalender, initTime } = handelInitialValues(
    defaultValue,
    correctedType,
    correctedLocal,
    maxDate
  )

  useEffect(() => {
    checkInputValues(
      defaultValue,
      correctedLocal,
      correctedType,
      maxDate,
      minDate,
      disabledDates
    )
  }, [])
  return (
    <ViewProvider>
      <CalenderProvider initCalender={initCalender} type={correctedType}>
        <MinMaxProvider initState={minMaxState}>
          <SelectedDaysProvider initState={defaultValue} type={correctedType}>
            <SelectedTimeProvider initState={initTime} type={correctedType}>
              <div style={{ position: 'relative' }}>
                <InputPicker
                  ref={inputRef}
                  placeholder={placeholder}
                  clearBtn={clearBtn}
                  type={correctedType}
                  local={correctedLocal}
                  handelComponentVisible={handelComponentVisible}
                  onChange={onChange}
                  withTime={withTime}
                  isDisabled={isDisabled}
                  isRequired={!!isRequired}
                  fromLabel={fromLabel}
                  toLabel={toLabel}
                  inputClass={inputClass}
                  clearBtnClass={clearBtnClass}
                  maxDate={maxDate}
                />
                {isComponentVisible && (
                  <div
                    ref={ref}
                    className={`calender-modal ${calenderModalClass}`}
                  >
                    <DtWrapper
                      onChange={onChange}
                      type={correctedType}
                      withTime={withTime}
                      local={correctedLocal}
                      hasDefaultVal={!!defaultValue}
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
                      disabledDates={disabledDates}
                    />
                  </div>
                )}
              </div>
            </SelectedTimeProvider>
          </SelectedDaysProvider>
        </MinMaxProvider>
      </CalenderProvider>
    </ViewProvider>
  )
}
const DtCalender: FC<IDtPickerProps> = ({
  defaultValue,
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
  disabledDates
}) => {
  const minMaxState = {
    minDate: minDate,
    maxDate: maxDate
  }

  const correctedType = type ? type.toLocaleLowerCase() : 'single'
  const correctedLocal = local ? local.toLocaleLowerCase() : 'en'
  const { initCalender, initTime } = handelInitialValues(
    defaultValue,
    correctedType,
    correctedLocal,
    maxDate
  )
  useEffect(() => {
    checkInputValues(
      defaultValue,
      correctedLocal,
      correctedType,
      maxDate,
      minDate,
      disabledDates
    )
  }, [])
  return (
    <ViewProvider>
      <CalenderProvider initCalender={initCalender} type={correctedType}>
        <MinMaxProvider initState={minMaxState}>
          <SelectedDaysProvider initState={defaultValue} type={correctedType}>
            <SelectedTimeProvider initState={initTime} type={correctedType}>
              <div
                className={`calender-modal is-calender ${calenderModalClass}`}
              >
                <DtWrapper
                  onChange={onChange}
                  type={correctedType}
                  withTime={withTime}
                  local={correctedLocal}
                  hasDefaultVal={!!defaultValue}
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
                  disabledDates={disabledDates}
                />
              </div>
            </SelectedTimeProvider>
          </SelectedDaysProvider>
        </MinMaxProvider>
      </CalenderProvider>
    </ViewProvider>
  )
}

export default DtPicker
export { DtCalender, IDay, IRange }
