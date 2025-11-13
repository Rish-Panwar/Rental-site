import React, { useState } from 'react'

import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/appContext'
import toast from 'react-hot-toast'

const AddCar = () => {
  const { axios, currency } = useAppContext()
  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: "",
    model: '',
    year: 0,
    pricePerDay: '',
    category: '',
    transmission: '',
    fuel_type: '',
    seatingCapacity: '',
    location: '',
    description: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (isLoading) return null
    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('carData', JSON.stringify(car))

      const { data } = await axios.post('/api/owner/addCar', formData)

      if (data.success) {
        toast.success(data.message)
        setImage(null)
        setCar({
          brand: "",
          model: '',
          year: 0,
          pricePerDay: '',
          category: '',
          transmission: '',
          fuel_type: '',
          seatingCapacity: '',
          location: '',
          description: ''
        })
      }else{
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message)
    }
    finally{
      setIsLoading(false)
    }
  }
  return (
    <div className='px-4 py-10 md:px-10 flex-1 bg-[#FEE8D9]'>
      <Title title='Add new Car' subTitle='Enter vehicle details to register a new car in the system' />
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        {/* Card image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image ">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className="h-14 rounded-lg shadow-md cursor-pointer" />
            <input type="file" id='car-image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])} />
          </label>
          <p className="text-sm text-gray-500">Upload your Car Picture</p>
        </div>
        {/* Car Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="">Brand</label>
            <input type="text" placeholder='Enter car brand' required className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none' value={car.brand} onChange={e => setCar({ ...car, brand: e.target.value })} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Model</label>
            <input type="text" placeholder='Enter car model' required className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none' value={car.model} onChange={e => setCar({ ...car, model: e.target.value })} />
          </div>
        </div>
        {/* Car year and price */}
        <div className="grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="">Year</label>
            <input type="number" placeholder='Enter car Year' required className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none' value={car.year} onChange={e => setCar({ ...car, year: e.target.value })} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Daily Price {currency}</label>
            <input type="number" placeholder='Enter daily price' required className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none' value={car.pricePerDay} onChange={e => setCar({ ...car, pricePerDay: e.target.value })} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Category</label>
            <select onChange={(e) => setCar({ ...car, category: e.target.value })} value={car.category} className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none'>
              <option value="">Select a Category</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>
            </select>
          </div>
        </div>
        {/* Car transmission, fuel type and seating capacity */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid:cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="">Transmission</label>
            <select onChange={(e) => setCar({ ...car, transmission: e.target.value })} value={car.transmission} className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none'>
              <option value="">Select a Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Fuel Type</label>
            <select onChange={(e) => setCar({ ...car, fuel_type: e.target.value })} value={car.fuel_type} className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none'>
              <option value="">Select a Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">EV</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Seating Capacity</label>
            <input type="number" placeholder='Seating capacity' required className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none' value={car.seatingCapacity} onChange={e => setCar({ ...car, seatingCapacity: e.target.value })} />
          </div>
        </div>
        {/* Car location */}
        <div className="flex flex-col w-full">
          <label htmlFor="">Location</label>
          <select onChange={(e) => setCar({ ...car, location: e.target.value })} value={car.location} className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none'>
            <option value="">Select a Location</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        {/* Car description */}
        <div className="flex flex-col w-full">
          <label htmlFor="">Description</label>
          <textarea type="text" rows={5} placeholder='Drive in style with unmatched comfort, advanced features, and premium performance.' required className='px-3 py-2 mt-1 border border-gray-400 rounded-md outline-none' value={car.description} onChange={e => setCar({ ...car, description: e.target.value })} />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer hover:bg-primary-dull">
          <img src={assets.tick_icon} alt="" className="" />
          {isLoading ? 'Listing..' : 'List your Car!'}
        </button>
      </form>
    </div>
  )
}

export default AddCar
