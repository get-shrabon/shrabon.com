import React from 'react';

const TestomonialCard = ({ client }) => {
    const { client_img, name, position, description } = client;
    console.log(client);
    return (
        <div className='p-5 bg-[#15160e] relative'>
            <div className="flex justify-between">
                <div>
                    <h2 className='text-white font-bold text-2xl'>{name}</h2>
                    <p className='text-primary font-bold text-sm mt-2'>{position}</p>
                </div>
                <img className='w-28 h-28 rounded-full object-cover absolute -top-10 right-5' src={client_img} alt="" />
            </div>
            <div className="flex justify-between">
                <p>{description}</p>
                <span>Icon</span>
            </div>
        </div>
    );
};

export default TestomonialCard;