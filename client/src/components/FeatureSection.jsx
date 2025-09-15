import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from './CarCards'
import { useNavigate } from 'react-router-dom'

const FeatureSection = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center py-24 px-6 bg-[#F0F3FF] md:px-16 lg:px-24 xl:px-32 '>
      <div className="">
        <Title title='Featured Vehicles' subTitle='Explore our selection of premium vehicles available for your next adventure'/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {dummyCarData.slice(0,6).map((car)=> (
            <div key={car.id}>
                <CarCards car={car} />
            </div>
        ))}
      </div>
      <button className="flex items-center justify-center gap-2 px-6 py-2 border border-[#0F1123] hover:bg-[#CBBCF6]
       rounded-md mt-18 cursor-pointer" onClick={()=> {navigate('/cars'); scrollTo(0,0)}}>
        Explore all Cars <img src={assets.arrow_icon} alt="Arrow" />
      </button>
    </div>
  )
}

export default FeatureSection 
