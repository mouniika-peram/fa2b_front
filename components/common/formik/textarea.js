
import { Field, ErrorMessage } from 'formik'
import React from 'react';
import ErrorMsg from "./ErrorMsg";

function Textarea(props) {
  const { label, name, classprops, classextra, className, isValid, isInvalid, rows, ...rest } = props
  return (
    <>
      <div className={classprops}>

        <label htmlFor={name}>{label}</label>

        <div className={classextra}>

          <Field as='textarea' id={name} className={`${className} ${isValid} ${isInvalid}`} rows={rows}  name={name} {...rest} />


        </div>
        <ErrorMessage component={ErrorMsg} name={name} />

      </div>

    </>
  )
}


export default Textarea
