import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './imagesGallery'

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350:1, 768:3, 992:4 }}>
            <Masonry gutter='1rem'>
            {
            galleryImages.map((item,index) => (
                <img className='masonry__img' src={item} alt='' key={index} 
                style={{width:"100%",display:"block",borderRadius:"10px"}} />
            ))
            }
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery