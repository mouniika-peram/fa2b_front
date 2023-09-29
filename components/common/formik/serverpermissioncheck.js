// That only works in a Server Component but one of its parents is marked with "use client", so it's a Client Component.

import { cookies } from 'next/headers'
import jwt_decode from "jwt-decode";

export const SChkPerm = (e) => {
    const cookieStore = cookies()
    const cookie_token = cookieStore.get('token')
    if (cookie_token?.value) {
        const token = cookie_token?.value
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


