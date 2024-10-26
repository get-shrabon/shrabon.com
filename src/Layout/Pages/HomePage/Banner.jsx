import React from 'react';
import bannerImg from '../../../assets/Images/banner_img.png';
import PrimaryBtn from '../../Components/PrimaryBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faDownload } from '@fortawesome/free-solid-svg-icons';
import SecondaryBtn from '../../Components/SecondaryBtn';

const Banner = () => {
    return (
        <div className='min-h-[100vh] h-auto py-20 flex items-center home-banner bg-cover bg-center bg-no-repeat overflow-hidden'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 items-center'>
                    <div className='w-[90%] md:w-[60%] lg:w-[70%] xl:w-[80%] 2xl:w-[95%] banner-img relative'>
                        <img className='w-full' src={bannerImg} alt="Banner" />
                    </div>
                    <div>
                        <h3 className='text-primary text-2xl font-bold'>Hello, I'm Shrabon</h3>
                        <h1 className='text-[64px] text-white font-bold leading-snug py-3'>FRONTEND DEVELOPER BASED IN BANGLADESH</h1>
                        <p className='text-secondary'>
                            As a dedicated Frontend Developer, I build responsive and user-friendly websites with a focus on performance
                            and functionality. I specialize in creating seamless user experiences and ensuring cross-browser compatibility.
                        </p>

                        <div className='mt-10 flex items-center gap-10'>
                            <PrimaryBtn text="Download CV">
                                <FontAwesomeIcon icon={faDownload} />
                            </PrimaryBtn>
                            <SecondaryBtn text={"watch the video"}>
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </SecondaryBtn>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
