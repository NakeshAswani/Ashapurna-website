import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FixedLogos from '../common/FixedLogos';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import organization_chart3 from "../images/organization-chart3.jpg"

export default function OurTeam() {
    return (
        <div>
            <FixedLogos />
            <Header />
            <Container fluid className='aboutBanner text-center text-white'>
                <h5 className='text-uppercase mb-3'>
                    <Link to={"/"} className='text-white text-decoration-none'>home</Link> / our team
                </h5>
                <h2 className='text-capitalize fw-bolder'>
                    our team
                </h2>
            </Container>
            <Container fluid>
                <Container>
                    <div className='managementSpeaks'>
                        <div className='sectionHead mb-5 text-center'>
                            <h1 className='text-capitalize fw-semibold'>Ashapurna Team</h1>
                            <article className='text-start'>
                                Shri Karan Singh Uchiyarda, the Founder Chairman & Managing Director of Ashapurna Buildcon, is a man with crystal-clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpur's real estate scene. Acceptance and popularity of Ashapurna's projects are proof of his passion, skill, and hard work. Besides real estate, Shri Karan Singh Uchiyarda is a known figure in the hospitality sector as well.
                            </article>
                            <article className='text-start'>
                                On one hand, Shri Karan Singh Uchiyarda is a respected name in the Jodhpur's business circle, on the other, he is known for giving back to society through his trust Shree Mag Mohan Charitable Trust. His social welfare work includes medical camps, large-scale marriage functions, housing, and other donation for the poor and needy. What's more, in a very unique and commendable CSR initiative, Ashapurna Buildcon provides a free home to a widow in every project which in itself is living proof of Shri Karan Singh Uchiyardas concern towards the less privileged section of society.
                            </article>
                        </div>
                        <figure className='w-100'>
                            <img src={organization_chart3} alt="organization_chart3" className='img-fluid' />
                        </figure>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}