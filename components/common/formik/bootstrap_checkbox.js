


import Form from 'react-bootstrap/Form';

function BootstrapCheckbox(props) {
    const { label, name, handleChange, checked, isInvalid, validationContolId, errors, feedback, ...rest } = props;



    // console.log(errors)
    // console.log(checked)


    return (
        <>
              

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        name="tnc"
                        label="Agree to terms and conditions"
                        onChange={handleChange}
                        isInvalid={!!errors.tnc}
                        feedback={errors.tnc}
                        feedbackType="invalid"
                        id="validationtncFormik0"
                        checked={checked}
                    />
                </Form.Group>
        </>
   
    )
}



export default BootstrapCheckbox;