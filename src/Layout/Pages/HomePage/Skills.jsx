import React from 'react';
import ProgressBar from '../../Components/ProgressBar';
import PortfolioSlider from './PortfolioSlider';
import TestomonialSlider from './TestomonialSlider';

const Skills = () => {

    return (
        <section className="py-20">
            <div className="container mx-auto">
                {/* Heading */}
                <div className='text-center w-full md:w-[70%] mx-auto mb-20'>
                    <h5 className='uppercase text-primary font-bold text-[20px]'>my skills</h5>
                    <h2 className='text-white text-[46px] 2xl:text-[50px] font-bold leading-tight mt-5 uppercase'>
                        bringing ideas to life my porfessional portfolio
                    </h2>
                </div>
                {/* Card 1 */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center py-[50px] border-b border-[#f9f9f642]">
                    <div>
                        <h2 className='text-[24px] text-white capitalize font-bold'> 2024 </h2>
                        <h5 className='text-sm text-white uppercase font-semibold my-3'> pavnest solution </h5>
                        <h3 className='text-[18px] text-primary font-normal'> Frontend developer </h3>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-secondary'>
                            Skilled in creating visually engaging and highly responsive websites and web applications.
                            Developed projects using modern frameworks like React.js and Vue.js, focusing on clean,
                            efficient code and user-centered design. Collaborated closely with design and backend teams
                            to ensure seamless functionality and maintainable code across projects.
                        </p>
                    </div>
                    <div className="col-span-2">
                        <span className='text-sm text-white relative -bottom-7'>Performance</span>
                        <ProgressBar progress={70} />
                    </div>
                </div>
                {/* Card 2 */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center py-[50px] border-b border-[#f9f9f642]">
                    <div>
                        <h2 className='text-[24px] text-white capitalize font-bold'> 2022 - 2023 </h2>
                        <h5 className='text-sm text-white uppercase font-semibold my-3'> echo studio </h5>
                        <h3 className='text-[18px] text-primary font-normal'> Web Application Manager </h3>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-secondary'>
                            Contributed to various web applications for seamless user experiences. Led projects to integrate advanced functionality
                            and enhanced user interfaces. Managed a team of developers for smooth project execution.
                        </p>
                    </div>
                    <div className="col-span-2">
                        <span className='text-sm text-white relative -bottom-7'>Performance</span>
                        <ProgressBar progress={80} />
                    </div>
                </div>
                {/* Card 3 */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center py-[50px] border-b border-[#f9f9f642]">
                    <div>
                        <h2 className='text-[24px] text-white capitalize font-bold'> 2023 </h2>
                        <h5 className='text-sm text-white uppercase font-semibold my-3'> urexotech </h5>
                        <h3 className='text-[18px] text-primary font-normal'> Frontend Developer </h3>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-secondary'>
                            Worked on landing pages, and responsive websites, and maintained high standards in design and functionality.
                            Built custom WordPress themes and worked with multiple clients to achieve their desired website look and feel.
                        </p>
                    </div>
                    <div className="col-span-2">
                        <span className='text-sm text-white relative -bottom-7'>Performance</span>
                        <ProgressBar progress={90} />
                    </div>
                </div>
                <div className='flex-col-reverse md:flex-row flex gap-4 md:gap-20 items-center py-20'>
                    <div className='md:w-[60%] w-full'>
                        {/* Portfolio Slider Here */}
                        <PortfolioSlider />
                    </div>
                    <div className='md:w-[40%] w-full'>
                        <h5 className='uppercase text-primary font-bold text-[20px]'> gallery </h5>
                        <h2 className='text-white text-[46px] 2xl:text-[50px] font-bold 
                        leading-tight mt-5 uppercase'> latests portfolio </h2>
                        <p className='text-secondary mt-3 pb-0 md:pb-16'>
                            Discover our latest design projects crafted with attention to detail and creativity.
                            Each piece is tailored to meet unique client needs, ensuring satisfaction and excellence.
                            Let our portfolio inspire your next project.
                        </p>
                    </div>
                </div>

                {/* Testomoinal Here */}

                <TestomonialSlider />

            </div>
        </section>
    );
};

export default Skills;