### React Nepali Datepicker

### Install
```bash
npm i nepali-datepicker-react
```
```bash
yarn add nepali-datepicker-react
```
```bash
pnpm i nepali-datepicker-react
```
### Usage

#### Provider usage
```tsx
import { useDatePickerStore, selectEvents, selectCtx, disableTogglerAfterMaxEngDate, DatePickerStoreProvider, ModeEnum } from "nepali-datepicker-react";

<DatePickerStoreProvider props={{
        mode: ModeEnum.RANGE,
        closeOnSelect: false,
        startDate: "",
        endDate: "",
        showSecondaryDate: true
    }} >
        <div className="items-start flex flex-col gap-3">
            {...your_component}
        </div>
    </DatePickerStoreProvider>
```

#### Hook usage
```tsx
import { zero_pad, DATE_NULLIFIER, selectCtx, selectEvents, useDatePickerStore } from "nepali-datepicker-react";

export const PickerBody = () => {
    const state = useDatePickerStore();

    const { gridDates, weeks, showSecondaryDate } = selectCtx(state)
    const { selectDay } = selectEvents(state)

    return ...
}
```


### Props
#### 
| Prop Name | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
