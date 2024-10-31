// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import PrimaryBtn from '../../Components/PrimaryBtn';
// import firstSLiderImg from '../../../assets/Images/charius-donation.png'
// import secondSLiderImg from '../../../assets/Images/metan.png'
// import thirdSLiderImg from '../../../assets/Images/edugen.png'
// const PortfolioSlider = () => {
//     return (
//         <div className=''>
//             <Swiper
//                 spaceBetween={50}
//                 slidesPerView={2}
//                 loop={true}
//                 modules={[
//                     Navigation
//                 ]}
//                 navigation={true}
//                 grabCursor={true}
//                 className='portfolio-slider'
//             >
//                 <SwiperSlide>
//                     <div
//                         style={{ backgroundImage: `url(${firstSLiderImg})` }}
//                         className='w-full h-[400px] bg-cover bg-no-repeat bg-top hover:bg-bottom duration-1000 transition-all 
//                before:absolute before:inset-0 before:bg-black before:bg-opacity-75 before:content-[""] 
//                flex items-center justify-center group relative'
//                     >
//                         <div className='flex gap-10 items-center relative z-10'>
//                             <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4
//                              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
//                               transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'>
//                                 Details
//                             </button>
//                             <a
//                                 target='_blank'
//                                 href="#"
//                                 className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none
//                                  focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform
//                                   -translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'
//                             >
//                                 Live View
//                             </a>

//                         </div>
//                         <h3 className='text-2xl text-white text-center absolute bottom-10'> Charius Donation Frontend Project. </h3>

//                     </div>

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div
//                         style={{ backgroundImage: `url(${secondSLiderImg})` }}
//                         className='w-full h-[400px] bg-cover bg-no-repeat bg-top hover:bg-bottom duration-1000 transition-all 
//                before:absolute before:inset-0 before:bg-black before:bg-opacity-75 before:content-[""] 
//                flex items-center justify-center group relative'
//                     >
//                         <div className='flex gap-10 items-center relative z-10'>
//                             <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4
//                              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
//                               transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'>
//                                 Details
//                             </button>
//                             <a
//                                 target='_blank'
//                                 href="#"
//                                 className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none
//                                  focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform
//                                   -translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'
//                             >
//                                 Live View
//                             </a>

//                         </div>
//                         <h3 className='text-2xl text-white text-center absolute bottom-10'> Metan Express Life Frontend Project. </h3>
//                     </div>

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div
//                         style={{ backgroundImage: `url(${thirdSLiderImg})` }}
//                         className='w-full h-[400px] bg-cover bg-no-repeat bg-top hover:bg-bottom duration-1000 transition-all 
//                before:absolute before:inset-0 before:bg-black before:bg-opacity-75 before:content-[""] 
//                flex items-center justify-center group relative'
//                     >
//                         <div className='flex gap-10 items-center relative z-10'>
//                             <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4
//                              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
//                               transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'>
//                                 Details
//                             </button>
//                             <a
//                                 target='_blank'
//                                 href="#"
//                                 className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none
//                                  focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform
//                                   -translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'
//                             >
//                                 Live View
//                             </a>

//                         </div>
//                         <h3 className='text-2xl text-white text-center absolute bottom-10'> Edugen E-learning Flatform Frontend Project. </h3>
//                     </div>

//                 </SwiperSlide>

//             </Swiper>
//         </div>
//     );
// };

// export default PortfolioSlider;





import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import firstSLiderImg from '../../../assets/Images/charius-donation.png';
import secondSLiderImg from '../../../assets/Images/metan.png';
import thirdSLiderImg from '../../../assets/Images/edugen.png';

const PortfolioSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const updateSwiperNavigation = (swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        };

        const swiperInstance = document.querySelector('.portfolio-slider').swiper;
        if (swiperInstance) {
            updateSwiperNavigation(swiperInstance);
        }
    }, []);

    return (
        <div className='relative'>
            {/* Custom Navigation Buttons */}
         

            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.update();
                    });
                }}
                grabCursor={true}
                className='portfolio-slider overflow-y-visible px-20 border'
            >
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url(${firstSLiderImg})` }}
                        className='w-full h-[400px] bg-cover bg-no-repeat bg-top hover:bg-bottom duration-1000 transition-all 
                            before:absolute before:inset-0 before:bg-black before:bg-opacity-75 before:content-[""] 
                            flex items-center justify-center group relative'
                    >
                        <div className='flex gap-10 items-center relative z-10'>
                            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'>
                                Details
                            </button>
                            <a
                                target='_blank'
                                href="#"
                                className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform -translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'
                            >
                                Live View
                            </a>
                        </div>
                        <h3 className='text-2xl text-white text-center absolute bottom-10'>Charius Donation Frontend Project</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url(${firstSLiderImg})` }}
                        className='w-full h-[400px] bg-cover bg-no-repeat bg-top hover:bg-bottom duration-1000 transition-all 
                            before:absolute before:inset-0 before:bg-black before:bg-opacity-75 before:content-[""] 
                            flex items-center justify-center group relative'
                    >
                        <div className='flex gap-10 items-center relative z-10'>
                            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'>
                                Details
                            </button>
                            <a
                                target='_blank'
                                href="#"
                                className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform -translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'
                            >
                                Live View
                            </a>
                        </div>
                        <h3 className='text-2xl text-white text-center absolute bottom-10'>Charius Donation Frontend Project</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url(${firstSLiderImg})` }}
                        className='w-full h-[400px] bg-cover bg-no-repeat bg-top hover:bg-bottom duration-1000 transition-all 
                            before:absolute before:inset-0 before:bg-black before:bg-opacity-75 before:content-[""] 
                            flex items-center justify-center group relative'
                    >
                        <div className='flex gap-10 items-center relative z-10'>
                            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'>
                                Details
                            </button>
                            <a
                                target='_blank'
                                href="#"
                                className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform -translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500'
                            >
                                Live View
                            </a>
                        </div>
                        <h3 className='text-2xl text-white text-center absolute bottom-10'>Charius Donation Frontend Project</h3>
                    </div>
                </SwiperSlide>
                {/* Additional SwiperSlide components */}
            </Swiper>

            <button
                ref={prevRef}
                className=' bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition'
            >
                &#8592;
            </button>
            <button
                ref={nextRef}
                className=' bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition'
            >
                &#8594;
            </button>
        </div>
    );
};

export default PortfolioSlider;
