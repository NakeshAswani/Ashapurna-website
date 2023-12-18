import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ffe726b1_c8b0_4798_8c89_ebad0cb7ebf3_1673702923 from "../images/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className='container-fluid p-0'>
            <div className="footerTop py-5">
                <Container>
                    <Row className='border-bottom mb-4'>
                        <Col lg="4" className='border-end'>
                            <img src={ffe726b1_c8b0_4798_8c89_ebad0cb7ebf3_1673702923} alt="ffe726b1_c8b0_4798_8c89_ebad0cb7ebf3_1673702923" className='mb-3' />
                            <div className='d-flex align-items-center gap-2 mb-3 text-white'>
                                <figure className='d-flex justify-content-center align-items-center p-3 mb-0 border border-1'>
                                    <FontAwesomeIcon icon={faPhone} className='text-white fs-5' />
                                </figure>
                                <div>
                                    <Link to={"tel:9314041747"} className='text-white text-decoration-none'>9314041747</Link><br />
                                    <Link to={"tel:0291-2514747"} className='text-white text-decoration-none'>0291-2514747</Link>,&nbsp;&nbsp;
                                    <Link to={"tel:9610383747"} className='text-white text-decoration-none'>9610383747</Link>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-2 mb-3'>
                                <figure className='d-flex justify-content-center align-items-center p-3 mb-0 border border-1'>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className='text-white fs-5' />
                                </figure>
                                <Link to={"mailto:marketing@ashapurna.com"} className='text-white text-decoration-none'>marketing@ashapurna.com</Link>
                            </div>
                            <div className='d-flex align-items-center gap-2 mb-3'>
                                <figure className='d-flex justify-content-center align-items-center p-3 mb-0 border border-1'>
                                    <FontAwesomeIcon icon={faLocationDot} className='text-white fs-5' />
                                </figure>
                                <Link to={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457918.34401696065!2d73.037212!3d26.278306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sus!4v1674640627695!5m2!1sen!2sus"} className='text-white text-decoration-none'>-, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011</Link>
                            </div>
                        </Col>
                        <Col lg="8" className='ps-4'>
                            <h5 className='text-white text-capitalize fw-medium mb-3'>
                                useful links
                                <span className='d-block mt-2 position-relative'>
                                    <span className='d-block w-50 position-absolute start-0'></span>
                                </span>
                            </h5>
                            <div className='mb-4'>
                                <span>Residental Projects</span> &nbsp;|&nbsp; <span>Commercial Projects</span> &nbsp;|&nbsp; <span>Investors Club</span> &nbsp;|&nbsp; <span>NRI Corner</span> &nbsp;|&nbsp; <span>Career</span> &nbsp;|&nbsp; <span>Become A Partner</span> &nbsp;|&nbsp; <span>Our Testimonials</span> &nbsp;|&nbsp; <span>Privacy Policy</span> &nbsp;|&nbsp; <span>Terms & Conditions</span>
                            </div>
                            <h5 className='text-white text-capitalize fw-medium mb-3'>
                                important links
                                <span className='d-block mt-2 position-relative'>
                                    <span className='d-block w-50 position-absolute start-0'></span>
                                </span>
                            </h5>
                            <div>
                                <span>Social Responsibility</span> &nbsp;|&nbsp; <span>Corporate Profile</span> &nbsp;|&nbsp; <span>Why Invest In Jodhpur?</span> &nbsp;|&nbsp; <span>RERA Disclaimer</span> &nbsp;|&nbsp; <span>EMI Calculator</span> &nbsp;|&nbsp; <span>Referral Scheme</span>
                            </div>
                        </Col>
                    </Row>
                    <h5 className='text-white text-capitalize text-center fw-bold mb-3'>follow us on</h5>
                    <div className='d-flex justify-content-center gap-2'>
                        <Link to={"https://www.facebook.com/AshapurnaBuildconLtd"} className='bg-white rounded-circle d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link to={"https://www.instagram.com/ashapurnabuildconltd/"} className='bg-white rounded-circle d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to={"https://www.youtube.com/AshapurnaBuildconLtd"} className='bg-white rounded-circle d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        <Link to={"https://twitter.com/ashapurnabl"} className='bg-white rounded-circle d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to={"https://in.pinterest.com/ashapurnabuildconltd/"} className='bg-white rounded-circle d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faPinterestP} />
                        </Link>
                        <Link to={"https://www.linkedin.com/company/ashapurnabuildconltd/"} className='bg-white rounded-circle d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                    </div>
                </Container>
            </div>
            <div className="footerBottom py-5">
                <Container className='text-center'>
                    <div className='pb-4'>
                        <span style={{margin: "0px 36px"}}>Real Estate Developer In Jodhpur</span> | <span style={{margin: "0px 36px"}}>Top Builders In Jodhpur</span> | <span style={{margin: "0px 36px"}}>Top Residental Projects In Jodhpur</span> | <span style={{margin: "0px 36px"}}>Commercial Property In Jodhpur</span> | <span style={{margin: "0px 36px"}}>Houses In Rajasthan</span> | <span style={{margin: "0px 36px"}}>Flats In Jodhpur</span> | <span style={{margin: "0px 36px"}}>Villas In Jodhpur</span> | <span style={{margin: "0px 36px"}}>Plots In Jodhpur</span> | <span style={{margin: "0px 36px"}}>2BHK Flats In Jodhpur</span> | <span style={{margin: "0px 36px"}}>JDA Property In Jodhpur</span> | <span style={{margin: "0px 36px"}}>Property Type</span> | <span style={{margin: "0px 36px"}}>Properties In Jodhpur</span>
                    </div>
                    <hr className='w-50 mx-auto' />
                    <article className='pt-4'>
                        The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, if so warranted.
                    </article>
                </Container>
            </div>
            <div className="footerLine">
                <Container>
                    <Row className='py-3'>
                        <Col lg="6">
                            <article>
                                Copyright © 2023 Ashapurna Buildcon Limited
                            </article>
                        </Col>
                        <Col lg="6">
                            <article className='text-end'>
                                Design and Developed by WS Cube Tech
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}