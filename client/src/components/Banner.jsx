import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
    return (
        <div className="bg-[#F0F3FF]">
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between px-8 mon-md:pl-14 pt-10
             bg-gradient-to-r from-[#725CAD] via-[#8CCDEB] to-[#7965C1] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
                <div className="text-white">
                    <h2 className="text-3xl font-medium">Discover your Dream Car</h2>
                    <p className="mt-2">Explore our wide range of vehicles and find the perfect match for your lifestyle.</p>
                    <p className="max-w-130">Get behind the wheel of your ideal car today!</p>
                    <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary
                     not-odd:rounded-lg text-sm mt-4 cursor-pointer">Find Out More</button>
                </div>
                <img src={assets.banner_car_image} alt="Car" className='max-h-45 mt-10' />

            </div>
        </div>
    )
}

export default Banner
