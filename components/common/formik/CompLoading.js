import { Spinner } from "react-bootstrap";

export default function CompLoading({ logo, classProps }) {

    return (
        <div className={`d-flex ${classProps} ${logo && "min_100vh"}`}>
            <div className="m-auto">
                {logo && <img src="/logoimg.png" alt="logo" height="50px" width="200px" className="px-2" />}
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
};