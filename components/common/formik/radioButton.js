import React from 'react';
import { Field, ErrorMessage } from "formik"
import ErrorMsg from "./ErrorMsg";




function RadioButtons(props) {

  const { label, name, options, classprops, classextra, labelClass, OnClickChange, radioChange, ...rest } = props;


  return (
    <>

      <div className={`${classprops}`}>

        <label className={labelClass} htmlFor={name}>{label}</label>

        <div className={`${classextra}`}>
          <Field name={name} >


            {({ field }) => {
              // console.log(field)
              return options.map(option => {

                return (
                  <React.Fragment key={option.label}>
                    {

                      radioChange
                        ? <>
                          <input
                            type="radio"
                            onClick={e => OnClickChange(option.value)}
                            id={`id` + option.value}
                            {...field}
                            checked={field.value === option.value}
                            value={option.value}
                          />
                          <label className="form-check-label px-1" htmlFor={`id` + option.value}>
                            {option.label}
                          </label>
                        </>
                        :
                        <>
                          
                          {console.log(field.value === option.value)}
                          
                          <input
                            type='radio'
                            id={`id` + option.value}
                            {...field}
                            value={option.value}
                            checked={field.value === option.value}
                          />
                          <label className="form-check-label px-1" htmlFor={`id` + option.value}>
                            {option.label}
                          </label>
                        </>

                    }

                  </React.Fragment>
                )
              })



            }}
          </Field>
        </div>

        <ErrorMessage component={ErrorMsg} name={name} />
      </div>
    </>
  )
}


export default RadioButtons;
