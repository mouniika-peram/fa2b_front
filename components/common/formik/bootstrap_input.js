
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function BootstrapInput(props) {



    const { custom, label, validationContolId, md, sm, lg, ...rest } = props;




    return (
        <>
            {
                custom
                    ? <>
                        {
                            label && <Form.Label>{label}</Form.Label>
                        }
                        <InputComponent {...rest} />

                    </>
                    :
                    <>
                        <Form.Group as={Col} md={md} sm={sm} lg={lg} controlId={validationContolId}>
                            {
                                label && <Form.Label>{label}</Form.Label>
                            }
                            <InputComponent {...rest} />
                        </Form.Group>
                    </>}


        </>



    )








}

function InputComponent(props) {

    const { label, type, name, values, onBlur, handleChange, fieldsucmsg, fielderrormsg, validationContolId, isValid, isInvalid, custom, formGroupCss, ...rest } = props


    return (<>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control type={type} name={name} onChange={handleChange} onBlur={onBlur} isValid={isValid} isInvalid={isInvalid} {...rest} />

        <Form.Control.Feedback>
            {fieldsucmsg}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            {fielderrormsg}
        </Form.Control.Feedback>
    </>)
}