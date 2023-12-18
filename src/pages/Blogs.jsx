import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faComment, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import top_5_properties_for_sale_in_jodhpur from "../images/top-5-properties-for-sale-in-jodhpur.webp"
import { faFacebookF, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Blogs() {
    return (
        <div>
            <Header />
            <Container fluid>
                <div className='container-xxl px-5 blog'>
                    <Row className='gx-5'>
                        <Col lg="9">
                            <div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0 border-bottom border-2 rounded-0 mb-5 blogBlock">
                                    <img src={top_5_properties_for_sale_in_jodhpur} class="card-img-top" alt="top_5_properties_for_sale_in_jodhpur" />
                                    <div class="card-body px-0 pt-4 pb-5">
                                        <div className='mb-4'>
                                            <Link className='text-uppercase text-decoration-none'>uncategorized</Link> / August 12, 2023 / <Link className='text-decoration-none'><FontAwesomeIcon icon={faComment} /> 0</Link>
                                        </div>
                                        <h1 className='fw-bolder mb-3'>
                                            <Link className='text-decoration-none'>Investing in Rajasthan Real Estate: Top-5 Properties for Sale in Jodhpur</Link>
                                        </h1>
                                        <article className='mb-4'>
                                            In recent times, Rajasthan real estate has come back into the public eye. The development of wealthy entrepreneurs and new employment prospects are two elements that have contributed to this resurgence of interest. More people are purchasing real estate in Jodhpur as a result of these changes, whether to be near their relatives or for...
                                        </article>
                                        <div className='d-flex justify-content-between align-items-center blogBlockLogos'>
                                            <div className='d-flex gap-2'>
                                                <Link to={"https://www.facebook.com/sharer/sharer.php?u=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#3b5998"}}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to={"https://twitter.com/intent/tweet?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#1da1f2"}}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                                <Link to={"https://www.linkedin.com/shareArticle?url=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#0077b5"}}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                                </Link>
                                                <Link to={"https://api.whatsapp.com/send?text=https://ashapurna.com/blog/top-5-properties-for-sale-in-jodhpur"} className='rounded-circle d-flex justify-content-center align-items-center text-white' style={{background:"#25d366"}}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </Link>
                                            </div>
                                            <button className='py-3 px-4 text-white text-uppercase border-0 rounded-1 position-relative'>continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='nextPageLink'>
                                    <Link className='ms-auto d-flex gap-2 align-items-center text-decoration-none text-uppercase fw-semibold'>
                                        older posts
                                        <FontAwesomeIcon icon={faAngleRight} className='p-2 border border-2' />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div>
                                <div className='d-flex justify-content-between align-items-center mb-5'>
                                    <input type="text" placeholder='Locking for...' />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <div className='mb-5'>
                                    <h5 className='fw-bolder mb-4'>Recent Posts</h5>
                                    <article className='border-bottom border-2 pb-2 mb-2'>
                                        Investing in Rajasthan Real Estate: Top-5...
                                    </article>
                                    <article className='border-bottom border-2 pb-2 mb-2'>
                                        The Real Estate Boom: A Closer Look at...
                                    </article>
                                    <article>
                                        Real Estate Businesses in Rajasthan
                                    </article>
                                </div>
                                <div>
                                    <h5 className='fw-bolder mb-4'>Recent Comments</h5>
                                    <article className='border-bottom border-2 pb-2 mb-2'>
                                        <Link className='fw-bolder text-decoration-none'>ashapurna-adminpanel</Link> on <Link className='text-decoration-none'>Ashapurna NRI : Now Europe In Jodhpur</Link>
                                    </article>
                                    <article className='border-bottom border-2 pb-2 mb-2'>
                                        <Link className='fw-bolder text-decoration-none'>ashapurna-adminpanel</Link> on <Link className='text-decoration-none'>Ashapurna NRI : Now Europe In Jodhpur</Link>
                                    </article>
                                    <article className='border-bottom border-2 pb-2 mb-2'>
                                        <Link className='fw-bolder text-decoration-none'>ashapurna-adminpanel</Link> on <Link className='text-decoration-none'>Ashapurna NRI : Now Europe In Jodhpur</Link>
                                    </article>
                                    <article className='border-bottom border-2 pb-2 mb-2'>
                                        <Link className='fw-bolder text-decoration-none'>ashapurna-adminpanel</Link> on <Link className='text-decoration-none'>Ashapurna NRI : Now Europe In Jodhpur</Link>
                                    </article>
                                    <article>
                                        <Link className='fw-bolder text-decoration-none'>ashapurna-adminpanel</Link> on <Link className='text-decoration-none'>Ashapurna NRI : Now Europe In Jodhpur</Link>
                                    </article>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    )
}