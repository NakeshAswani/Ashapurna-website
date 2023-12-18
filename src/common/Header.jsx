import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import logo from "../images/logo.webp"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="shadow py-0">
                    <Container className='position-relative'>
                        <Navbar.Brand href="/" className='shadow-sm position-absolute top-0 start-0 py-0'>
                            <img src={logo} alt="logo" className='w-100' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="py-3 justify-content-end align-items-center gap-4 flex-grow-1">
                                    <Nav.Link href="/" className='position-relative'>
                                        Home
                                        <span className='w-100 position-absolute start-0'></span>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='position-relative'>
                                        About Us
                                        <ul className='subMenu position-absolute d-none py-2 px-0 bg-white border-2 border-top border-bottom'>
                                            <li className='py-2 px-4'>
                                                <Link to={"/About"}>
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/OurJourney"}>
                                                    Our Journey
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/ManagementSpeaks"}>
                                                    Management Speaks
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/OurTeam"}>
                                                    Our Team
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/CsrSocialResponsibility"}>
                                                    CSR Social Responsibility
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/Newsletter"}>
                                                    Newsletter
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/NriCorner"}>
                                                    NRI Corner
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/WhyInvest"}>
                                                    Why Invest in Jodhpur?
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={"/"}>
                                                    Corporate Profile
                                                </Link>
                                            </li>
                                        </ul>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='position-relative'>
                                        Projects
                                        <ul className='subMenu position-absolute d-none py-2 px-0 bg-white border-2 border-top border-bottom'>
                                            <li className='py-2 px-4'>
                                                <Link to={"/Residential"}>
                                                    Residential
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={""}>
                                                    Commercial
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={""}>
                                                    Rental & Lease
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={""}>
                                                    Hospitality
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={""}>
                                                    Education
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={""}>
                                                    Windmills
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={""}>
                                                    NRI township
                                                </Link>
                                            </li>
                                            <li className='py-2 px-4'>
                                                <Link to={""}>
                                                    Upcoming Projects
                                                </Link>
                                            </li>
                                        </ul>
                                    </Nav.Link>
                                    <Nav.Link href="/MediaAndEvents" className='position-relative'>
                                        Media and Events
                                        <span className='w-100 position-absolute start-0'></span>
                                    </Nav.Link>
                                    <Nav.Link href="/Blogs" target='_blank' className='position-relative'>
                                        Blogs
                                        <span className='w-100 position-absolute start-0'></span>
                                    </Nav.Link>
                                    <Nav.Link href="/ContactUs" className='position-relative'>
                                        Contact Us
                                        <span className='w-100 position-absolute start-0'></span>
                                    </Nav.Link>
                                    <Nav.Item>
                                        <button className='rounded-2 fs-6 text-white text-uppercase fw-medium'>Enquire</button>
                                    </Nav.Item>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </header>
    )
}