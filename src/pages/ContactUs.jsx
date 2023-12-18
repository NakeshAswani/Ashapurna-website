import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / contact us
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    contact us
                </h2>
            </Container>
            <Container fluid className='contactUs'>
                <Container>
                    <div className='sectionHead mb-5 text-center'>
                        <h1 className='text-capitalise fw-semibold mb-3'>Get In Touch</h1>
                        <article>
                            To request a quote, contact us directly or fill out the form and we will get back to you promptly.
                        </article>
                    </div>
                    <Row className='align-items-start mb-5'>
                        <Col lg="4">
                            <div className='shadow p-4 rounded-2 cdBlock'>
                                <Row className='align-items-center'>
                                    <Col lg="3">
                                        <div>
                                            <FontAwesomeIcon icon={faEnvelope} className='fs-3 p-3 shadow rounded-circle text-white' />
                                        </div>
                                    </Col>
                                    <Col lg="9">
                                        <div>
                                            <h5 className='text-capitalize'>email</h5>
                                            <Link to={"mailto:marketing@ashapurna.com"} className='text-white text-decoration-none'>marketing@ashapurna.com</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className='shadow p-4 rounded-2 cdBlock'>
                                <Row className='align-items-center'>
                                    <Col lg="3">
                                        <div>
                                            <FontAwesomeIcon icon={faLocationDot} className='fs-3 p-3 shadow rounded-circle text-white' />
                                        </div>
                                    </Col>
                                    <Col lg="9">
                                        <div>
                                            <h5 className='text-capitalize'>address</h5>
                                            <Link to={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457918.34401696065!2d73.037212!3d26.278306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sus!4v1674640627695!5m2!1sen!2sus"} className='text-white text-decoration-none'>-, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className='shadow p-4 rounded-2 cdBlock'>
                                <Row className='align-items-center'>
                                    <Col lg="3">
                                        <div>
                                            <FontAwesomeIcon icon={faPhone} className='fs-3 p-3 shadow rounded-circle text-white' />
                                        </div>
                                    </Col>
                                    <Col lg="9">
                                        <div>
                                            <h5 className='text-capitalize'>support</h5>
                                            <div className='text-white'>
                                                <Link to={"tel:9314041747"} className='text-white text-decoration-none'>9314041747</Link>, <Link to={"tel:0291-2514747"} className='text-white text-decoration-none'>0291-2514747</Link>, <Link to={"tel:9610383747"} className='text-white text-decoration-none'>9610383747</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <div className='contactUsMap'>
                                <h4 className='mb-4'>Find Us On Map</h4>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d915836.6880339213!2d73.037212!3d26.278306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941f34ed8648e03%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sus!4v1702816838020!5m2!1sen!2sus" height={"414px"} className='w-100 border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Ashapurna Buildcon Ltd Corporate office map location'></iframe>
                            </div>
                        </Col>
                        <Col lg="6">
                            <form className='px-3 py-4 rounded-2 contactForm'>
                                <div className='sectionHead mb-4'>
                                    <h6 className='fw-normal mb-0 d-flex align-items-center'>
                                        Write to us!
                                        <span className='ms-4'></span>
                                    </h6>
                                    <h1 className='text-capitalize fw-medium'>Have A Question?</h1>
                                </div>
                                <Row className='w-100 g-4'>
                                    <Col lg="6">
                                        <input type="text" placeholder='Name' className='w-100 p-2 rounded-1 border border-1 border-dark-subtle' />
                                    </Col>
                                    <Col lg="6">
                                        <input type="email" placeholder='Email' className='w-100 p-2 rounded-1 border border-1 border-dark-subtle' />
                                    </Col>
                                    <Col lg="6">
                                        <input type="tel" placeholder='Phone' className='w-100 p-2 rounded-1 border border-1 border-dark-subtle' />
                                    </Col>
                                    <Col lg="6">
                                        <select className='w-100 p-2 rounded-1 border border-1 border-dark-subtle'>
                                            <option>Subject</option>
                                            <option>Site Enquiry</option>
                                            <option>Management</option>
                                            <option>Other</option>
                                        </select>
                                    </Col>
                                    <Col lg="12">
                                        <textarea placeholder='Message' className='w-100 p-2 rounded-1 border border-1 border-dark-subtle'></textarea>
                                    </Col>
                                    <Col lg="12">
                                        <button className='d-block mx-auto py-3 px-5 border border-1 rounded-2 text-white text-uppercase fs-5'>submit</button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}