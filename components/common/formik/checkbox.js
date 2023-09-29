
import { Field, ErrorMessage } from "formik"
import ErrorMsg from "./ErrorMsg.js";


function Checkbox(props) {
    const { label, name, classprops, classextra, type, className, ...rest } = props;





    return (

        <div className={classprops}>

            
            <div className={`${classextra} `}>
                <>



                    {
                        <label className="" htmlFor={name}>

                            <Field type={type} name={name} id={name} {...rest} />
                            <span className="ms-1">{label}</span>


                        </label>
                    }



                </>
            </div>
            <ErrorMessage name={name} component={ErrorMsg} />
        </div>

    )
}



export default Checkbox;