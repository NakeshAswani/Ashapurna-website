import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { BaseURL } from '../api/baseURL';

export default function About() {
    let [aboutPath, setAboutPath] = useState('')
    let [aboutData, setAboutData] = useState('')
    let [featurePath, setFeaturePath] = useState('')
    let [featureData, setFeatureData] = useState([])
    let aboutPageData = () => {
        axios.post(BaseURL + 'about-us')
            .then((res) => res.data)
            .then((finalRes) => {
                let finalData = finalRes._data;
                // about path and data is set
                setAboutPath(finalData.about_us_image_path);
                setAboutData(finalData.aboutUs);
                // feature path and data are set
                setFeaturePath(finalData.project_image_path)
                setFeatureData(finalData.areaWeServes)
            })
    }
    useEffect(() => {
        aboutPageData();
    }, [])
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
                            <img src={aboutPath + aboutData.image} alt="ashapurna_buildcon_corporate_office_1681628091" className='img-fluid' />
                        </Col>
                        <Col lg="6" className='ps-5'>
                            <div className='sectionHead mb-4'>
                                <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                    {aboutData.title}
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold'>welcome to ashapurna</h1>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: aboutData.description }} />
                        </Col>
                    </Row>
                    <div className='aboutUsPageBar py-5 px-3 mt-5'>
                        <Row>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={aboutPath + aboutData.year_of_experience_image} alt="experience_check" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>{aboutData.year_of_experience}+</h3>
                                <article className='fw-medium text-white text-center'>{aboutData.year_of_experience_heading}</article>
                            </Col>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={aboutPath + aboutData.project_completed_image} alt="villas_completed" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>{aboutData.project_completed}+</h3>
                                <article className='fw-medium text-white text-center'>{aboutData.project_completed_heading}</article>
                            </Col>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={aboutPath + aboutData.villas_completed_image} alt="happy" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>{aboutData.villas_completed}+</h3>
                                <article className='fw-medium text-white text-center'>{aboutData.villas_completed_heading}</article>
                            </Col>
                            <Col lg="3" className='text-center'>
                                <figure className='bg-white mx-auto d-flex justify-content-center align-items-center mb-3'>
                                    <img src={aboutPath + aboutData.plots_hand_over_image} alt="units" className='w-50' />
                                </figure>
                                <h3 className='fw-bold'>{aboutData.plots_hand_over}+</h3>
                                <article className='fw-medium text-white text-center'>{aboutData.plots_hand_over_heading}</article>
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
                            {
                                featureData.length >= 1
                                    ?
                                    featureData.map((ele, i) => {
                                        return (
                                            <div className='px-1'>
                                                <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                                    <img src={featurePath + ele.project_logo_1} alt={ele.project_logo_1_link} className='img-fluid rounded-3' />
                                                    <span className='position-absolute p-1 rounded-3 text-white text-capitalize' style={{
                                                        background:
                                                            (ele.current_status == "Possession Soon")
                                                                ? "#c49b0f"
                                                                : (ele.current_status == "Ready to Occupy" || ele.current_status == "Ready To Move")
                                                                    ? "#72b426"
                                                                    : (ele.current_status == "Few Units Left")
                                                                        ? "#ff5722"
                                                                        : (ele.current_status == "Booking Open")
                                                                            ? "#062f43"
                                                                            : ""
                                                    }}>{ele.current_status}</span>
                                                    <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <img src={featurePath + ele.project_logo_2} alt="" height={"30px"} />
                                                            <h6 className='fw-semibold text-capitalize'>{ele.name}</h6>
                                                        </div>
                                                        <article className='text-capitalize'>
                                                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                            {ele.address.slice(0, 26)}...
                                                        </article>
                                                        <div className='d-flex justify-content-between align-items-center overviewBarHidden'>
                                                            <article>
                                                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                                                {ele.current_status}
                                                            </article>
                                                            <button className='text-capitalize text-white border-0 py-1 px-2 rounded-2'>
                                                                <article>see all</article>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    ""
                            }
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
                                    <img src={aboutPath+aboutData.our_vision_image} alt="ourvision" className='img-fluid' />
                                </Col>
                                <Col lg="8" className='pe-3 ps-4'>
                                    <h4 className='text-uppercase fw-semibold mb-3'>
                                        {aboutData.our_vision_title}
                                        <span className='d-block mt-2'></span>
                                    </h4>
                                    <div dangerouslySetInnerHTML={{__html: aboutData.our_vision_description}} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6">
                            <Row className='py-3 bg-white'>
                                <Col lg="4" className='p-0'>
                                    <img src={aboutPath+aboutData.our_mission_image} alt="ourmission" className='img-fluid' />
                                </Col>
                                <Col lg="8" className='pe-3 ps-4'>
                                    <h4 className='text-uppercase fw-semibold mb-3'>
                                        {aboutData.our_mission_title}
                                        <span className='d-block mt-2'></span>
                                    </h4>
                                    <div dangerouslySetInnerHTML={{__html: aboutData.our_mission_description}} />
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
                                <h3 className='text-capitalize fw-semibold'>{aboutData.our_achievement_title}</h3>
                                <div dangerouslySetInnerHTML={{__html: aboutData.our_achievement_description}} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}