import React,{useEffect} from 'react';
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import aleppocitadel from "/images/aleppocitadel1.jpg"
import palmyra from "/images/palmyra2.jpg"
import flag from '/images/flag.png' 
import herovideo from '/images/hero_video.mp4'
import experience from '/images/experience.png'
import Subtitle from '../shared/Subtitle';
import Counters from '../components/Counters/Counters'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';


const Home=()=> {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

        return(
        <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center gap-2">
                            <Subtitle subtitle={'Know Before You Go'} />
                            <img src={flag} alt="" />
                        </div>
                        <h1>Welcome To{" "}
                        <span className="highlight">Syria</span></h1>
                        <p><i> You can search for the site you want directly,
                            and you can choose the tourist site 
                            according to its type and the city to which it belongs</i></p>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className='hero__img-box'>
                        <img src={aleppocitadel} alt='' />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box hero__video-box mt-4 '>
                        <video src={herovideo} controls alt='' />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-5'>
                            <img src={palmyra} alt='' />
                        </div>
                    </Col>
                    <SearchBar /> 
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitle ml-0">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Explore'} />
                    <h2 className='featured__tour-title'>our featured tours</h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>
        
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='experience__content'>
                            <Subtitle subtitle={'Experience'} />
                            <h2>with all experience<br /> we will serve you</h2>
                            <p>Have alook at the statistics of our site<br />
                            the number of users and bookings
                            </p>
                        </div>
                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <Counters />
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience__img ml-5">
                            <img src={experience} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12" >
                        <Subtitle subtitle={"Gallery"} />
                        <h2 className='gallery__title'>Visit our customers tour gallery</h2>
                    </Col>
                    <Col lg="12">
                        <MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className='testiomnial__title'>What our fans say about us</h2>
                    </Col>
                    <Col lg="12">
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section>
        <NewsLetter />
        </>
    );
}

export default Home;