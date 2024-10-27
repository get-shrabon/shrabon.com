import React from 'react';

const About = () => {
    const aboutImg = "https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F8c9ef00a-f59a-4c06-a690-fd4b23eab69a.png&w=3840&q=75";
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                    <div className="col-span-1 z-20">
                        <h5 className='uppercase text-primary font-bold text-[20px]'>about me</h5>
                        <h2 className='text-white text-[46px] 2xl:text-[50px] font-bold leading-tight mt-5 uppercase'>
                            Transforming Ideas into Digital Experiences
                        </h2>
                        <p className='text-secondary w-full md:w-[150%] mt-10'>
                            I'm a passionate web developer dedicated to building dynamic and user-friendly websites.
                            With expertise in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React and Vue,
                            I specialize in creating responsive and engaging digital solutions. My focus is on writing clean,
                            efficient code that brings innovative ideas to life. Let's collaborate to build a web experience that stands out and meets your goals.
                        </p>
                    </div>
                    <div className="col-span-2 z-0 mt-10 md:">
                     <div className='w-full h-auto md:h-[690px]'>
                            <img className='w-full h-full brightness-50'
                                src={aboutImg}
                                alt="" />
                     </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;