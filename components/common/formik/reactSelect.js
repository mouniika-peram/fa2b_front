import Select, { components } from "react-select";
import makeAnimated from 'react-select/animated';
import { ErrorMessage, isEmptyArray } from "formik";
import ErrorMsg from "./ErrorMsg";
import { useState, useEffect } from "react";

import React from "react";

function ReactSelect(props) {

  const {
    defaultValue,
    options,
    onChange,
    classprops,
    label,
    name,

    notAform,
    before,
    border,
    v,
    placeholder,
    labelMulti,
    noClear, labelClass,
    disabled, classextra, isValid,isInvalid,
    containerHeight
  } = props;

  const [val, setVal] = useState(defaultValue);

  // console.log(isValid)

  // console.log(isInvalid)

  useEffect(() => {
    if (labelMulti) {
      options?.map(items => {
        isEmptyArray(items.options) ? "" :
          items?.options?.map(i2 => {
            if (i2.value === defaultValue) {
              setVal(i2);
            }
          })
      })
    } else if (defaultValue) {
      options?.map(items => {
        if (v === "string") {
          if (items.value === defaultValue) {
            setVal(items);
            return "";
          }
        } else if (items.value === Number(defaultValue)) {
          setVal(items);
          return "";
        }
      })
    } else {
      setVal({});
    }
  }, [defaultValue, options]);

  const handleChange = selected => {
    setVal(selected);
    onChange(name, selected)
  };

  const customStyles = {
    control: (provided, state) => {
      let bordersCss = {}
      if (border) {
        bordersCss = {
          boxShadow: state.isFocused ? 0 : 0,
          border: state.isFocused ? 0 : 0,
          borderColor: '',
        }
      } else {
        bordersCss = {
          boxShadow: state.isFocused ? 0 : 0,
          borderColor: isValid ? "green" : isInvalid ? 'red':'#9e9e9e',
        }
      }
      return ({
        ...provided,
        ...bordersCss,
        background: '#fff',
        height: "calc(1.5em + 0.6rem + 5px)",
        fontSize: "0.7rem",
        minHeight: "calc(1.5em + 0.5rem + 2px)",
      })

    },

    valueContainer: (provided, state) => ({
      ...provided,
      height: "calc(1.5em + 0.5rem + 2px)",
      fontSize: "0.7rem",
      padding: '0 6px',

    }),

    input: (provided, state) => ({
      ...provided,
      fontSize: "0.7rem",
      margin: '0px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      fontSize: "0.7rem",
      height: "calc(1.5em + 0.5rem + 2px)",
    }),

    option: (provided, state) => ({
      ...provided,
    }),
  }

  const GroupHeading = props => (
    <div className="reactGroupHeading" >
      <components.GroupHeading {...props} />
    </div>
  );

  const Group = props => (
    <div className="reactTotalGroup">
      <components.Group {...props} />
    </div>
  );
  const animatedComponents = makeAnimated();



  return (
    <div className={`  ${classprops}`}>

      {label && <label className={labelClass}>{label}</label>}
      <div className={`${classextra} `}>
        {before}

        <Select
          id={`reactselect3${name}`}
          instanceId={`reactselect23${name}`}
          value={defaultValue ? val : ""}
          options={options}
          onChange={handleChange}
          styles={customStyles}
          name={name}
          isClearable={noClear ? false : true}
          className={`font-weight-normal text-dark`}
          placeholder={placeholder ? placeholder : "Select..."}
          components={{ GroupHeading, Group, animatedComponents }}
          isDisabled={disabled}
          maxMenuHeight={containerHeight}
        />

      </div>


      {<ErrorMessage name={name} component={ErrorMsg} />}
    </div>
  )
};

export default (ReactSelect);