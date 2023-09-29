'use client'
import { useState, useContext } from "react";
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from "../formik/formikcontrols";
import LoadButton from '../formik/loadButton';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import { Auth } from "../../../app/[lang]/context/authcontext";

// import { Auth } from "../../../../app/context/authcontext";

import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";



function LoginForm() {

    const cookies = new Cookies();

  

    const initialValues = {

        email: "",
        password: "",
    }

    const authencticated = useContext(Auth)


    const validationSchema = Yup.object().shape({

        email: Yup.string().required().email("invalid Formate"),
        password: Yup.string().required(),

    });

    const [myerrormsg, setmyerrormsg] = useState({ msg1: "", myclassextra: "" })

    const onSubmit = (values, formik) => {

        const fd = new FormData()
        fd.append("username", values.email)
        fd.append("password", values.password)
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}Authentication/access-token`, fd).then(res => {
            console.log(res?.data)

            if (res?.data?.access_token) {
                const token = res?.data?.access_token
                cookies.set("token", res?.data?.access_token, { path: '/', expires: new Date(Date.now() + 158400000) })
                const decoded = jwt_decode(token);
                cookies.set("ut", decoded.ut)
                authencticated.dispatch({ type: "loggedIn", token: cookies.get("token") })
                window.setTimeout(() => {
                    window.location.reload(), 3000
                })
            }


        }).catch(err => {
            if (err?.response) {
                setmyerrormsg({ msg1: err?.response?.data?.detail, myclassextra: "text-danger " })
                formik.setSubmitting(false)
            }
        })


    }


    const showpwd = () => {
        let x = document.getElementById("pass")
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => {

                console.log(!!formik?.errors?.email)
                console.log(formik?.touched.password && !formik?.errors.password)


                return (
                    <Form id="LoginFormId">

                        <div className={`col-md-12 my-2 text-center font14 ${myerrormsg.myclassextra} `}>{myerrormsg.msg1}</div>

                        <FormikControl controls="input" classprops={"form-group mb-3"} classextra="" id="email" label="Email" name="email" type="text" className={`form-control form-control-sm  `} isValid={formik?.touched.email && !formik?.errors.email && "field_suc"} isInvalid={!!formik?.errors?.email && "field_error"} placeholder="Email" />




                     
                        
                       

                        <InputGroup className="mb-3 d-flex">
                            <FormikControl controls="input" classextra=" col-10 p-0 " label="Password" name="password" id="pass" placeholder="Password" type="password" className="form-control form-control-sm " isValid={formik?.touched.password && !formik?.errors.password && "field_suc"} inputgroupField={true} inputgroup={<><InputGroup.Text className="py-0 cp"  id="basic-addon2 " title="Show Password" onClick={showpwd}>@</InputGroup.Text></>} isInvalid={!!formik?.errors?.password && "field_error"} />
                            
                        </InputGroup>


                  

                        <div className='text-center'>
                            <LoadButton onClick={formik?.handleSubmit} disabled={formik?.isSubmitting} classextra=" btn  btn-sm btn-primary "  type="submit" variant="primary"  bname={"Login"} />
                            {/* */}
                            
                           
                        </div>



                    </Form>
                )
            }


            }
        </Formik>
    );
}

export default LoginForm;