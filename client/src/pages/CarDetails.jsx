import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import Loader from '../components/Loader'
import { useAppContext } from '../context/appContext'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'

const CarDetails = () => {
  const { id } = useParams()
  const { cars = [], axios, pickupDate, returnDate, setPickupDate, setReturnDate } = useAppContext()
  const navigate = useNavigate()

  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const currency = import.meta.env.VITE_CURRENCIES

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/bookings/create', {
        carId: id,
        pickupDate,
        returnDate,
      })
      if (data?.success) {
        toast.success(data.message)
        navigate('/my-bookings')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    // start loading whenever id or cars change
    setLoading(true)
    setNotFound(false)
    setCar(null)

    // if cars not available yet, keep loading (caller should fetch cars in context)
    if (!cars || cars.length === 0) {
      // keep showing loader — will re-run when cars arrive
      return
    }

    // find the car (use String to avoid ObjectId/string mismatch)
    const found = cars.find((c) => String(c._id) === String(id))

    if (found) {
      setCar(found)
      setLoading(false)
      return
    }

    // optional fallback to local dummy data
    const fallback = dummyCarData.find((c) => String(c._id) === String(id))
    if (fallback) {
      setCar(fallback)
      setLoading(false)
      return
    }

    // not found
    setNotFound(true)
    setLoading(false)
  }, [cars, id])

  if (loading) {
    return <Loader />
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="mb-4 text-lg">Car not found</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/cars')}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Back to Cars
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-gray-300 rounded"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#EEEEEE] min-h-screen pb-30">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-16">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
          <img src={assets.arrow_icon} alt="Arrow" className="rotate-180 opacity-65" />
          Back to All Cars
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <motion.img initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} src={car.image} alt={car.brand} className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="space-y-6">
              <div>
                <h1 className="text-3xl text-gray-700 font-bold">{car.brand} {car.model}</h1>
                <p className="text-gray-500 text-lg">{car.category} . {car.year}</p>
              </div>
              <hr className="border border-gray-400 my-6" />
              <div className="grid grid-cols-2 text-gray-400 sm:grid-cols-4 gap-4">
                {[
                  { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
                  { icon: assets.fuel_icon, text: `${car.fuel_type}` },
                  { icon: assets.car_icon, text: `${car.transmission}` },
                  { icon: assets.location_icon, text: `${car.location}` }
                ].map(({ icon, text }) => (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} key={text} className="flex flex-col items-center bg-[#F9F6E6] p-4 rounded-lg">
                    <img src={icon} alt="icon" className="h-5 mb-2" />
                    {text}
                  </motion.div>
                ))}
              </div>

              <div>
                <h1 className="text-xl text-gray-700 font-medium mb-3">Description</h1>
                <p className="text-gray-500">{car.description}</p>
              </div>

              <div>
                <h1 className="text-xl text-gray-700 font-medium mb-3">Features</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["360 Camera", "Bluetooth", "Cruise Control", "Heated Seats", "Keyless Entry", "GPS"].map((item) => (
                    <li key={item} className="flex items-center text-gray-500">
                      <img src={assets.check_icon} alt="icon" className="h-4 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} onSubmit={handleSubmit} className="shadow-lg bg-[#F9F6E6] h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500">
            <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
              {currency}{car.pricePerDay}
              <span className="text-base text-gray-400 font-normal">Per Day</span>
            </p>
            <hr className="border border-gray-400 my-6" />
            <div className="flex flex-col gap-2">
              <label htmlFor="pickup-date">Pickup Date</label>
              <input value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} type="date" className="border border-gray-400 px-3 py-2 rounded-lg" required id="pickup-date" min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="return-date">Return Date</label>
              <input value={returnDate} onChange={(e) => setReturnDate(e.target.value)} type="date" className="border border-gray-400 px-3 py-2 rounded-lg" required id="return-date" min={pickupDate} />
            </div>
            <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
              Book Now
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default CarDetails
