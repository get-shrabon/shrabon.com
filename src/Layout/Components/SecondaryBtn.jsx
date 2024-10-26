import React from 'react';

const SecondaryBtn = ({ text, children }) => {
    return (
        <button className='cursor-pointer bg-secondary font-semibold py-5 px-6 uppercase text-[14px] flex items-center gap-2 duration-300 transition-all 
        border-transparent hover:border-[#c7d300] border-2 text-white'>
        {text} {children}
    </button>
    );
};

export default SecondaryBtn;