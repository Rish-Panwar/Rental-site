import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
    const [pickupLocation, setPickupLocation] = useState("")
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-14 bg-[#F0F3FF] text-center'>
        <h1 className="text-4xl md:text-6xl font-cormorant font-semibold text-[#211951]">Luxury in Motion</h1>
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg
        md:rounded-full w-full max-w-80 md:max-w-200 bg-amber-50 shadow-lg'>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
                {/* Pickup Location selector */}
                <div className='flex flex-col gap-2 items-start'>
                    <select required value={pickupLocation} onChange={(e)=> setPickupLocation(e.target.value)}>
                        <option value="">Pickup Location</option>
                        {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                    </select>
                    <p className="px-1 text-sm text-gray-400">{pickupLocation ?  pickupLocation : "Please select Location"}</p>
                </div>
                {/* Date Selector */}
                <div className="flex flex-col gap-2 items-start">
                    <label htmlFor="pickup-date">Pick-up Date</label>
                    <input type="date" id="pickup-date" min={new Date().toISOString().split("T")[0]} 
                    className='text-sm text-gray-400' required />
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <label htmlFor="return-date">Return Date</label>
                    <input type="date" id="return-date" className='text-sm text-gray-400' required />
                </div>                
            </div>
            {/* Search Button */}
                <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary
                hover:bg-primary-dull text-white rounded-full cursor-pointer">
                    <img src={assets.search_icon} alt="search" className='brightness-300' />
                    Search
                </button>
        </form>
        <img src={assets.main_car} alt="Main Car" className='max-h-74' />
    </div>
  )
}

export default Hero 
