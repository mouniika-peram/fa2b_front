
function ErrorMsg(props) {



    return (
        <div className="text-danger pl-1 small text-capitalize col-12">
            {props.children}
        </div>
    )
}

export default ErrorMsg;
