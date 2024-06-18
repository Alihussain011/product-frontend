// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { useState } from "react";
import { Footer } from "../Footer";
import { Container } from "react-bootstrap";

const Layout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);console.log("handle state",show);}

  return (
    <Container fluid className="p-0 m-0">
        <Header handleShow={handleShow}/>
        <Outlet context={[show,handleClose,handleShow]}/>
        <Footer/>
    </Container>
  )
}
export default Layout
