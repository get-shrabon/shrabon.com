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
                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className='w-[90%] md:w-[60%] lg:w-[70%] xl:w-[80%] 2xl:w-[95%] banner-img relative hidden md:flex'>
                        <img className='w-full' src={bannerImg} alt="Banner" />
                    </div>
                    <div>
                        <h3 className='text-primary text-2xl font-bold'>Hello, I'm Shrabon</h3>
                        <h1 className='text-[44px] md:text-[64px] text-white font-bold leading-snug py-3'>FRONTEND DEVELOPER BASED IN BANGLADESH</h1>
                        <p className='text-secondary'>
                            As a dedicated Frontend Developer, I build responsive and user-friendly websites with a focus on performance
                            and functionality. I specialize in creating seamless user experiences and ensuring cross-browser compatibility.
                        </p>

                        <div className='mt-10 flex items-start md:items-center flex-col md:flex-row gap-10'>
                            <a href="/src/assets/Images/shrabon talukder.pdf" download="shrabon talukder.pdf" 
                            className='cursor-pointer bg-accent text-black font-semibold py-5 px-6 uppercase text-[14px] flex items-center gap-2
                             duration-300 transition-all border-[#c7d300] border-2 hover:bg-transparent hover:text-white'>
                                download cv
                                <FontAwesomeIcon icon={faDownload} />
                            </a>
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
