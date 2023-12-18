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
import { faClock, faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import bestTownship from "../images/best-township-in-jodhpur-ashapurna-heritage-1681632001.webp"
import ashapurnaNri from "../images/ashapurna-nri-luxury-villas-in-jodhpur-1681465456.webp"
import budgetvilla from "../images/budget-villas-for-sale-in-jodhpur-ashapurna-anmol-1680947635.webp"
import budgetvilla1 from "../images/budget-villas-for-sale-in-jodhpur-ashapurna-aangan_(1)-1681639295.webp"
import budgetflat from "../images/budget-flats-for-sale-in-jodhpur-ashapurna-basera-1681652503.webp"
import luxuryAppartment from "../images/luxury-apartment-ready-for-sale-in-jodhpur-1681645330.webp"
import yearBanner from "../images/26_YEARS_BANNER-1681734765.webp"
import aboutimg from "../images/aboutus.webp"
import experience from "../images/experience-check.png"
import property from "../images/property.svg"
import happy from "../images/happy.png"
import measuringTape from "../images/measuring-tape.png"
import units from "../images/units.png"
import propertyCareServices from "../images/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg"
import transparentDealing from "../images/81a99801-36a5-47ea-b817-151c75ed88a8-1669190370.svg"
import hospitality from "../images/0e4e1cb5-d8a1-4563-aae9-06ed141ea957-1669190411.svg"
import sustainableHomes from "../images/da0c8c7a-33fd-4ef3-b7dc-d402fbe3a19b-1669190444.svg"
import ashapurna_nri_home_page_image_1676441428 from "../images/ashapurna-nri-home-page-image-1676441428.webp"
import ashapurnaNriFP from "../images/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp"
// import reraApprovedFP from "../images/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
// import areaFP from "../images/15817f06-ef1a-459b-becc-0b68c0b42536-1668412016.svg"
import availabilityFP from "../images/6e5c01b8-441c-432a-b37c-b78eed34e52b-1668412038.svg"
import ashapurna_heritage_project_banner_1677493280 from "../images/ashapurna-heritage-project-banner-1677493280.webp"
import ashapurna_heritage_logo_1677495446 from "../images/ashapurna-heritage-logo-1677495446.webp"
import swimmingPoolFP from "../images/9ec2ad5a-fce6-4693-a679-b1b26e211dae-1668412118.svg"
import templeNearFP from "../images/333c868e-c55e-40b9-a25e-61db29a9d194-1668412882.svg"
import ashapurna_kundan_villa_coming_soon_1681986511 from "../images/ashapurna-kundan-villa-coming-soon-1681986511.webp"
import ashapurna_kundan_villa_3_bhk_villa_in_jodhpur_logo_1679382577 from "../images/ashapurna-kundan-villa-3-bhk-villa-in-jodhpur-logo-1679382577.webp"
import templeNBFP from "../images/0b8319f9-0856-42d8-bb65-c7b133584acb-1672297556.svg"
import ashapurna_pachpadra_township_gate_1677494062 from "../images/ashapurna-pachpadra-township-gate-1677494062.webp"
import ashapurna_township_pachpadra_logo_1677495132 from "../images/ashapurna-township-pachpadra-logo-1677495132.webp"
import cctvFP from "../images/8d48223a-d97a-4ccf-9f76-a4a2b24bba16-1668412185.svg"
import communityHallFP from "../images/a22f3196-c6a1-40d3-8f51-ea548ca74c4e-1668422620.svg"
import premium_budget_villas_in_jodhpur_1681994380 from "../images/premium-budget-villas-in-jodhpur-1681994380.webp"
import ashapurna_anmol_budget_villas_in_jodhpur_logo_1677495339 from "../images/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"
import ashapurna_aangan_budget_house_in_jodhpur_1682079322 from "../images/ashapurna-aangan-budget-house-in-jodhpur-1682079322.webp"
import ashapurna_aangan_logo_1677495610 from "../images/ashapurna-aangan-logo-1677495610.webp"
import ashapurna_basera_flats_in_jodhpur_1682081467 from "../images/ashapurna-basera-flats-in-jodhpur-1682081467.webp"
import ashapurna_basera_phase_ii_logo_1677495521 from "../images/ashapurna-basera-phase-ii-logo-1677495521.webp"
import plots_for_sale_in_sheoganj_1681992470 from "../images/plots-for-sale-in-sheoganj-1681992470.webp"
import ashapurna_township_sheoganj_logo_1677495034 from "../images/ashapurna-township-sheoganj-logo-1677495034.webp"
import nanomax_project_thumbnail_1681986809 from "../images/nanomax-project-thumbnail-1681986809.webp"
import ashapurna_nanomax_ii_logo_1677494586 from "../images/ashapurna-nanomax-ii-logo-1677494586.webp"
import ashapurna_empire_flats_in_jaipur_1681995100 from "../images/ashapurna-empire-flats-in-jaipur-1681995100.webp"
import ashapurna_empire_apartments_in_jaipur_logo_1677495242 from "../images/ashapurna-empire-apartments-in-jaipur-logo-1677495242.webp"
import ashapurna_platinum_best_flats_in_jodhpur_1682070306 from "../images/ashapurna-platinum-best-flats-in-jodhpur-1682070306.webp"
import ashapurna_platinum_apartments_in_jodhpur_logo_1677495735 from "../images/ashapurna-platinum-apartments-in-jodhpur-logo-1677495735.webp"
import ashapurna_tower_aprtment_in_paota_jodhpur_1682058189 from "../images/ashapurna-tower-aprtment-in-paota-jodhpur-1682058189.webp"
import ashapurna_tower_logo_1677497040 from "../images/ashapurna-tower-logo-1677497040.webp"
import komal_1682513334 from "../images/komal-1682513334.webp"
import aasaa_1681650821 from "../images/aasaa-1681650821.webp"
import aas_1681650689 from "../images/aas-1681650689.webp"
import quotes from '../images/quotes.png'
import EVENT_TB_FOR_HERITAGE_1700635451 from "../images/EVENT_TB_FOR_HERITAGE_-1700635451.jpg"
import basera_event_banner_1698994780 from "../images/basera_event_banner-1698994780.webp"
import event_thumbnail_1698994445 from "../images/event-thumbnail-1698994445.webp"
import Untitled_1_1698993464 from "../images/Untitled-1-1698993464.webp"
import img05_1696857898 from "../images/05-1696857898.webp"

export default function Home() {
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
                        <div>
                            <img src={bestTownship} alt="bestTownship" className='w-100' />
                        </div>
                        <div>
                            <img src={ashapurnaNri} alt="ashapurnaNri" className='w-100' />
                        </div>
                        <div>
                            <img src={budgetvilla} alt="budgetvilla" className='w-100' />
                        </div>
                        <div>
                            <img src={budgetvilla1} alt="budgetvilla1" className='w-100' />
                        </div>
                        <div>
                            <img src={budgetflat} alt="budgetflat" className='w-100' />
                        </div>
                        <div>
                            <img src={luxuryAppartment} alt="luxuryAppartment" className='w-100' />
                        </div>
                        <div>
                            <img src={yearBanner} alt="yearBanner" className='w-100' />
                        </div>
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
                                <img src={aboutimg} alt="about us" className='w-100' />
                            </figure>
                        </Col>
                        <Col lg="7" className='ps-4 pt-3'>
                            <div className='ps-2'>
                                <div className='sectionHead mb-4'>
                                    <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                        about us
                                        <span className='ms-4'></span>
                                    </h6>
                                    <h1 className='text-capitalize fw-semibold'>welcome to ashapurna</h1>
                                </div>
                                <article className='mb-3'>
                                    Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.
                                </article>
                                <article>
                                    In a relatively short period of time, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories-Luxury, Mix segments, and affordable homes.
                                </article>
                            </div>
                        </Col>
                    </Row>
                    <Row className='row-cols-5 p-3 position-absolute aboutBar'>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={experience} alt="experience" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>26+</h3>
                                <article>Years Of Experience</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={property} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>40+</h3>
                                <article>Projects</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={happy} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>26000+</h3>
                                <article>Happy Families</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={measuringTape} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>36+</h3>
                                <article>Lakh Sq.Ft Delivered</article>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center'>
                                <figure className='mx-auto bg-white d-flex justify-content-center align-items-center'>
                                    <img src={units} alt="" className='w-50 h-50' />
                                </figure>
                                <h3 className='fw-bolder'>11000+</h3>
                                <article>Units</article>
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
                                    why us
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold'>Why Ashapurna Is The Best Choice</h1>
                            </div>
                            <article>
                                Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.
                            </article>
                        </Col>
                        <Col lg="8" className='position-absolute top-0 end-0'>
                            <Row className='ps-5 gx-5 gy-4'>
                                <Col lg="6">
                                    <div className='bg-white rounded-top-4 position-relative'>
                                        <span className='d-block position-absolute end-0'></span>
                                        <figure>
                                            <img src={propertyCareServices} alt="propertyCareServices" width="60px" />
                                        </figure>
                                        <h4 className='fw-semibold'>
                                            Property Care Service
                                            <span className='d-block w-50 my-3'></span>
                                        </h4>
                                        <article>
                                            We take care of your home like a true custodian. Our support team...
                                            <span className='d-block fs-6 mt-2'>Read More</span>
                                        </article>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className='bg-white rounded-top-4 position-relative'>
                                        <span className='d-block position-absolute end-0'></span>
                                        <figure>
                                            <img src={transparentDealing} alt="transparentDealing" width="60px" />
                                        </figure>
                                        <h4 className='fw-semibold'>
                                            Transparent Dealing
                                            <span className='d-block w-50 my-3'></span>
                                        </h4>
                                        <article>
                                            We practice all transparency of the highest order to deal with our...
                                            <span className='d-block fs-6 mt-2'>Read More</span>
                                        </article>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className='bg-white rounded-top-4 position-relative'>
                                        <span className='d-block position-absolute end-0'></span>
                                        <figure>
                                            <img src={hospitality} alt="hospitality" width="60px" />
                                        </figure>
                                        <h4 className='fw-semibold'>
                                            Hospitality
                                            <span className='d-block w-50 my-3'></span>
                                        </h4>
                                        <article>
                                            A warm welcome to our valuable customers is what we take on as...
                                            <span className='d-block fs-6 mt-2'>Read More</span>
                                        </article>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className='bg-white rounded-top-4 position-relative'>
                                        <span className='d-block position-absolute end-0'></span>
                                        <figure>
                                            <img src={sustainableHomes} alt="sustainableHomes" width="60px" />
                                        </figure>
                                        <h4 className='fw-semibold'>
                                            Sustainable Homes
                                            <span className='d-block w-50 my-3'></span>
                                        </h4>
                                        <article>
                                            In the present world, Our Aim is to deliver environmental - friendly...
                                            <span className='d-block fs-6 mt-2'>Read More</span>
                                        </article>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='featuredProjects text-white'>
                <Container>
                    <div className='sectionHead mb-4'>
                        <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                            our work
                            <span className='ms-4'></span>
                        </h6>
                        <h1 className='text-capitalize fw-semibold text-white'>featured projects</h1>
                    </div>
                    <Slider {...settings1}>
                        <div>
                            <Row>
                                <Col lg="6">
                                    <figure className='w-100'>
                                        <img src={ashapurna_nri_home_page_image_1676441428} alt="ashapurna_nri_home_page_image_1676441428" className='img-fluid' />
                                    </figure>
                                </Col>
                                <Col lg="6">
                                    <div>
                                        <div className='d-flex gap-2 mb-3'>
                                            <img src={ashapurnaNriFP} alt="ashapurnaNriFP" height={"50px"} />
                                            <h2>Ashapurna Nri</h2>
                                        </div>
                                        <article className='mb-3'>
                                            Ashapurna NRI is the 38th project of Ashapurna Buildcon Ltd. The project hosts classy Luxury Villas in Jodhpur that come in a package of European architecture villas in Jodhpur with 5-star luxury amenities like club house full of activities...
                                        </article>
                                        <Row className='mb-3'>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                {/* <img src={reraApprovedFP} alt="reraApprovedFP" width={"36px"} /> */}
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>rera</h6>
                                                    <article className='text-uppercase'>approved</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                {/* <img src={areaFP} alt="areaFP" width={"36px"} /> */}
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>area</h6>
                                                    <article className='text-uppercase'>120+ acres</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={availabilityFP} alt="availabilityFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>availability</h6>
                                                    <article className='text-uppercase'>villas/plots</article>
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
                        <div>
                            <Row>
                                <Col lg="6">
                                    <figure className='w-100'>
                                        <img src={ashapurna_heritage_project_banner_1677493280} alt="ashapurna_heritage_project_banner_1677493280" className='img-fluid' />
                                    </figure>
                                </Col>
                                <Col lg="6">
                                    <div>
                                        <div className='d-flex gap-2 mb-3'>
                                            <img src={ashapurna_heritage_logo_1677495446} alt="ashapurna_heritage_logo_1677495446" height={"50px"} />
                                            <h2>Ashapurna Heritage</h2>
                                        </div>
                                        <article className='mb-3'>
                                            Ashapurna Heritage is township project spread across approximately 170 bighas and located at Basni Benda near airport. The project is a fusion of contemporary and traditional architecture which offers a world-class living experience. Every fine detail has been taken into consideration in the design...
                                        </article>
                                        <Row className='mb-3'>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={swimmingPoolFP} alt="swimmingPoolFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>swimming</h6>
                                                    <article className='text-uppercase'>pool</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={templeNearFP} alt="templeNearFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>temple</h6>
                                                    <article className='text-uppercase'>near by</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={availabilityFP} alt="availabilityFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>availability</h6>
                                                    <article className='text-uppercase'>villas/plots</article>
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
                        <div>
                            <Row>
                                <Col lg="6">
                                    <figure className='w-100'>
                                        <img src={ashapurna_kundan_villa_coming_soon_1681986511} alt="ashapurna_kundan_villa_coming_soon_1681986511" className='img-fluid' />
                                    </figure>
                                </Col>
                                <Col lg="6">
                                    <div>
                                        <div className='d-flex gap-2 mb-3'>
                                            <img src={ashapurna_kundan_villa_3_bhk_villa_in_jodhpur_logo_1679382577} alt="ashapurna_kundan_villa_3_bhk_villa_in_jodhpur_logo_1679382577" height={"50px"} />
                                            <h2>Ashapurna Kundan Villa</h2>
                                        </div>
                                        <article className='mb-3'>
                                            Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                        </article>
                                        <Row className='mb-3'>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={swimmingPoolFP} alt="swimmingPoolFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>swimming</h6>
                                                    <article className='text-uppercase'>pool</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={templeNBFP} alt="templeNBFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>temple</h6>
                                                    <article className='text-uppercase'>near by</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={availabilityFP} alt="availabilityFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>availability</h6>
                                                    <article className='text-uppercase'>villas/plots</article>
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
                        <div>
                            <Row>
                                <Col lg="6">
                                    <figure className='w-100'>
                                        <img src={ashapurna_pachpadra_township_gate_1677494062} alt="ashapurna_pachpadra_township_gate_1677494062" className='img-fluid' />
                                    </figure>
                                </Col>
                                <Col lg="6">
                                    <div>
                                        <div className='d-flex gap-2 mb-3'>
                                            <img src={ashapurna_township_pachpadra_logo_1677495132} alt="ashapurna_township_pachpadra_logo_1677495132" height={"50px"} />
                                            <h2>Ashapurna Pachpadra</h2>
                                        </div>
                                        <article className='mb-3'>
                                            Ashapurna Township Pachpadra is the address of a life that welcomes you with all modernity and grandeur. The imposing gate of the township gives a sense of luxury to its visitors. The township houses everything that makes life comfortable and luxurious. Ashapura Township Pachpadra is a complete...
                                        </article>
                                        <Row className='mb-3'>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={cctvFP} alt="cctvFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>cctv</h6>
                                                    <article className='text-uppercase'>security <br /> system</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={templeNearFP} alt="templeNearFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>temple</h6>
                                                    <article className='text-uppercase'>near by</article>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='d-flex align-items-center gap-2'>
                                                <img src={communityHallFP} alt="communityHallFP" width={"36px"} />
                                                <div>
                                                    <h6 className='text-uppercase mb-1'>community</h6>
                                                    <article className='text-uppercase'>hall</article>
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
                    </Slider>
                </Container>
            </Container>
            <Container fluid className='overview'>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className='sectionHead mb-4'>
                                <h6 className='text-uppercase fw-normal mb-0 d-flex align-items-center'>
                                    project overview
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold'>Ready & Nearing Completion Projects</h1>
                            </div>
                            <article>
                                Meticulously crafted and emotionally designed, Ashapurna homes are the perfect place to be in. A lifestyle benchmark in Rajasthan, today and tomorrow, our successful communities are our biggest achievement.
                            </article>
                        </Col>
                        <Col lg="12" className='position-relative'>
                            <Slider {...settings2}>
                                <div className='px-3'>
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
                                </div>
                                <div className='px-3'>
                                    <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                        <img src={ashapurna_aangan_budget_house_in_jodhpur_1682079322} alt="ashapurna_aangan_budget_house_in_jodhpur_1682079322" className='img-fluid rounded-3' />
                                        <span className='position-absolute p-1 rounded-3 text-white text-capitalize possessionSoon'>possession soon</span>
                                        <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <img src={ashapurna_aangan_logo_1677495610} alt="ashapurna_aangan_logo_1677495610" height={"30px"} />
                                                <h6 className='fw-semibold text-capitalize'>ashapurna aangan</h6>
                                            </div>
                                            <article className='text-capitalize'>
                                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                banar, jodhpur
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
                                </div>
                                <div className='px-3'>
                                    <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                        <img src={ashapurna_basera_flats_in_jodhpur_1682081467} alt="ashapurna_basera_flats_in_jodhpur_1682081467" className='img-fluid rounded-3' />
                                        <span className='position-absolute p-1 rounded-3 text-white text-capitalize readyToOccupy'>ready to occupy</span>
                                        <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <img src={ashapurna_basera_phase_ii_logo_1677495521} alt="ashapurna_basera_phase_ii_logo_1677495521" height={"30px"} />
                                                <h6 className='fw-semibold text-capitalize'>ashapurna basera II phase</h6>
                                            </div>
                                            <article className='text-capitalize'>
                                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                pal, sangariya road
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
                                <div className='px-3'>
                                    <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                        <img src={plots_for_sale_in_sheoganj_1681992470} alt="plots_for_sale_in_sheoganj_1681992470" className='img-fluid rounded-3' />
                                        <span className='position-absolute p-1 rounded-3 text-white text-capitalize fewUnitsLeft'>few units left</span>
                                        <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <img src={ashapurna_township_sheoganj_logo_1677495034} alt="ashapurna_township_sheoganj_logo_1677495034" height={"30px"} />
                                                <h6 className='fw-semibold text-capitalize'>ashapurna sheoganj</h6>
                                            </div>
                                            <article className='text-capitalize'>
                                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                sheoganj, sirohi district, rajasthan
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
                                <div className='px-3'>
                                    <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                        <img src={nanomax_project_thumbnail_1681986809} alt="nanomax_project_thumbnail_1681986809" className='img-fluid rounded-3' />
                                        <span className='position-absolute p-1 rounded-3 text-white text-capitalize fewUnitsLeft'>few units left</span>
                                        <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <img src={ashapurna_nanomax_ii_logo_1677494586} alt="" height={"30px"} />
                                                <h6 className='fw-semibold text-capitalize'>ashapurna nanomax II</h6>
                                            </div>
                                            <article className='text-capitalize'>
                                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                jodhpur, rajasthan 342015, india
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
                                <div className='px-3'>
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
                                <div className='px-3'>
                                    <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                        <img src={ashapurna_platinum_best_flats_in_jodhpur_1682070306} alt="ashapurna_platinum_best_flats_in_jodhpur_1682070306" className='img-fluid rounded-3' />
                                        <span className='position-absolute p-1 rounded-3 text-white text-capitalize readyToOccupy'>ready to move</span>
                                        <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <img src={ashapurna_platinum_apartments_in_jodhpur_logo_1677495735} alt="ashapurna_platinum_apartments_in_jodhpur_logo_1677495735" height={"30px"} />
                                                <h6 className='fw-semibold text-capitalize'>ashapurna platinum</h6>
                                            </div>
                                            <article className='text-capitalize'>
                                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                basni, basni, jodhpur rajasthan 342008
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
                                <div className='px-3'>
                                    <div className='bg-white p-2 rounded-2 position-relative shadow overviewBlock'>
                                        <img src={ashapurna_tower_aprtment_in_paota_jodhpur_1682058189} alt="ashapurna_tower_aprtment_in_paota_jodhpur_1682058189" className='img-fluid rounded-3' />
                                        <span className='position-absolute p-1 rounded-3 text-white text-capitalize readyToOccupy'>ready to move</span>
                                        <div className='bg-white p-2 overviewBlockBar rounded-3 position-absolute'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <img src={ashapurna_tower_logo_1677497040} alt="ashapurna_tower_logo_1677497040" height={"30px"} />
                                                <h6 className='fw-semibold text-capitalize'>ashapurna tower</h6>
                                            </div>
                                            <article className='text-capitalize'>
                                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                                paota, jodhpur rajasthan, 342006
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
                                    our testimonials
                                    <span className='ms-4'></span>
                                </h6>
                                <h1 className='text-capitalize fw-semibold text-white'>What They're Saying About Ashapurna</h1>
                            </div>
                            <article className='text-white mb-4'>
                                From the heart of South Mumbai to the western suburbs and beyond take your pick from our finest addresses in the city. Select a location to view the property.
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
                                    <div className='bg-white px-5 pb-5 position-relative testimonialBlock'>
                                        <div className='d-flex mb-4'>
                                            <figure className='testimonialImg rounded-circle position-relative me-4'>
                                                <img src={komal_1682513334} alt="komal bhati" className='img-fluid rounded-circle' />
                                            </figure>
                                            <figcaption className='pt-3'>
                                                <h5 className='text-capitalize fw-bolder'>komal bhati</h5>
                                                <article className='text-capitalize fw-medium'>ashapurna aangan</article>
                                            </figcaption>
                                        </div>
                                        <article className='pb-3 px-1'>
                                            I'm Komal, I recently bought a villa in Ashapurna Aangan. The society is too great, the view is astounding also. highly recommend everyone to visit the site once and explore the beautiful villas at Ashapurna Aangan.
                                        </article>
                                        <img src={quotes} alt="quotes" className='position-absolute bottom-0 end-0 me-3 mb-2' />
                                    </div>
                                    <div className='bg-white px-5 pb-5 position-relative testimonialBlock'>
                                        <div className='d-flex mb-4'>
                                            <figure className='testimonialImg rounded-circle position-relative me-4'>
                                                <img src={aasaa_1681650821} alt="usha solanki" className='img-fluid rounded-circle' />
                                            </figure>
                                            <figcaption className='pt-3'>
                                                <h5 className='text-capitalize fw-bolder'>mrs usha solanki</h5>
                                                <article className='text-capitalize fw-medium'>ashapurna aangan</article>
                                            </figcaption>
                                        </div>
                                        <article className='pb-3 px-1'>
                                            I am pleased to be a customer of Ashapurna Buildcon Ltd. The experience was outstanding. They were always responsive, and proactive, and went the extra mile with efforts to ensure smooth and seamless transactions.
                                        </article>
                                        <img src={quotes} alt="quotes" className='position-absolute bottom-0 end-0 me-3 mb-2' />
                                    </div>
                                    <div className='bg-white px-5 pb-5 position-relative testimonialBlock'>
                                        <div className='d-flex mb-4'>
                                            <figure className='testimonialImg rounded-circle position-relative me-4'>
                                                <img src={aas_1681650689} alt="damodar prajapat" className='img-fluid rounded-circle' />
                                            </figure>
                                            <figcaption className='pt-3'>
                                                <h5 className='text-capitalize fw-bolder'>mr damodar prajapat</h5>
                                                <article className='text-capitalize fw-medium'>ashapurna anmol</article>
                                            </figcaption>
                                        </div>
                                        <article className='pb-3 px-1'>
                                            Being a customer of Ashapurna Buildcon Ltd. makes me happy. The experience was excellent. To ensure swift and easy process, they were always attentive, responsive, and went above and beyond to help us not as a client ut as a family member.
                                        </article>
                                        <img src={quotes} alt="quotes" className='position-absolute bottom-0 end-0 me-3 mb-2' />
                                    </div>
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
                        <div className='px-2 py-3'>
                            <div class="card shadow">
                                <img src={EVENT_TB_FOR_HERITAGE_1700635451} class="card-img-top" alt="EVENT_TB_FOR_HERITAGE_1700635451" />
                                <div class="card-body pe-0">
                                    <h5 className='fw-semibold mb-3 text-capitalize'>karwa chauth celebration at...</h5>
                                    <article>
                                        <FontAwesomeIcon icon={faClock} /> 2023-11-01
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className='px-2 py-3'>
                            <div class="card shadow">
                                <img src={basera_event_banner_1698994780} class="card-img-top" alt="basera_event_banner_1698994780" />
                                <div class="card-body pe-0">
                                    <h5 className='fw-semibold mb-3 text-capitalize'>mandir's bhoomi pujan at ashapurn...</h5>
                                    <article>
                                        <FontAwesomeIcon icon={faLocationDot} /> Ashapurna Basera<br />
                                        <FontAwesomeIcon icon={faClock} /> 2023-10-29
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className='px-2 py-3'>
                            <div class="card shadow">
                                <img src={event_thumbnail_1698994445} class="card-img-top" alt="event_thumbnail_1698994445" />
                                <div class="card-body pe-0">
                                    <h5 className='fw-semibold mb-3 text-capitalize'>dandia night celebration at...</h5>
                                    <article>
                                        <FontAwesomeIcon icon={faLocationDot} /> Ashapurna Heritage<br />
                                        <FontAwesomeIcon icon={faClock} /> 2023-10-29
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className='px-2 py-3'>
                            <div class="card shadow">
                                <img src={Untitled_1_1698993464} class="card-img-top" alt="Untitled_1_1698993464" />
                                <div class="card-body pe-0">
                                    <h5 className='fw-semibold mb-3 text-capitalize'>kaniya pujan at ashapurna aangan</h5>
                                    <article>
                                        <FontAwesomeIcon icon={faLocationDot} /> Ashapurna Aangan<br />
                                        <FontAwesomeIcon icon={faClock} /> 2023-10-23
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className='px-2 py-3'>
                            <div class="card shadow">
                                <img src={img05_1696857898} class="card-img-top" alt="img05_1696857898" />
                                <div class="card-body pe-0">
                                    <h5 className='fw-semibold mb-3 text-capitalize'>mohan singh ji</h5>
                                    <article>
                                        <FontAwesomeIcon icon={faLocationDot} /> uchiyarda<br />
                                        <FontAwesomeIcon icon={faClock} /> 2023-10-09
                                    </article>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}