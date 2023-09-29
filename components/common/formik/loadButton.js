import { Spinner } from "react-bootstrap"
import { useEffect, useState } from 'react'

// import Button from "react-bootstrap/Button"


export default function LoadButton(props) {


    const { bname, classextra, bgColor, type, isLoading, ...rest } = props

    const [isLoad, setIsLoad] = useState(isLoading)

    // console.log(isLoading)

    useEffect(() => {
        setIsLoad(isLoading)
    }, [isLoading])


    if (isLoading) {
        return (<>

            <button disabled="disabled" className={classextra} type={type} {...rest}  style={{ backgroundColor:"#89F19A"}} >
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> {bname}  </button>
        </>)
    } else {


        return (
            <>
                <button style={{ textTransform: 'capitalize' }} className={classextra} type={type} {...rest} >{bname}</button>
            </>

        )

    }
}