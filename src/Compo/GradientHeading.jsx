import React from 'react';

const GradientHeading = () => {
    return (
        <div className="bg-black overflow-hidden ">
            <div className="flex w-max animate-marquee">
                <h1 className="text-[239px] font-dm font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#5E9FFF] to-white whitespace-nowrap] px-10">
                    WHY CHOOSE TECHSURYA
                </h1>
                <h1 className="text-[239px] font-dm font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#5E9FFF] to-white whitespace-nowrap px-10">
                    WHY CHOOSE TECHSURYA
                </h1>
            </div>

            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 15s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default GradientHeading;
