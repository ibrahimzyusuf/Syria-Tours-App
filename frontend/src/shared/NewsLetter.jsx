import React from 'react'
import './newsLetter.css'
import { Container, Row , Col } from 'reactstrap'
import aleepoman from '../assets/images/aleepoman.jpg'

const NewsLetter = () => {
    return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className='newsletter__content'>
                        <h2>Subscribe now to get useful traveling information.</h2>
                        <div className='newsletter__input'>
                            <input type="email" placeholder='Enter your email' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Please enter your email to receive notifications from this site </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className='newsletter__img'>
                        <img src={aleepoman} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default NewsLetter