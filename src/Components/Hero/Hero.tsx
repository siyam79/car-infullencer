
"use client";

import Image from 'next/image'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton';


export default function Hero() {

    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="flex xl:flex-row flex-col gap-5 relative z-0 container mx-auto">
                <div className="flex-1 lg:pt-36 p-2 padding-x">
                    <h1 className="2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold">
                        Find, book, rent a car quick and super easy!
                    </h1>

                    <p className="text-[20px] text-black-100 font-light lg:mt-5 md:mt-3 mt-2 ">
                        Streamline your car rental experience with our effortless booking
                        process.
                    </p>

                    <CustomButton
                        title="Explore Cars"
                        buttonStyle="bg-blue-600  text-white lg:px-6 px-4 lg:py-3 py-2 font-bold  text-xl rounded-full lg:mt-10 md:mt-6 mt-4  "
                        handleClick={handleScroll}
                    />


                </div>
                <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
                    <div className="relative xl:w-full w-[90%] xl:h-full h-[200px] z-0">
                        <Image src="/hero.png" alt="hero" fill className="lg:object-contain " />
                    </div>

                    <div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4  bg-repeat-round -z-10 w-full xl:h-screen h-[200px] overflow-hidden'>
                        <Image src="/hero-bg.png" alt="hero" fill className="lg:object-contain " />
                    </div>
                </div>
            </div>
        </div>
    )
}
