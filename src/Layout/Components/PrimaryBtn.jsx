import React from 'react';

const PrimaryBtn = ({ text, children }) => {
    return (
        <button className='cursor-pointer bg-accent text-black font-semibold py-5 px-6 uppercase text-[14px] flex items-center gap-2 duration-300 transition-all border-[#c7d300] border-2 hover:bg-transparent hover:text-white'>
            {text} {children}
        </button>
    );
};

export default PrimaryBtn;