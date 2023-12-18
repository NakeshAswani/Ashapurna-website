import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import premium_budget_villas_in_jodhpur_1681994380 from "../images/premium-budget-villas-in-jodhpur-1681994380.webp"
import ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339 from "../images/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"

export default function Residential() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / projects
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    ashapurna projects
                </h2>
            </Container>
            <Container fluid>
                <Container>
                    <div className='residentialProjects'>
                        <div className="sectionHead mb-5 text-center">
                            <h1 className='text-capitalize fw-semibold mb-5'>Residential Projects</h1>
                            <div className='d-flex justify-content-center gap-3'>
                                <Link className='text-decoration-none p-2 projectActive'>Residential</Link>
                                <Link className='text-decoration-none p-2 text-dark-emphasis'>Commercial</Link>
                                <Link className='text-decoration-none p-2 text-dark-emphasis'>Hospitality</Link>
                                <Link className='text-decoration-none p-2 text-dark-emphasis'>Education</Link>
                            </div>
                        </div>
                        <Row>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Container fluid className='residentialTownship'>
                <Container>
                    <div className='residentialProjects'>
                        <div className="sectionHead mb-5 text-center">
                            <h1 className='text-capitalize fw-semibold mb-5'>Residential Townships</h1>
                        </div>
                        <Row>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Container fluid>
                <Container>
                    <div className='residentialProjects'>
                        <div className="sectionHead mb-5 text-center">
                            <h1 className='text-capitalize fw-semibold mb-5'>Residential Flats</h1>
                        </div>
                        <Row>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_budget_villas_in_jodhpur_1681994380} alt="premium_budget_villas_in_jodhpur_1681994380" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339} alt="ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna anmol I,II,III</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near new high court, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                possession soon
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
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