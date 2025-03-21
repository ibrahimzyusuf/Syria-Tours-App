import React,{useState,useContext} from 'react'
import './booking.css'
import { Form,FormGroup,ListGroup,Button, ListGroupItem } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { BASE_URL } from '../../utils/config'


const Booking = ({ tour,avgRating }) => {

const {reviews,price,title} = tour

const navigate = useNavigate()
const{user} = useContext(AuthContext) 

const [booking,setBooking] =useState({
userId: user && user._id,
userEmail:user && user.email,
tourName:title,
fullName:'',
phone:'',
number:'',
bookAt:'',
})


const handleChange = e => {
    setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
};

//send data to the server
const handleClick = async e=>{
    e.preventDefault()
    navigate('/thank-you')

try{
    if(!user || user===undefined || user===null ) {
    return alert("please sign in")
    }
const res=await fetch(`${BASE_URL}/booking`,{
    method:"post",
    headers:{
        "content-type":"application/json",
    },
    credentials:'include',
    body:JSON.stringify(booking)
})

const result=await res.json
if(!res.ok) {
    return alert(result.message);
}
    navigate('/thank-you');
}catch(err){
alert(err.message)
}} 

    return (
        <div className='booking mt-1'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3> ${price}<span> /per person</span> </h3>
                <span className='tour__rating d-flex align-items-center '>
                    <i className="ri-star-s-fill" ></i> 
                    {avgRating == 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>
            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id="fullName"
                            required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <input type="text" placeholder='phone' id="phone"
                            required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id="bookAt"
                                required onChange={handleChange} />
                        <input type="number" placeholder='number of persons' id="guestSize"
                            required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            <div className='booking__bottom'>
                <Button className='btn-primary__btn auth__btn4 w-100 mt-4' onClick={handleClick}>
                Book Now</Button>
            </div>
        </div>
    )
}

export default Booking