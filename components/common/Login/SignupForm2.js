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
        // tnc: Yup.bool().required().oneOf([true], 'Please agree to T&C'),



    });

    const initialValues = {
        username: "",
        password: "",
        confirm_password: "",
        tnc: false,
        with_transport: false,
        acceptTerms:false

    }

    const [myerrormsg, setmyerrormsg] = useState({ msg1: "", myclassextra: "" })

    const onSubmit = (values, formik) => {

        console.log(values)


        setmyerrormsg({ msg1: "", myclassextra: "" })




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

    const [tnc, setTnc] = useState(false)
   
    console.log(tnc)

    // const onToggle=()=> {
    //     console.log("first")
    //     // check if checkbox is checked
    //     if (document.querySelector('#my-checkbox').checked) {
    //         // if checked
    //         console.log('checked');
    //     } else {
    //         // if unchecked
    //         console.log('unchecked');
    //     }
    // }



    


    return (
        <input type="checkbox" name="tac" id="myCheckbox" checked={tnc} onClick={() => setTnc(!tnc) } />

        // <input id="my-checkbox" name={"tac"} type="checkbox" onclick={() => onToggle()}/>
    );
}

export default SignupForm;