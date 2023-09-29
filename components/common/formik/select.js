import { Field, ErrorMessage } from "formik";
import ErrorMsg from "./ErrorMsg";

function Select(props) {

    const { label, name, classextra, classprops, className, isValid,isInvalid ,removeOption, options, ...rest } = props;


    return (
        <>
            <div className={classprops}>



                {label && <label className={name} htmlFor="label">{label} </label>}
                <div className={`${classextra}`}>
                    <Field as="select" name={name} className={`${className} ${isValid} ${isInvalid}`} id={name} {...rest} >
                        {removeOption ? "" : <option value=""></option>}
                        {
                            options?.map(option => {
                                return <option key={"select" + option.label + option.value} value={option.value}>{option.label}</option>
                            })
                        }
                    </Field>

                </div>
                <ErrorMessage name={name} component={ErrorMsg} />
            </div>
        </>

    )
}

export default Select;