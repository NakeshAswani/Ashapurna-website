import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import experience_check from "../images/experience-check.svg"
import villas_completed from "../images/villas-completed.svg"
import happy from "../images/happy.svg"
import units from "../images/units.svg"

export default function OurJourney() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / our journey
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    our journey
                </h2>
            </Container>
            <Container fluid className='briefJourney'>
                <Container>
                    <Row>
                        <Col lg="7" className='ms-auto'>
                            <div className='bg-white ps-4 pe-3 py-4'>
                                <div className='sectionHead mb-4'>
                                    <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                        our journey
                                        <span className='ms-4'></span>
                                    </h6>
                                    <h1 className='text-capitalize fw-semibold'>A Brief About Our Journey</h1>
                                </div>
                                <article className='mb-3'>
                                    Ashapurna started its journey in 1996 and registered as a Private Limited Company. After a year it turned into a Limited Company. We are proud that Ashapurna Buildcon Ltd. became the first ISO: 9001: 2000 Certified Company of western Rajasthan in the year 2004. Ashapurna Started its first project of 400 Villas / Plot in 1997 and completed it within the record time period of 18 months.
                                </article>
                                <article>
                                    Then in a series every project that was started, was completed within an 18-month period. Till now a total of 42 projects consisting of around 6000 Villas, and around 18,000 Plots in various Residential townships / Commercial malls / Residential Multistoried complexes have already been completed and handed over to the respective customers. Shri Karan Singh Unchiyarda is also a recognized person in the hospitality sector as a renowned hotelier. The prestigious three-star comforts Residency Palace Hotel is a unique landmark in the city of Jodhpur.
                                </article>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='ourJourneyAboutUs pt-0'>
                <Container>
                    <div className='aboutUsPageBar py-5 px-3'>
                        <Row>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={experience_check} alt="experience_check" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>26+</h3>
                                <article className='fw-medium text-white text-center'>Years Of Experience</article>
                            </Col>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={villas_completed} alt="villas_completed" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>40+</h3>
                                <article className='fw-medium text-white text-center'>Projects Completed</article>
                            </Col>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={happy} alt="happy" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>26000+</h3>
                                <article className='fw-medium text-white text-center'>Happy Families</article>
                            </Col>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={units} alt="units" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>11000+</h3>
                                <article className='fw-medium text-white text-center'>Units</article>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Container fluid>
                <Container>
                    <h2 className='fw-semibold text-center mb-4'>Our Flourishing Journey Over The Last Decade</h2>
                    <div className='journey mx-auto position-relative my-5'>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2022</h2>
                            <ul className='text-start'>
                                <li>Ashapurna NRI</li>
                                <li>Ashapurna Township Pachpadra</li>
                                <li>Ashapurna Kundan Villa</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2021</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Aangan II</li>
                                <li>Ashapurna Aangan Prime</li>
                                <li>Ashapurna Anmol III</li>
                                <li>Ashapurna Enclave II</li>
                                <li>Ashapurna NRI</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2020</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Anmol I & II</li>
                                <li>Ashapurna Angan I</li>
                                <li>Mohangarh Resort</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2019</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Nano Plaza I & II</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2018</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Basera II</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2017</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Basera</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2016</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Nano Ragiment</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2015</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Heritage</li>
                                <li>Ashapurna Nano Avenue</li>
                                <li>Wind Mills, Jaisalmer Solar Plant</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2014</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Crown Plaza, Barmer</li>
                                <li>Ashapurna Golden Valley</li>
                                <li>Budda Group of Institutions, Udaipur</li>
                                <li>Ashapurna Nanomax II</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2013</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Chandan Vihar, Jaipur</li>
                                <li>Ashapurna Nano Grand</li>
                                <li>Ashapurna Platinum</li>
                                <li>Ashapurna City IV</li>
                                <li>Ashapurna Hotel, Jaipur</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2012</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Empire</li>
                                <li>Ashapurna City II</li>
                                <li>Ashapurna Paradise</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2011</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Nanomax I</li>
                                <li>Ashapurna City II</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2010</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Greens</li>
                                <li>Ashapurna Enclave</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2009</h2>
                            <ul className='text-start'>
                                <li>Mohan Villas</li>
                                <li>Maa Bhagawati Nagar</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2008</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Commercial</li>
                                <li>Tripolia Ashapurna Tower</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2007</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Mall & Multiplex</li>
                                <li>Ashapurna Township Sheoganj</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2006</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Township Pali</li>
                                <li>Ashapurna Valley</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2005</h2>
                            <ul className='text-start'>
                                <li>Ashapurna City</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>2004</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Nagar</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>1999</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Township Jalore</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 text-center journeyBlock rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>1997</h2>
                            <ul className='text-start'>
                                <li>Ashapurna Shikargarh</li>
                            </ul>
                            <div className='journeyDot1 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                        <div className='shadow bg-white p-4 ms-auto text-center journeyBlock journeyBlock1 rounded-4 position-relative'>
                            <h2 className='fw-semibold mx-auto'>1996</h2>
                            <ul className='text-start'>
                                <li>Hotel Residency Palace</li>
                            </ul>
                            <div className='journeyDot2 d-flex justify-content-center align-items-center rounded-circle position-absolute top-50'>
                                <div className="journeyDotInner rounded-circle"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}