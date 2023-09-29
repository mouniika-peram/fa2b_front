'use client'

import { useState } from "react";
import Row from 'react-bootstrap/Row';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormikControl from "../formik/formikcontrols";
import LoadButton from '../formik/loadButton';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';




function SignupForm() {

    const validationSchema = Yup.object().shape({

        username: Yup.string().required("Required").email("Not a valid email"),
        password: Yup.string().required("Required").min(6),
        confirm_password: Yup.string().required("Required").oneOf([Yup.ref('password'), null], "Should match password!"),
        tnc: Yup.bool().required().oneOf([true], 'Please agree to T&C'),



    });

    const initialValues = {
        username: "",
        password: "",
        confirm_password: "",
        tnc: false,
  

    }

    const [myerrormsg, setmyerrormsg] = useState({ msg1: "", myclassextra: "" })

    const onSubmit = (values, formik) => {



        setmyerrormsg({ msg1: "", myclassextra: "" })

        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}Authentication/`, values).then(res => {
            setBtndisable(true)
            setmyerrormsg({ msg1: "Please check your email promotion/inbox folder, for email confirmation.", myclassextra: "py-1 bg-success" })
            formik.setSubmitting(false)

        }).catch(err => {


            // console.log(err?.response)
            if (err.response) {
                formik.setSubmitting(false)
                setmyerrormsg({ msg1: err?.response?.data?.detail, myclassextra: "text-danger" })

            } 
            formik.setSubmitting(false)
        })


    }



    const showpwd = () => {
        let x = document.getElementById("pass2");
        let y = document.getElementById("pass1");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }

        if (y.type === "password") {
            y.type = "text";
        } else {
            y.type = "password";
        }
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => {

               





                return (
                    <Form id="SignupFormId">

                        <div className={`col-md-12 my-2 text-center font14 ${myerrormsg.myclassextra} `}>{myerrormsg.msg1}</div>


                        <FormikControl controls="input" classprops={"form-group mb-3"} classextra="" id="username" label="email" name="username" type="text" className={`form-control form-control-sm  `} isValid={formik?.touched.username && !formik?.errors.username && "field_suc"} isInvalid={!!formik?.errors?.username && "field_error"} placeholder="Email" />





                        <FormikControl controls="input" classprops={"form-group mb-3"} classextra="" label="Password" name="password" id="pass1" placeholder="Password" type="password" className="form-control form-control-sm " isValid={formik?.touched.password && !formik?.errors.password && "field_suc"} isInvalid={!!formik?.errors?.password && "field_error"} />



                        <InputGroup className="mb-3 d-flex">
                            <FormikControl controls="input" classextra=" col-10 p-0 " label="Confirm Password" name="confirm_password" id="pass2" placeholder="Confirm Password" type="password" className="form-control form-control-sm " isValid={formik?.touched.confirm_password && !formik?.errors.confirm_password && "field_suc"} isInvalid={!!formik?.errors?.confirm_password && "field_error"} inputgroupField={true} inputgroup={<><InputGroup.Text className="py-0 cp" id="basic-addon2 " title="Show Password" onClick={showpwd}>@</InputGroup.Text></>} />
                        </InputGroup>


                        <FormikControl classprops={"form-group  col-6 mb-3"} controls="checkbox" type="checkbox" label={`acceptTerms`} name="tnc" />


                        <div className='text-center'>
                            <LoadButton onClick={formik?.handleSubmit} classextra=" btn  btn-sm btn-primary " type="submit" variant="primary" bname={"Sign up"} />
                            {/* disabled={formik?.isSubmitting} */}

                        </div>



                    </Form>
                )
            }


            }
        </Formik>
    );
}

export default SignupForm;