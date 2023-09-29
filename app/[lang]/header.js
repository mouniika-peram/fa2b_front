"use client"
import dynamic from "next/dynamic";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from "universal-cookie";
import LoginModal from "../../components/common/Login/LoginModal";
import { useContext, useState, useEffect } from "react";

import { useRouter } from 'next/navigation'
import { Auth } from './context/authcontext';
// import Link from '@/node_modules/next/link';
import Link from 'next/link'

import { ChkPerm } from "../../components/common/formik/userpermissioncheck";

import { usePathname, redirect,useSearchParams } from 'next/navigation';


const LoginComponent = dynamic(() => import("../../components/common/Login/LoginComponent"), { ssr: false });


export default function Header({ lang }) {

  

    const pathname = usePathname();

 

    const router = useRouter()

    

    const adminChkPerm = ChkPerm("qr")

    const cookies = new Cookies()

    // console.log(cookies?.get("token"))
    // console.log(Auth?.state)

    const authen = useContext(Auth)
    const [isAuth, setIsAuth] = useState(authen.state)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const changeLang = e => {
        let pathname1 = pathname.slice(3);
        router.push(`/${e}${pathname1}`)
    };


    // console.log(navigator?.language) 

    const langTitle = <>



        <span style={{ verticalAlign: "middle" }}>
            {lang}
        </span>
    </>

  

    return (
        // isClient ?
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">fa2b</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            // onSelect={handleSelect}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="2" title="Item">
                                    NavLink 2 content
                                </Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={"admin"} className="text-capitalize" id="collasible-nav-dropdown">
                            <NavDropdown.Item >

                                    <Link href={`/${lang}/product/create`}>
                                        Product Create
                                    </Link>
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item>
                                    <Link href={`/${lang}/product`}>
                                        Product List
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href={`/${lang}/EventType/create`}>
                                    EventType Create
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href={`/${lang}/EventType`}>
                                    EventType List
                                </Link>
                                </NavDropdown.Item> */}
                            </NavDropdown>


                            <NavDropdown title={langTitle || "en"} className="text-uppercase" id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => changeLang("en")}> {("english")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLang('es')}> {("spanish")}</NavDropdown.Item>
                            </NavDropdown>


                        </Nav>


                        <div className="d-flex">
                            <Nav.Link>

                                <LoginComponent isAuth={isAuth} />


                            </Nav.Link>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            // : ''
    )
}
