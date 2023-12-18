import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NriCorner() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / nri corner
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    NRI corner
                </h2>
            </Container>
            <Container fluid>
                <Container>
                    <div className='nriCorner'>
                        <div className='sectionHead mb-5 text-center'>
                            <h1 className='text-capitalize fw-semibold mb-4'>NRI</h1>
                        </div>
                        <Row>
                            <Col lg="6">
                                <div className='nriCornerContent pe-4'>
                                    <div className='sectionHead'>
                                        <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                            nri
                                            <span className='ms-4'></span>
                                        </h6>
                                        <h1 className='text-capitalize fw-semibold mb-4'>NRI Clients <span>Corner</span></h1>
                                        <article className='mb-3'>
                                            A non-resident Indian (NRI) is a citizen of India who holds an Indian passport and has temporarily emigrated to another country for six months or more for employment, residence, education or any other such purpose. A person of Indian origin (PIO) is a person of Indian origin or ancestors but who is not a citizen of India and is the citizen of another country. A PIO might have been a citizen of India and subsequently taken citizenship of another country, or have ancestors born in India or other states. Other terms with vaguely the same meaning are overseas Indian and expatriate India. In common usage, this often includes Indian-born individuals (and also people of other nations with Indian ancestors) who have taken the citizenship of other countries. As per the Ministry of Overseas Indian Affairs, India has the second largest diaspora in the world after overseas Chinese. The overseas Indian community is estimated at 25 million spread across every region of the world.
                                        </article>
                                        <h3 className='mb-3'>Investment destination: India</h3>
                                        <article>
                                            In recent times, India has emerged as one of the popular real estate destinations for global investors. Real estate is one of the booming industries in the country and investment in property is promising and set to flourish in the times to come. It is expected to scale new heights with the emergence of fresh localities in tier-I and II cities.
                                        </article>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <form className='w-100 p-4 border-start border-5 rounded-2 shadow'>
                                    <h4 className='text-uppercase fw-medium mb-3'>nri enquiry</h4>
                                    <article className='mb-3'>
                                        Please fill in the form and we would contact you at the earliest.
                                    </article>
                                    <input type="text" className='w-100 rounded-1 border-1 p-2 mb-4' placeholder="Name" />
                                    <input type="tel" className='w-100 rounded-1 border-1 p-2 mb-4' placeholder="Email" />
                                    <input type="email" className='w-100 rounded-1 border-1 p-2 mb-4' placeholder="Phone" />
                                    <textarea className='w-100 rounded-1 border-1 p-2 mb-4' placeholder="Message"></textarea>
                                    <button className='d-block mx-auto py-3 px-5 border border-1 rounded-1 text-uppercase fs-6 text-white fw-medium'>submit</button>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}