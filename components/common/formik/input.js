import { Field, ErrorMessage } from 'formik';
import ErrorMsg from './ErrorMsg';


export default function Input(props) {

    const {  classprops,inputgroupField, ...rest } = props;


    {/*   */ }

    return (
        <>
            {
                inputgroupField
                    ?
                    <InputChange {...rest} />
                    : <div className={`${classprops}`}>
                        <InputChange {...rest} />
                    </div>
            }
        </>
    )
}



function InputChange(props) {

    const { label, name, classextra, readOnly, inputgroup, className, isValid, isInvalid, msg, type, ...rest } = props;

    return (<>
        {
            label != "" ? <label htmlFor={name} >{label}</label> : ""
        }
        <div className={`${classextra}`}>
            <Field type={type} name={name} className={`${className} ${isValid} ${isInvalid}`} readOnly={readOnly}   {...rest} />
        </div>
        {inputgroup && inputgroup}
        <ErrorMessage name={name} component={ErrorMsg} />
    </>)
}