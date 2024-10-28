import React from 'react';
import customWebIcon from '../../../assets/Images/custom-code-icon.png';
import customWebImg from '../../../assets/Images/custom-website-img.jpg';
import wpIcon from '../../../assets/Images/wp-icon.png';
import wpImg from '../../../assets/Images/wordpress-website-img.jpg';
import shopifyIcon from '../../../assets/Images/shopify-icon.png';
import shopifyImg from '../../../assets/Images/shopify-store-img.jpg';

const Service = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                {/* Heading */}
                <div className='text-center w-full md:w-[70%] mx-auto'>
                    <h5 className='uppercase text-primary font-bold text-[20px]'>my service</h5>
                    <h2 className='text-white text-[46px] 2xl:text-[50px] font-bold leading-tight mt-5 uppercase'>
                        pushing boundaries: my portfolio of web development services
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-28">
                    {/* Card 1 */}
                    <div>
                        <div className="relative mb-5">
                            <div className='bg-accent flex justify-center items-center w-[100px] h-[120px] absolute -top-16 left-10'>
                                <img className='w-[50px]' src={customWebIcon} alt="" />
                            </div>
                            <img className='w-full h-[300px] object-cover' src={customWebImg} alt="" />
                        </div>
                        {/* Don't forget , all service card deserve a daynamic page and you will make later */}
                        <a href='#' className='text-white text-[25px] font-bold'>
                            Custom Website Development
                        </a>
                        <p className='text-secondary mt-3 line-clamp-3'>
                            Build a unique online presence with a custom website designed from scratch. Whether you need a sleek portfolio,
                            a landing page, or a full-scale business site, I create responsive,
                            fast-loading websites tailored to meet your brand’s specific needs and goals.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div>
                        <div className="relative mb-5">
                            <div className='bg-accent flex justify-center items-center w-[100px] h-[120px] absolute -top-16 left-10'>
                                <img className='w-[50px]' src={wpIcon} alt="" />
                            </div>
                            <img className='w-full h-[300px] object-cover' src={wpImg} alt="" />
                        </div>
                        {/* Don't forget , all service card deserve a daynamic page and you will make later */}
                        <a href='#' className='text-white text-[25px] font-bold'>
                            WordPress Website Development
                        </a>
                        <p className='text-secondary mt-3 line-clamp-3'>
                            Leverage the power of WordPress with a user-friendly, flexible website. From blogs to business sites and eCommerce stores,
                            I develop WordPress websites that are easy to manage, SEO-optimized, and designed to grow with your business.
                            Let’s turn your ideas into reality with WordPress!


                        </p>
                    </div>
                    {/* Card 3 */}
                    <div>
                        <div className="relative mb-5">
                            <div className='bg-accent flex justify-center items-center w-[100px] h-[120px] absolute -top-16 left-10'>
                                <img className='w-[50px]' src={shopifyIcon} alt="" />
                            </div>
                            <img className='w-full h-[300px] object-cover' src={shopifyImg} alt="" />
                        </div>
                        {/* Don't forget , all service card deserve a daynamic page and you will make later */}
                        <a href='#' className='text-white text-[25px] font-bold'>
                            Shopify Store Development
                        </a>
                        <p className='text-secondary mt-3 line-clamp-3'>
                            Launch your online store with a high-converting Shopify setup. I create visually engaging,
                            efficient Shopify stores that offer seamless shopping experiences. From setup to customization,
                            I handle every aspect to ensure your store reflects your brand and maximizes sales.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;