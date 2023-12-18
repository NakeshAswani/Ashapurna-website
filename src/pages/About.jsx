import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ashapurna_buildcon_corporate_office_1681628091 from "../images/ashapurna-buildcon-corporate-office-1681628091.webp"
import experience_check from "../images/experience-check.svg"
import villas_completed from "../images/villas-completed.svg"
import happy from "../images/happy.svg"
import units from "../images/units.svg"
import ashapurna_heritage_buy_villa_in_jodhpur_1681985498 from "../images/ashapurna-heritage-buy-villa-in-jodhpur-1681985498.webp"
import ashapurna_heritage_logo_1677495446 from "../images/ashapurna-heritage-logo-1677495446.webp"
import ashapurna_basera_1681994295 from "../images/ashapurna-basera-1681994295.webp"
import ashapurna_basera_phase_ii_logo_1677495521 from "../images/ashapurna-basera-phase-ii-logo-1677495521.webp"
import ashapurna_empire_flats_in_jaipur_1681995100 from "../images/ashapurna-empire-flats-in-jaipur-1681995100.webp"
import ashapurna_empire_apartments_in_jaipur_logo_1677495242 from "../images/ashapurna-empire-apartments-in-jaipur-logo-1677495242.webp"
import premium_township_in_pachpadra_1681987454 from "../images/premium-township-in-pachpadra-1681987454.webp"
import ashapurna_township_pachpadra_logo_1677495132 from "../images/ashapurna-township-pachpadra-logo-1677495132.webp"
import best_township_in_jodhpur_1681994962 from "../images/best-township-in-jodhpur-1681994962.webp"
import img4db83251_b9ff_4db3_9e89_8a9f6a872165_1669179075 from "../images/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp"
import ourvision from "../images/ourvision.png"
import ourmission from "../images/ourmission.png"

export default function About() {
    var settings2 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / about us
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    about us
                </h2>
            </Container>
            <Container fluid className='aboutUs'>
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={ashapurna_buildcon_corporate_office_1681628091} alt="ashapurna_buildcon_corporate_office_1681628091" className='img-fluid' />
                        </Col>
                        <Col lg="6" className='ps-5'>
                            <div className='sectionHead mb-4'>
                                <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                    about us
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold'>welcome to ashapurna</h1>
                            </div>
                            <article className='mb-3'>
                                Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 40 projects and has delivered 36 projects spanning 75,00,000 square feet, housing more than 25,000 smiling and satisfied faces.
                            </article>
                            <article>
                                Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the <Link to={"/"} className='text-decoration-none'> Top 10 Real Estate Companies in Rajasthan </Link>. In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.
                            </article>
                        </Col>
                    </Row>
                    <div className='aboutUsPageBar py-5 px-3 mt-5'>
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
            <Container fluid className='aboutFeature'>
                <Container className='py-5'>
                    <div className='my-5'>
                        <h2 className='text-capitalize text-center fw-semibold mb-4'>featured projects</h2>
                        <Slider {...settings2}>
                            <div className='px-1'>
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={ashapurna_heritage_buy_villa_in_jodhpur_1681985498} alt="ashapurna_heritage_buy_villa_in_jodhpur_1681985498" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize fewUnitsLeft'>few units left</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_heritage_logo_1677495446} alt="ashapurna_heritage_logo_1677495446" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna heritage</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            basni benda, airport road,...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                few units left
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={ashapurna_empire_flats_in_jaipur_1681995100} alt="ashapurna_empire_flats_in_jaipur_1681995100" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize readyToOccupy'>ready to move</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_empire_apartments_in_jaipur_logo_1677495242} alt="ashapurna_empire_apartments_in_jaipur_logo_1677495242" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna empire</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            vaishali nagar, jaipur, rajasthan,302021
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                ready to move
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={ashapurna_basera_1681994295} alt="ashapurna_basera_1681994295" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize readyToOccupy'>ready to occupy</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_basera_phase_ii_logo_1677495521} alt="ashapurna_basera_phase_ii_logo_1677495521" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna basera</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            sangaria bypass rd, pal
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                ready to occupy
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={premium_township_in_pachpadra_1681987454} alt="premium_township_in_pachpadra_1681987454" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>booking open</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={ashapurna_township_pachpadra_logo_1677495132} alt="ashapurna_township_pachpadra_logo_1677495132" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna pachpadra</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            near HRRL Township, rajasthan
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                booking open
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                    <img src={best_township_in_jodhpur_1681994962} alt="best_township_in_jodhpur_1681994962" className='img-fluid rounded-3' />
                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={img4db83251_b9ff_4db3_9e89_8a9f6a872165_1669179075} alt="img4db83251_b9ff_4db3_9e89_8a9f6a872165_1669179075" height={"30px"} />
                                            <h6 className='fw-semibold text-capitalize'>ashapurna NRI</h6>
                                        </div>
                                        <article className='text-capitalize'>
                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                            main pali haighway, jodhpur
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                            <article>
                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                few units left
                                            </article>
                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                <article>see all</article>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </Container>
            <Container fluid className='visionMission'>
                <Container>
                    <Row className='gx-5'>
                        <Col lg="6">
                            <Row className='py-3 bg-white'>
                                <Col lg="4" className='p-0'>
                                    <img src={ourvision} alt="ourvision" className='img-fluid' />
                                </Col>
                                <Col lg="8" className='pe-3 ps-4'>
                                    <h4 className='text-uppercase fw-semibold mb-3'>
                                        our vision
                                        <span className='d-block mt-2'></span>
                                    </h4>
                                    <article>
                                        To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.
                                    </article>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6">
                            <Row className='py-3 bg-white'>
                                <Col lg="4" className='p-0'>
                                    <img src={ourmission} alt="ourmission" className='img-fluid' />
                                </Col>
                                <Col lg="8" className='pe-3 ps-4'>
                                    <h4 className='text-uppercase fw-semibold mb-3'>
                                        our mission
                                        <span className='d-block mt-2'></span>
                                    </h4>
                                    <article>
                                        To offer quality and refined workmanship in both product and service plus maintain the highest level of professionalism while dealing with customers, employees and associates.
                                    </article>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='achievements'>
                <Container>
                    <Row>
                        <Col lg="7" className='ms-auto'>
                            <div className='bg-white ps-4 pe-3 py-4'>
                                <h3 className='text-capitalize fw-semibold'>our achievement</h3>
                                <article className='mb-3'>
                                    “Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”
                                </article>
                                <article>
                                    Dignitaries Present: Dr. Bhishma Narayan Singh, Former Governor, Tamil Nadu; Dr. GVG Krishnamoorti, Former Chief Election Commissioner, Government of India and Jogendra Singh, Former CBI Director
                                </article>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}