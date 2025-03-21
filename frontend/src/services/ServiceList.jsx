import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap"
import guidmeimage from '../assets/images/guidmeimage.png'
import bestguidimage from '../assets/images/bestguidimage.jpg'
import informationimage from '../assets/images/informationimage.png'


const servicesData =[
    {
    imgUrl: guidmeimage,
    title: "Guide Me",
    desc: "Try our plan to guide you through your journey .",
    link:"/Guide",
    },
    {
    imgUrl: bestguidimage,
    title: "Best Tour Guide",
    desc: "Try other sites that introduce services similar to our site.",
    link:"/Best",
    },
    {
    imgUrl: informationimage,
    title: "Information",
    desc: "General information you may like to Know about Syria.",
    link:"/Information",
    },
]


const ServiceList = () => {
    return (
        <>
            {servicesData.map((item,index)=> (
            <Col lg='3' md='6' sm='12' className="mb-4" key={index}>
            <ServiceCard item={item} />
            </Col>))}
        </>
    );
};

export default ServiceList