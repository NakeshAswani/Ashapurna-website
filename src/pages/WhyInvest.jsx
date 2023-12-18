import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import why_invest_in_jodhpur from "../images/why-invest--in-jodhpur.jpg"

export default function WhyInvest() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / why invest in jodhpur
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    why invest in jodhpur
                </h2>
            </Container>
            <Container fluid>
                <Container>
                    <div className='whyInvest'>
                        <div className='sectionHead mb-5 text-center'>
                            <h1 className='text-uppercase fw-semibold mb-4'>why in jodhpur?</h1>
                        </div>
                        <Row className='align-items-center mb-5'>
                            <Col lg="4">
                                <figure className='w-100 shadow p-2'>
                                    <img src={why_invest_in_jodhpur} alt="why_invest_in_jodhpur" className='img-fluid' />
                                </figure>
                            </Col>
                            <Col lg="8">
                                <div className='ps-4'>
                                    <h4 className='fw-semibold'>A Quick Introduction to Jodhpur's History</h4>
                                    <article>
                                        Jodhpur or the Blue City of India is the second largest city of Rajasthan. The city was founded by Rao Jodha, a chief of the famous Rathore clan, way back in 1459. The city was earlier known as Marwar which later has been changed to Jodhpur to honour its founder Rao Jodha. Jodhpur is divided into two main areas- the old city and the new city.The old city is separated from the main city by a 10 km long wall that surrounds its boundary. There are eight gates to enter and exit the old city which is majorly a tourist attraction with some iconic hotspots within its parameters while the new city is a modern metropolis that surrounds the old city and houses all major developments of Jodhpur.
                                    </article>
                                </div>
                            </Col>
                        </Row>
                        <h4 className='fw-semibold'>Top 3 Reasons why Jodhpur makes an Excellent Choice for Property Investments</h4>
                        <ol>
                            <li className='mb-3'>
                                <article>
                                    Booming Tourism and Handicrafts Industry <br />
                                    Jodhpur is a very popular tourist destination which attracts thousands domestic and international tourists. The city offers scenic landscape, mesmerising heritage architecture like Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada and Rai ka Bagh Palace. Jodhpur also houses attractions like Umed Garden and an extensive government museum. On development front, the city has witnessed plenty of infrastructure development which includes hotels, restaurants and cafes. Jodhpur is also popular for its majestic destination weddings and booming handicraft industry. All aspects of development make property in Jodhpur a logical and popular choice for real estate investment to fetch big returns in the times to come.
                                </article>
                            </li>
                            <li className='mb-3'>
                                <article>
                                    Fast-Paced Economic Growth <br />
                                    Real estate developer in Jodhpur and experts consider tier-II and tier-III cities like Jodhpur as the growth engine of future. Ever increasing property price and growth saturation in Tier-I cities are paving the way for the growth of tier-II and tier-III cities. Availability of skilled and low cost workforce further added to the idea. To make the most out of it, the state government is actively working to bring investors to the Blue City of India. Some notable infrastructure development of the city are-
                                    <ul className='mt-3'>
                                        <li>CAZRI (Central Arid Zone Research Institute)</li>
                                        <li>Barmer Refinery and Petrochemical Complex</li>
                                        <li>The Marwar Junction</li>
                                        <li>Maulana Azad University, Agricultural University, Jodhpur National University, National Law University, Dr. Sarvepalli Radhakrishnan Rajasthan Ayurved University</li>
                                    </ul>
                                </article>
                            </li>
                            <li className='mb-3'>
                                <article>
                                    Lower Initial Property Prices and High Property Price Appreciation <br />
                                    Jodhpur has relatively lower property buying rates thus promises a great return on real estate investment. As par Makaan data, the average property price in Jodhpur was 51.75 lakhs in 2019, far lower than the average of Delhi (3.65 crores) and Gurgaon (90-99 lakhs). Recent deduction in DLC (District Lease Committee) rates makes Jodhpur property even more attractive. With favourable taxation rules, real estate investors in Rajasthan see lower tax burdens compared to Delhi, Haryana, Punjab and other states. In a welcome move, the revised GST rates for under construction housing properties has been brought down to 5% from 12% which further inspires trust for any kind of real estate investment.
                                </article>
                            </li>
                        </ol>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}