import React from 'react'
import LoginModal from "./LoginModal";

function LoginComponent({ isAuth }) {
    return (
        <div>
            {
                isAuth?.isLogin
                    // cookies.get("token")
                    ?
                    "Logout"

                    : <LoginModal key="cs" button={false} classextra="btn btn-light" bname={"Login"} />


            }

        </div>
    )
}

export default LoginComponent