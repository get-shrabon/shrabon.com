import React from 'react';
import bannerImg from '../../../assets/Images/banner_img.png';

const Banner = () => {
    return (
        <div className=' min-h-[100vh] flex items-center home-banner bg-cover bg-center bg-no-repeat overflow-hidden'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2'>
                    <div className='w-[70%] banner-img relative'>
                        <img className='w-full' src={bannerImg} alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;