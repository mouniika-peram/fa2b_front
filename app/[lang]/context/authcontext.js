"use client";

import React, { useReducer } from "react";
import Cookies from "universal-cookie";

export const Auth = React.createContext();



export const AuthContextProvider = ({ children }) => {
    const cookies = new Cookies()
    const isAuthen = cookies.get("token") ? true : false

    let initialState = {
        isLogin: isAuthen,
        currency: "INR",
        forex: "1",
        cart: 0,
        symbol: '₹'
    };


    const reducer = (state, action) => {
        switch (action.type) {

            case 'loggedIn':
                return { ...state, isLogin: true, token: cookies.get("token") };

            case "cart": return { ...state, cart: action.cart };

            case 'logOut': const removeCookies = () => {
                cookies.remove("token")
                if (window.location.pathname !== "/") {
                    window.location = "/"
                }
            }
                removeCookies()
                return { ...state, isLogin: false, token: "", };
            default: return state


        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    

    return (<Auth.Provider value={{ state, dispatch }}>

        {children}
    </Auth.Provider>
    )


};

