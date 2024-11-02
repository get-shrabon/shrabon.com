import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import TestomonialCard from './TestomonialCard';

const TestomonialSlider = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('testomonial-data.json')
            .then(res => res.json())
            .then(data => setClients(data));
    }, []); 

    return (
        <div className='w-full py-20'>
            <Swiper slidesPerView={2} spaceBetween={20} loop={true} className='overflow-y-visible'>
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <TestomonialCard client={client} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestomonialSlider;
