import { useEffect } from "react"
import DateView from "react-datepicker"

import { Field, ErrorMessage } from "formik"
import ErrorMsg from "./ErrorMsg.js";
import "react-datepicker/dist/react-datepicker.css"

function Datepicker(props) {
  const { label, name, id, classprops, classextra, placeholder, small, vsmall, disablePast, operating_days, allD, month, noform, val, dayClassName, className, onChange, start, isValid, isInvalid, ...rest } = props;
  
  // console.log(isValid)

  // console.log(isInvalid)


  useEffect(() => {
    const datePickerField = document.getElementById(id ? id : name)
    datePickerField.setAttribute('autocomplete', 'off');
  }, []);


  
  




  return (
    <div className={`${classprops}`}>
      {(label) ? <label htmlFor={name}  >{label}</label> : ""}
      <div  className={`${classextra }`}>


        {
          noform
            ? <DateView
              minDate={start ? new Date(start) : allD ? "" : new Date()}
              dateFormat="yyyy-MM-dd"
              popperPlacement="top"
              id={id ? id : name}
              {...rest}
              selected={val ? new Date(val.replace(/-/g, "/")) : ""}
              placeholderText={placeholder}
              onChange={(val) => onChange(val, name)}
              dayClassName={dayClassName ? dayClassName : ""}
              disabledKeyboardNavigation
              onFocus={e => e.target.blur()}
            />
            :
            <>

              <Field name={name} autocomplete="off"  {...rest}>
                {
                  ({ form, field }) => {
                    const { setFieldValue } = form
                    const { value } = field
                    const fieldVal = value ? new Date(value.replace(/-/g, "/")) : ""
                    return <DateView
                      minDate={start ? new Date(start) : allD ? "" : new Date()}
                      dateFormat="yyyy-MM-dd"
                      popperPlacement="top"
                      type="date"
                      maxDate={month ? new Date().setDate(new Date().getDate() + 90) : ""}
                      id={id ? id : name}
                      {...field}
                      {...rest}
                      selected={fieldVal}
                      isSearchable={false}
                      placeholderText={placeholder}
                      onChange={(val) => onChange(val, name)}
                      dayClassName={dayClassName ? dayClassName : ""}
                      disabledKeyboardNavigation
                      dropdownMode="select"
                      onFocus={e => e.target.blur()}
                      className={`${className} ${isValid} ${isInvalid}`} 
                      showMonthDropdown
                      showYearDropdown


                    />
                  }
                }
              </Field>

            </>
        }
      </div>

      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  )


}


export default Datepicker