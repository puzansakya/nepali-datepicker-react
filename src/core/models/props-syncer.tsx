import React from 'react'
import { useDatePickerStore } from './use-date-picker-store'
import { ICalendarProps } from './model'
import { selectCtx, selectEvents } from './selectors'

export const PropsSyncer = (props: ICalendarProps) => {
  const state = useDatePickerStore()
  const { syncProps } = selectEvents(state)

  const {
    mode,
    startDate,
    endDate,
    disableDateBefore,
    disableDateAfter,
    isDisabled,
    enableRangeMenu,
  } = selectCtx(state)

  React.useEffect(() => {
    if (
      props.mode !== mode ||
      props?.startDate !== startDate ||
      props?.endDate !== endDate ||
      props.disableDateBefore !== disableDateBefore ||
      props.disableDateAfter !== disableDateAfter ||
      props.isDisabled !== isDisabled ||
      props.enableRangeMenu !== enableRangeMenu
    ) {
      syncProps(props)
    }
  }, [props])

  return <></>
}
