import { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from '../components/CarCards'

const Cars = () => {
  const [input, setInput] = useState('')
  return (
    <div className='pb-30 bg-[#EEEEEE] '>
      <div className="flex flex-col items-center py-20 bg-[#FFFED3] max-md:px-4">
        <Title title='Drive Your Choice' subTitle='Discover our handpicked fleet of luxury vehicles, designed to make every journey unforgettable' />
        <div className="flex items-center bg-[#FFF8E1] px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} alt="search-icon" className="w-4.5 h-4.5 mr-2" />
          <input onClick={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Search by Name, Model, Features...' className="w-full h-full outline-none text-gray-400" />
          <img src={assets.filter_icon} alt="filter-icon" className="w-4.5 h-4.5 ml-2" />
        </div>
      </div>
      <div className="px-6 md:px-14 lg:px-24 xl:px-32 mt-10">
        <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>Showing {dummyCarData.length} Cars</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {dummyCarData.map((car, index)=> (
            <div key={index}>
              <CarCards car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cars
