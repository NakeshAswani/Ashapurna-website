import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import karanSingh from "../images/6e449cbb-2eb8-4888-b0d6-bd7d77d8f039-1669299130.jpg"
import quote from "../images/quotes.png"

export default function ManagementSpeaks() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / management speaks
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    our management
                </h2>
            </Container>
            <Container fluid>
                <Container>
                    <div className='managementSpeaks'>
                        <div className='sectionHead mb-5 text-center'>
                            <h1 className='text-capitalize fw-semibold'>Board Of Directors</h1>
                            <article className='text-start'>
                                Ashapurna Group is a socially responsible company. The group is active in almost all spheres of society and works on the ground level to bring about meaningful change. Ashapurna has worked in the fields of health, education, social awareness, and environment. During the challenging time of Covid, the group has worked hand in hand with government and non-government agencies. Ashapurna understands its responsibility and always strives hard to be with society in times of need.
                            </article>
                        </div>
                        <Row className='mb-5'>
                            <Col lg="7">
                                <div className='pt-4 px-5 position-relative managementSpeaksBlock'>
                                    <div className='sectionHead mb-3'>
                                        <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                            cmd
                                            <span className='ms-4'></span>
                                        </h6>
                                        <h3 className='text-capitalize fw-bolder'>Shri Karan Singh Uchiyarda</h3>
                                    </div>
                                    <article className='mb-2'>
                                        Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for...
                                    </article>
                                    <button className='py-2 px-3 border-1 rounded-1 text-white'>Read More</button>
                                    <div className='position-absolute bottom-0 end-0 mb-3 me-2'>
                                        <img src={quote} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg="5">
                                <figure className='rounded-circle text-center'>
                                    <img src={karanSingh} alt="karanSingh" className='rounded-circle' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='flex-row-reverse'>
                            <Col lg="7">
                                <div className='pt-4 px-5 position-relative managementSpeaksBlock'>
                                    <div className='sectionHead mb-3'>
                                        <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                            cmd
                                            <span className='ms-4'></span>
                                        </h6>
                                        <h3 className='text-capitalize fw-bolder'>Shri Karan Singh Uchiyarda</h3>
                                    </div>
                                    <article className='mb-2'>
                                        Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for...
                                    </article>
                                    <button className='py-2 px-3 border-1 rounded-1 text-white'>Read More</button>
                                    <div className='position-absolute bottom-0 end-0 mb-3 me-2'>
                                        <img src={quote} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg="5">
                                <figure className='rounded-circle text-center'>
                                    <img src={karanSingh} alt="karanSingh" className='rounded-circle' />
                                </figure>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}