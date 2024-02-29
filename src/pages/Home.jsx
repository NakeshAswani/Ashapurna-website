// https://apiservices.ashapurna.com/api/web/

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
import { faClock, faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import quotes from '../images/quotes.png'
import axios from 'axios';
import { BaseURL } from '../api/baseURL';


export default function Home() {
    let [sliderPath, setSliderPath] = useState('')
    let [sliderData, setSliderData] = useState([])
    let [aboutPath, setAboutPath] = useState('')
    let [aboutData, setAboutData] = useState('')
    let [homePath, setHomePath] = useState('')
    let [homeData, setHomeData] = useState('')
    let [whyPath, setWhyPath] = useState('')
    let [whyData, setWhyData] = useState([])
    let [featuredPath, setFeaturedPath] = useState('')
    let [featuredData, setFeaturedData] = useState([])
    let [amenitiesPath, setAmenitiesPath] = useState('')
    let [projectsPath, setProjectsPath] = useState('')
    let [projectsData, setProjectsData] = useState([])
    let [testimonialPath, setTestimonialPath] = useState('')
    let [testimonialData, setTestimonialData] = useState([])
    let [utsavPath, setUtsavPath] = useState('')
    let [utsavData, setUtsavData] = useState([])
    let homePageData = () => {
        axios.get(BaseURL + 'home')
            .then((res) => res.data)
            .then((finalRes) => {
                let finalData = finalRes._data;
                // slider path and data are set
                setSliderPath(finalData.slider_image_path);
                setSliderData(finalData.getSliders)
                // about path and data are set
                setAboutPath(finalData.about_us_image_path)
                setAboutData(finalData.aboutUs)
                // home path and data are set
                setHomePath(finalData.home_page_image_path)
                setHomeData(finalData.getHomePage)
                // why path and data are set
                setWhyPath(finalData.why_choose_us_image_path)
                setWhyData(finalData.getWhyChooseUs)
                // featured path and data are set
                setFeaturedPath(finalData.project_image_path)
                setFeaturedData(finalData.getFeaturedProjects)
                // amenities path is set
                setAmenitiesPath(finalData.amenities_image_path)
                // projects path and data are set
                setProjectsPath(finalData.project_image_path)
                setProjectsData(finalData.getProjects)
                // testimonial path and data are set
                setTestimonialPath(finalData.testimonial_image_path)
                setTestimonialData(finalData.getTestimonials)
                // utsav path and data are set
                setUtsavPath(finalData.utsav_camps_image_path)
                setUtsavData(finalData.getUtsavCamps)
            })
    }
    useEffect(() => {
        homePageData()
    }, [])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    var settings1 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
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
            <Container fluid id='banner' className='mb-5'>
                <Container>
                    <Slider {...settings}>
                        {
                            sliderData.length >= 1
                                ?
                                sliderData.map((ele, i) => {
                                    return (
                                        <div>
                                            <img src={sliderPath + ele.image} alt="bestTownship" className='w-100' />
                                        </div>
                                    )
                                })
                                :
                                ""
                        }
                    </Slider>
                    <Row className='w-100 mx-auto p-3 shadow-lg'>
                        <Col lg="2">
                            <div>
                                <input type="text" className='w-100 px-2 py-3 border border-dark-subtle rounded-2' placeholder='Name' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="text" className='w-100 px-2 py-3 border border-dark-subtle rounded-2' placeholder='Email' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="text" className='w-100 px-2 py-3 border border-dark-subtle rounded-2' placeholder='Phone' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <select className='w-100 px-2 py-3 border border-dark-subtle rounded-2'>
                                    <option>Select Property</option>
                                    <option>Ashapurna Mohan Bagh</option>
                                    <option>Ashapurna Girls Hostel Mumbai</option>
                                    <option>Buddha Institutions</option>
                                    <option>Ashapurna Clarks Inn</option>
                                    <option>Ashapurna NRI</option>
                                    <option>Ashapurna Crown Plaza</option>
                                    <option>Hotel Residency Palace</option>
                                    <option>Ashapurna Mall</option>
                                    <option>Ashapurna Heritage</option>
                                    <option>Ashapurna Kundan Villa</option>
                                    <option>Ashapurna Palace</option>
                                    <option>Ashapurna Pachpadra</option>
                                    <option>Ashapurna Corporate Office</option>
                                    <option>Ashapurna Anmol I,II,III</option>
                                    <option>Ashapurna Aangan</option>
                                    <option>Ashapurna Basera II Phase</option>
                                    <option>Ashapurna Sheoganj</option>
                                    <option>Ashapurna Nanomax II</option>
                                    <option>Ashapurna Paradise</option>
                                    <option>Ashapurna Empire</option>
                                    <option>Ashapurna Aangan Prime</option>
                                    <option>Ashapurna Platinum</option>
                                    <option>Ashapurna Tower</option>
                                    <option>Ashapurna City</option>
                                    <option>Ashapurna Nano Plaza</option>
                                    <option>Chandan Vihar</option>
                                    <option>Ashapurna Valley</option>
                                    <option>Ashapurna Golden Valley</option>
                                    <option>Ashapurna Nagar</option>
                                    <option>Ashapurna Nano Avenue</option>
                                    <option>Ashapurna Sanchore</option>
                                    <option>Ashapurna Jalore</option>
                                    <option>Ashapurna Township Uchiyarda</option>
                                    <option>Ashapurna Basera</option>
                                    <option>Ashapurna Enclave</option>
                                    <option>Ashapurna Enclave II</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="text" className='w-100 px-2 py-3 border border-dark-subtle rounded-2' placeholder='Explain Your Query' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <button className='w-100 rounded-2 fs-6 text-white text-uppercase fw-medium'>submit</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5 position-relative aboutUsSec'>
                <Container>
                    <Row>
                        <Col lg="5">
                            <figure>
                                <img src={aboutPath + aboutData.homepage_image} alt="about us" className='w-100' />
                            </figure>
                        </Col>
                        <Col lg="7" className='ps-4 pt-3'>
                            <div className='ps-2'>
                                <div className='sectionHead mb-4'>
                                    <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                        {aboutData.homepage_title}
                                        <span className='ms-4'></span>
                                    </h6>
                                    <h1 className='text-capitalize fw-semibold'>{aboutData.homepage_tagline}</h1>
                                </div>

                                <div dangerouslySetInnerHTML={{ __html: aboutData.homepage_description }} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='row-cols-5 p-3 position-absolute aboutBar'>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={homePath + homeData.about_years_experience_image} alt="experience" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>{homeData.about_years_experience_value}+</h3>
                                <article>{homeData.about_years_experience_title}</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={homePath + homeData.about_project_completed_image} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>{homeData.about_project_completed_value}+</h3>
                                <article>{homeData.about_project_completed_title}</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={homePath + homeData.about_happy_families_image} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>{homeData.about_happy_families_value}+</h3>
                                <article>{homeData.about_happy_families_title}</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={homePath + homeData.about_delivered_image} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>{homeData.about_delivered_value}+</h3>
                                <article>{homeData.about_delivered_title}</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={homePath + homeData.about_units_image} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>{homeData.about_units_value}+</h3>
                                <article>{homeData.about_units_title}</article>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='whyAshapura'>
                <Container>
                    <Row className='align-items-center position-relative'>
                        <Col lg="4">
                            <div className='sectionHead mb-2'>
                                <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                    {homeData.why_us_title}
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold'>{homeData.why_us_tagline}</h1>
                            </div>
                            <article>
                                {homeData.why_us_description}
                            </article>
                        </Col>
                        <Col lg="8" className='position-absolute top-0 end-0'>
                            <Row className='ps-5 gx-5 gy-4'>
                                {
                                    whyData.length >= 1
                                        ?
                                        whyData.map((ele, i) => {
                                            return (
                                                <Col lg="6">
                                                    <div className='bg-white rounded-top-4 position-relative'>
                                                        <span className='d-block position-absolute end-0'></span>
                                                        <figure>
                                                            <img src={whyPath + ele.image} alt="propertyCareServices" width="60px" />
                                                        </figure>
                                                        <h4 className='fw-semibold'>
                                                            {ele.title}
                                                            <span className='d-block w-50 my-3'></span>
                                                        </h4>
                                                        <article>
                                                            {ele.short_description}...
                                                            <span className='d-block fs-6 mt-2'>Read More</span>
                                                        </article>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                        :
                                        ""
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='featuredProjects text-white'>
                <Container>
                    <div className='sectionHead mb-4'>
                        <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                            {homeData.our_work_title}
                            <span className='ms-4'></span>
                        </h6>
                        <h1 className='text-capitalize fw-semibold text-white'>{homeData.our_work_tagline}</h1>
                    </div>
                    <Slider {...settings1}>
                        {
                            featuredData.length >= 1
                                ?
                                featuredData.map((ele, i) => {
                                    return (
                                        <div>
                                            <Row>
                                                <Col lg="6">
                                                    <figure className='w-100'>
                                                        <img src={featuredPath + ele.homepage_image} alt="ashapurna_nri_home_page_image_1676441428" className='img-fluid' />
                                                    </figure>
                                                </Col>
                                                <Col lg="6">
                                                    <div>
                                                        <div className='d-flex gap-2 mb-3'>
                                                            <img src={featuredPath + ele.project_logo_2} alt="ashapurnaNriFP" height={"50px"} />
                                                            <h2>{ele.name}</h2>
                                                        </div>
                                                        <article className='mb-3'>
                                                            {ele.short_description}...
                                                        </article>
                                                        <Row className='mb-3'>
                                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                                <img src={amenitiesPath + ele.amenities[0].image} alt="" width={"36px"} />
                                                                <div>
                                                                    <h6 className='text-uppercase mb-1'>{ele.amenities[0].title}</h6>
                                                                    <article className='text-uppercase'>{ele.amenities[0].sub_title}</article>
                                                                </div>
                                                            </Col>
                                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                                <img src={amenitiesPath + ele.amenities[1].image} alt="" width={"36px"} />
                                                                <div>
                                                                    <h6 className='text-uppercase mb-1'>{ele.amenities[1].title}</h6>
                                                                    <article className='text-uppercase'>{ele.amenities[1].sub_title}</article>
                                                                </div>
                                                            </Col>
                                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                                <img src={amenitiesPath + ele.amenities[2].image} alt="" width={"36px"} />
                                                                <div>
                                                                    <h6 className='text-uppercase mb-1'>{ele.amenities[2].title}</h6>
                                                                    <article className='text-uppercase'>{ele.amenities[2].sub_title}</article>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <button className='text-capitalize border-0 text-white py-2 px-3 rounded-3'>
                                                            see all
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                                :
                                ""
                        }
                    </Slider>
                </Container>
            </Container>
            <Container fluid className='overview'>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className='sectionHead mb-4'>
                                <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                    {homeData.project_overview_title}
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold'>{homeData.project_overview_tagline}</h1>
                            </div>
                            <article>
                                {homeData.project_overview_description}
                            </article>
                        </Col>
                        <Col lg="12" className='position-relative'>
                            <Slider {...settings2}>
                                {
                                    projectsData.length >= 1
                                        ?
                                        projectsData.map((ele, i) => {
                                            return (
                                                <div className='px-3'>
                                                    <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                                        <img src={projectsPath + ele.project_logo_1} alt={ele.project_logo_1_link} className='img-fluid rounded-3' />
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
                                                        }}>
                                                            {ele.current_status}
                                                        </span>
                                                        <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                                            <div className='d-flex align-items-center gap-2'>
                                                                <img src={projectsPath + ele.project_logo_2} alt="" height={"30px"} />
                                                                <h6 className='fw-semibold text-capitalize'>{ele.name}</h6>
                                                            </div>
                                                            <article className='text-capitalize'>
                                                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                                {ele.address}
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
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='testimonial'>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg="4">
                            <div className='sectionHead mb-4'>
                                <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                    {homeData.our_testimonial_title}
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold text-white'>{homeData.our_testimonial_tagline}</h1>
                            </div>
                            <article className='text-white mb-4'>
                                {homeData.our_testimonial_description}
                            </article>
                            <Link to={"/testimonial"}>
                                <button className='text-capitalize text-white w-50 py-3 rounded-3'>
                                    see all
                                </button>
                            </Link>
                        </Col>
                        <Col lg="7">
                            <div className='testimonialSlider position-relative'>
                                <Slider {...settings1}>
                                    {
                                        testimonialData.length >= 1
                                            ?
                                            <div className='bg-white px-5 pb-5 position-relative testimonialBlock'>
                                                <div className='d-flex mb-4'>
                                                    <figure className='testimonialImg rounded-circle position-relative me-4'>
                                                        <img src={testimonialPath + testimonialData[0].image} alt="" className='img-fluid rounded-circle' />
                                                    </figure>
                                                    <figcaption className='pt-3'>
                                                        <h5 className='text-capitalize fw-bolder'>{testimonialData[0].name}</h5>
                                                        <article className='text-capitalize fw-medium'>{testimonialData[0].position}</article>
                                                    </figcaption>
                                                </div>
                                                <article className='pb-3 px-1'>
                                                    {testimonialData[0].message}
                                                </article>
                                                <img src={quotes} alt="quotes" className='position-absolute bottom-0 end-0 me-3 mb-2' />
                                            </div>
                                            :
                                            ""
                                    }
                                    {
                                        testimonialData.length >= 1
                                            ?
                                            <div className='bg-white px-5 pb-5 position-relative testimonialBlock'>
                                                <div className='d-flex mb-4'>
                                                    <figure className='testimonialImg rounded-circle position-relative me-4'>
                                                        <img src={testimonialPath + testimonialData[1].image} alt="" className='img-fluid rounded-circle' />
                                                    </figure>
                                                    <figcaption className='pt-3'>
                                                        <h5 className='text-capitalize fw-bolder'>{testimonialData[1].name}</h5>
                                                        <article className='text-capitalize fw-medium'>{testimonialData[1].position}</article>
                                                    </figcaption>
                                                </div>
                                                <article className='pb-3 px-1'>
                                                    {testimonialData[1].message}
                                                </article>
                                                <img src={quotes} alt="quotes" className='position-absolute bottom-0 end-0 me-3 mb-2' />
                                            </div>
                                            :
                                            ""
                                    }
                                    {
                                        testimonialData.length >= 1
                                            ?
                                            <div className='bg-white px-5 pb-5 position-relative testimonialBlock'>
                                                <div className='d-flex mb-4'>
                                                    <figure className='testimonialImg rounded-circle position-relative me-4'>
                                                        <img src={testimonialPath + testimonialData[2].image} alt="" className='img-fluid rounded-circle' />
                                                    </figure>
                                                    <figcaption className='pt-3'>
                                                        <h5 className='text-capitalize fw-bolder'>{testimonialData[2].name}</h5>
                                                        <article className='text-capitalize fw-medium'>{testimonialData[2].position}</article>
                                                    </figcaption>
                                                </div>
                                                <article className='pb-3 px-1'>
                                                    {testimonialData[2].message}
                                                </article>
                                                <img src={quotes} alt="quotes" className='position-absolute bottom-0 end-0 me-3 mb-2' />
                                            </div>
                                            :
                                            ""
                                    }
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='mediaEventSec'>
                <Container>
                    <div className='sectionHead mb-4 d-flex justify-content-between align-items-center'>
                        <h1 className='text-capitalize fw-semibold'>media and event</h1>
                        <button className='py-3 px-5 rounded-3 fw-semibold text-capitalize text-white'>
                            see all
                        </button>
                    </div>
                    <Slider {...settings2}>
                        {
                            utsavData.length >= 1
                                ?
                                utsavData.slice(0,7).map((ele, i) => {
                                    return (
                                        <div className='px-2 py-3'>
                                            <div class="card shadow">
                                                <img src={utsavPath + ele.image} class="card-img-top" alt={ele.alt_image_text} />
                                                <div class="card-body pe-0">
                                                    <h5 className='fw-semibold mb-3 text-capitalize'>{ele.title}</h5>
                                                    <article>
                                                        <FontAwesomeIcon icon={faLocationDot} /> {ele.location}<br />
                                                        <FontAwesomeIcon icon={faClock} /> {ele.date}
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                ""
                        }
                        {/* {
                            utsavData.length >= 1
                                ?
                                <div className='px-2 py-3'>
                                    <div class="card shadow">
                                        <img src={utsavPath + utsavData[1].image} class="card-img-top" alt={utsavData[1].alt_image_text} />
                                        <div class="card-body pe-0">
                                            <h5 className='fw-semibold mb-3 text-capitalize'>{utsavData[1].title.slice(0, 25)}</h5>
                                            <article>
                                                <FontAwesomeIcon icon={faClock} /> {utsavData[1].date}
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                :
                                ""
                        }
                        {
                            utsavData.length >= 1
                                ?
                                <div className='px-2 py-3'>
                                    <div class="card shadow">
                                        <img src={utsavPath + utsavData[2].image} class="card-img-top" alt={utsavData[0].alt_image_text} />
                                        <div class="card-body pe-0">
                                            <h5 className='fw-semibold mb-3 text-capitalize'>{utsavData[2].title.slice(0, 25)}</h5>
                                            <article>
                                                <FontAwesomeIcon icon={faClock} /> {utsavData[2].date}
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                :
                                ""
                        }
                        {
                            utsavData.length >= 1
                                ?
                                <div className='px-2 py-3'>
                                    <div class="card shadow">
                                        <img src={utsavPath + utsavData[3].image} class="card-img-top" alt={utsavData[0].alt_image_text} />
                                        <div class="card-body pe-0">
                                            <h5 className='fw-semibold mb-3 text-capitalize'>{utsavData[3].title.slice(0, 25)}</h5>
                                            <article>
                                                <FontAwesomeIcon icon={faClock} /> {utsavData[3].date}
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                :
                                ""
                        }
                        {
                            utsavData.length >= 1
                                ?
                                <div className='px-2 py-3'>
                                    <div class="card shadow">
                                        <img src={utsavPath + utsavData[4].image} class="card-img-top" alt={utsavData[0].alt_image_text} />
                                        <div class="card-body pe-0">
                                            <h5 className='fw-semibold mb-3 text-capitalize'>{utsavData[4].title.slice(0, 25)}</h5>
                                            <article>
                                                <FontAwesomeIcon icon={faClock} /> {utsavData[4].date}
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                :
                                ""
                        } */}
                    </Slider>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}