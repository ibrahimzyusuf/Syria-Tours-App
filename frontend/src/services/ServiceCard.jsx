import React from 'react'
import './serviceCard.css'

const ServiceCard = ({item}) => {
    const{ imgUrl, title, desc } = item
    return <>
        <div className='service__item'>
            <div className='service__img'><img src={imgUrl} alt="" /></div>
            <a className="guidlink"><h5>{title}</h5></a>
            <p>{desc}</p>
        </div>
    </>
};

export default ServiceCard