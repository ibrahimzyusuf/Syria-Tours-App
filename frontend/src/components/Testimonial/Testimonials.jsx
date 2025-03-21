import React from "react";
import Slider from "react-slick";
import './testimonials.css'
import p1 from '../../assets/images/p1.jpg'
import p2 from '../../assets/images/p2.jpg'
import p3 from '../../assets/images/p3.jpg'
import p4 from '../../assets/images/girl.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
                },
            },
            {
                breakpoint: 576,
                settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
            },
        ]
    }

    return (
        
        <Slider { ...settings}>
            <div className='testimonial py-4 px-3'>
                <p>
                    it is so complete and helpful..........
                    in addition to it is very usable and easy to understand.
                    I do not beleive that there is a such site in terms of its style and functionality,
                    really it is great site
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={p2} className='ph' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Mark</h6>
                        <p>customer</p>
                    </div>
                </div>
            </div>  

            <div className='testimonial py-4 px-3'>
                <p>
                    It's really so nice site,it has helped me when I decided to do a trip into the east middle
                    and I have learned much about syria and its nature beauty,hoping to revisit this country in
                    the feuture.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={p1} className='ph' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>lia</h6>
                        <p>customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                    It is a beautiful country that contains several types of tourist attractions.
                    Thanks for this site that guided me to great places like Palmyra , Maloola 
                    and Mari and special thanks to the development team
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={p3} className='ph' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>angi</h6>
                        <p>customer</p>
                    </div>
                </div>
            </div> 

            <div className='testimonial py-4 px-3'>
                <p>what a special site that encourages you to take a trip 
                    based on it provides techneqiues like searchbar that help your find your favorite destination.
                    I like syria really and its friendly people 
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={p4} className='ph' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>monika</h6>
                        <p>customer</p>
                    </div>
                </div>
            </div> 
        </Slider>
    )
}; 

export default Testimonials