import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Thumbnail_oct_2023_1700632516 from "../images/Thumbnail_oct_2023-1700632516.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Newsletter() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / newsletter
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    newsletter
                </h2>
            </Container>
            <Container fluid>
                <Container>
                    <div className='newsletter'>
                        <div className='sectionHead mb-5 text-center'>
                            <h1 className='text-capitalize fw-semibold mb-4'>Ashapurna Newsletters</h1>
                        </div>
                        <Row className='g-4'>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='rounded-3 shadow newsletterBlock'>
                                    <Row className='w-100 g-0'>
                                        <Col lg="6">
                                            <figure className='m-0'>
                                                <img src={Thumbnail_oct_2023_1700632516} alt="Thumbnail_oct_2023_1700632516" className='img-fluid rounded-start-3' />
                                            </figure>
                                        </Col>
                                        <Col lg="6">
                                            <div className='p-4'>
                                                <h5 className='mb-4'>Newsletter October 2023</h5>
                                                <Link className='text-decoration-none fw-semibold'>
                                                    Read More
                                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}