import { Field, ErrorMessage } from 'formik';
import ErrorMsg from './ErrorMsg';



function FileUpload(props) {
    const { label, name, classextra, classprops, className,isValid,isInvalid ,fileHandler, multiple, images, ...rest } = props




    return (
        <div className={classprops}>


            {label ? <label htmlFor={name}>{label}</label> : ""}
            <div className={` ${classextra}`}>
                <Field name={name} >
                    {
                        (formik) => {

                            const { form } = formik
                            if (multiple) {
                                return (<input type="file" name={name} id={name} className={`${className} ${isValid} ${isInvalid}`} onChange={(e) => fileHandler(e, form)} multiple {...rest} />)

                            } else {
                                return (<input type="file" name={name} id={name} className={`${className} ${isValid} ${isInvalid}`} onClick={e => (e.target.value = null)} onChange={(e) => fileHandler(e, form)}  {...rest} />)
                            }

                        }
                    }
                </Field>
                {images}

            </div>
            {<ErrorMessage name={name} component={ErrorMsg} />}
        </div>
    )
}

export default FileUpload;
