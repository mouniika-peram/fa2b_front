
// if pages are in use-client then only this function will work for server components this function won't work
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";


export const ChkPerm = (e) => {
    const cookies = new Cookies()
    // console.log(cookies.get("token"))
    if (cookies.get("token")) {
        const token = cookies.get("token")
        const decoded = jwt_decode(token);
        const scope = decoded.scopes;
        // console.log(scope)

        if (scope) {
            if (scope.includes(e)) {
                return true;
            }
            else {
                return false;
            }
        }
    } else {
        return false 
    }
}




