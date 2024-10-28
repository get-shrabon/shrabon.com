import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="relative w-full pt-12">
            <span
                className="absolute bottom-2 mb-4 -translate-x-1/2 w-12 h-10 bg-white shadow-[0px_12px_30px_0px_rgba(16,24,40,0.1)] 
                rounded-full px-3.5 py-2 text-gray-800 text-xs font-medium flex justify-center items-center"
                style={{
                    left: `${progress}%`,
                }}
            >
                {progress}%
                <span
                    className="absolute bottom-[-5px] left-1/2 -z-10 h-3 w-3 bg-white"
                    style={{
                        transform: 'translateX(-50%) rotate(45deg)',
                    }}
                />
            </span>
            <div className="relative flex w-full h-2.5 overflow-hidden rounded-3xl bg-[#675155]">
                <div
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                        width: `${progress}%`,
                    }}
                    className="flex h-full items-center justify-center bg-accent text-white rounded-3xl"
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
