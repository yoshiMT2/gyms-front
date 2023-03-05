import { useState } from 'react';
// import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"
// import type { Value } from 'react-multi-date-picker';
// import Button from "react-multi-date-picker/components/button"
// import InputIcon from 'react-multi-date-picker/components/input_icon';
// import Icon from "react-multi-date-picker/components/icon"
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import style  from './datepicker.module.css'
import ja from 'date-fns/locale/ja'



registerLocale('ja', ja)

const Cal = () => {
  const [value, setValue] = useState(new Date())
  console.log(value)
  return (
    <>
      <DatePicker
        selected={value}
        dayClassName = {(date) => date.getDay() === 6 ? 'saturday' : 'notsaturday' }
        onChange={(date) => date ? setValue(date) : null}
        calendarClassName = 'react-calendar'
        inline
        monthsShown={3}
        locale={'ja'}
        dateFormat='yyyy/MM/dd'
      />
    </>
    // <>
    //   <Calendar
    //     value={value}
    //     onChange={setValue}
    //     // hideYear={true}
    //     numberOfMonths={3}
    //     className='custom-calendar'
    //     render={<Button/>}
    //     // fullYear={true}
    //     weekDays={['日','月','火','水','木','金','土']}
    //     months={['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']}
    //     mapDays ={({date}) => {
    //       let isSat = [6].includes(date.weekDay.index)
    //       let isSun = [0].includes(date.weekDay.index)

    //       if (isSat) return {
    //         style: { color: "#0000FF"}
    //       }
    //       if (isSun) return {
    //         style: { color: "#FF0000"}
    //       }
    //     }

    //     }
    //   />
    // </>
    // <>
    // <Calendar
    //     onChange={setDate}
    //     value={date}
    //     calendarType='US'
    //     className='text-sm'
    //     maxDetail='month'
    //     minDetail='month'
    //     // nextLabel={null}
    //     next2Label={null}
    //     // prevLabel={null}
    //     prev2Label={null}
    //     showNeighboringMonth={false}
    //     showDoubleView={true}
    //     showFixedNumberOfWeeks={false}
    //   />
    // </>
  )
}

export default Cal

const styles = {
  paperprops: {
    'div[role=presentation]':{
      display: 'flex',
      '& .PrivatePickerFadeTransitionGroup-root:first-of-type': {
        order: 2
      },
      '& .PrivatePickerFadeTransitionGroup-root:nth-of-type(2)': {
        order: 1,
        '& div::after': {
          content: '"年"'
        }
      },
      '& .MuiButtonBase-root': {
        order: 3
      }
    }
  }
}