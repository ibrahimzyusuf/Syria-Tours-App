import React,{useEffect, useRef,useState,useContext} from 'react'
import '../styles/tourDetails.css'
import { Container, Row, Col,ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import NewsLetter from '../shared/NewsLetter'
import avatar from '/images/avatar.jfif'
import Booking from '../components/Booking/Booking'
import useFetch from './../hooks/useFetch'
import {BASE_URL} from './../utils/config'
import { AuthContext } from '../Context/AuthContext'

const TourDetails = () => {

const { id } = useParams();
const [reviewsList, setReviewsList] = useState([]);
const reviewMsgRef =useRef('')
const  [tourRating, setTourRating]=useState(null)
const { user } = useContext(AuthContext)

//fetch data from db
const { data: tour, loading, error }=useFetch(`${BASE_URL}/tours/${id}`);

const {photo,title,price,desc,address,reviews,city} = tour;

const {totalRating,avgRating} = calculateAvgRating(reviewsList);
const options = {day:"numeric",month:"long",year:"numeric"}

    const submitHandler= async e=>{
    e.preventDefault()
    const reviewText =reviewMsgRef.current.value;
    try {
        if(!user || user===undefined || user===null ) {
        alert("please sign in")
    }
    const reviewObj={
        username:user?.username,
        reviewText,
        rating:tourRating
    }
    const res= await fetch(`${BASE_URL}/review/${id}`,{
    method:"post",
    headers:{
        "content-type":"application/json",
    },
    credentials:"include",
    body:JSON.stringify(reviewObj)
});

    const result = await res.json();
    if(!res.ok) {
    return alert(result.message);
    }

    setReviewsList((prevReviews) => [...prevReviews, reviewObj]);
    reviewMsgRef.current.value = "";
    setTourRating(null);

    alert(result.message)
    } catch(err){
    alert(err.message);
    }
    };

    useEffect(()=>{
        window.scrollTo(0,0);
        if (tour && tour.reviews) {
            setReviewsList(tour.reviews);
            }
    }, [tour]);

return (
    <>
    <section>
        <Container>
        {
        loading && <h4 className='text-center pt-5'>laoding....</h4>
        }
        {
        error && <h4 className='text-center pt-5'>{error}</h4>
        }
        {
        !loading && !error && 
        <Row>
        <Col lg="8">
            <div className='tour__content mt-1'><img src={photo} alt="" />
                <div className='tour__info'><h2>{title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                        <span className='tour__rating d-flex align-items-center gap-1'>
                            <i class="ri-star-s-fill" style={{'color':"var(--secondary-color)"}}></i> 
                        {avgRating ===0 ? null : avgRating }
                        {totalRating===0 ? ("Not rated") : (
                            <span>({reviews?.length})</span>)}
                        </span>
                        <span><i class="ri-map-pin-user-fill"></i> {address} </span>
                    </div>
                    <div className='tour__extra-details'>
                        <span><i class="ri-map-pin-2-line"></i>{city}</span>
                        <span><i class="ri-money-dollar-circle-line"></i>{price} /per person</span>
                    </div>
                    <h3>Description</h3>
                    <div className="desc"><p>{desc}</p></div>
                </div>
            <div className='tour__reviews mt-4'>
            <h4>Reviews ({reviews?.length} reviews) </h4>
            <form onSubmit={submitHandler}>
            <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                1<span onClick={()=>setTourRating(1)}><i class="ri-star-s-fill"></i></span>
                2<span onClick={()=>setTourRating(2)}><i class="ri-star-s-fill"></i></span>
                3<span onClick={()=>setTourRating(3)}><i class="ri-star-s-fill"></i></span>
                4<span onClick={()=>setTourRating(4)}><i class="ri-star-s-fill"></i></span>
                5<span onClick={()=>setTourRating(5)}><i class="ri-star-s-fill"></i></span>
            </div>
            <div className='review__input gap-1'>
                <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required />
                <button className='a' type='submit'>Submit</button>
            </div>
            </form>
            <ListGroup className='user__reviews'>
                {
                    reviewsList?.map(review=>(
                    <div className='review__item'>
                        <img src={avatar} alt='' />
                        <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h5>{review.username}</h5>
                                    <p>{new Date(review.createdAt).toLocaleDateString(
                                    'en-US' ,options )}</p>
                                </div>
                                <span className='d-flex align-items-center'> 
                                    {review.rating} 
                                    <i class="ri-star-s-fill"></i>
                                </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                        </div>
                    </div>
                ))}
                </ListGroup>
            </div> 
        </div>
    </Col>

    <Col lg="4">
        <Booking tour={tour} avgRating={avgRating} />
    </Col>
    </Row>
    } 
</Container>
</section>
<NewsLetter />
</>
);
};

export default TourDetails