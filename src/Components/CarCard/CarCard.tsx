"use client"
import { CarsProps } from '@/Types';
import Image from 'next/image';
import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton';
import CarDetails from '../CarDetails/CarDetails';


interface carCardProps {
    car: CarsProps;
}
export default function CarCard({ car }: carCardProps) {

    const [isOpen, setIsOpen] = useState()

    const { city_mpg,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year } = car || {}

    return (
        <div>
            <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-blue-100  rounded-3xl group">
                <div className="w-full flex justify-between items-start gap-2">
                    <h2 className="text-[22px] leading-[26px] font-bold capitalize">
                        {make} {model}
                    </h2>
                </div>



                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
                </div>

                <div className='  w-full mt-2'>
                    <div className='flex  w-full justify-between text-grey'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                            <p className='text-[14px] leading-[17px]'>
                                {transmission === "a" ? "Automatic" : "Manual"}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 uppercase ">
                            <Image src="/tire.svg" width={20} height={20} alt="seat" />
                            <p className="text-[14px] leading-[17px]">{drive}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Image src="/gas.svg" width={20} height={20} alt="seat" />
                            <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
                        </div>
                    </div>

                    <div className=" mt-4 w-full ">
                        <CustomButton
                            title='View More'
                            buttonStyle='w-full py-3 rounded-full bg-blue-600 '
                            textStyles='text-white text-[20px] leading-[17px] font-bold'
                            handleClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>

                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>

            </div>
        </div>
    )
}
