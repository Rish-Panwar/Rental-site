import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'

const Banner = () => {
    return (
        <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} className="bg-[#F0F3FF]">
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between px-8 mon-md:pl-14 pt-10
             bg-gradient-to-r from-[#725CAD] via-[#8CCDEB] to-[#7965C1] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
                <div className="text-white">
                    <h2 className="text-3xl font-medium">Discover your Dream Car</h2>
                    <p className="mt-2">Explore our wide range of vehicles and find the perfect match for your lifestyle.</p>
                    <p className="max-w-130">Get behind the wheel of your ideal car today!</p>
                    <motion.button whileHover={{scale:1.05}} whileTap={{scale: 0.8}} className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary
                     not-odd:rounded-lg text-sm mt-4 cursor-pointer">Find Out More</motion.button>
                </div>
                <motion.img initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 50}} transition={{duration: 0.6, delay: 0.4}} src={assets.banner_car_image} alt="Car" className='max-h-45 mt-10' />

            </div>
        </motion.div>
    )
}

export default Banner
