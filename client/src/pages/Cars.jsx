import { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from '../components/CarCards'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'
import { useAppContext } from '../context/appContext'

const Cars = () => {
  // getting search params from url
  const [searchParams] = useSearchParams()
  const pickupLocation = searchParams.get('pickupLocation')
  const pickupDate = searchParams.get('pickupDate')
  const returnDate = searchParams.get('returnDate')
  const { cars = [], axios } = useAppContext()
  const [input, setInput] = useState('')

  const isSearchData = Boolean(pickupLocation && pickupDate && returnDate)
  const [filteredCars, setFilteredCars] = useState([])
  const [loading, setLoading] = useState(true)

  // safe filter that tolerates missing fields
  const applyFilter = () => {
    // if no input, show all cars
    if (!input) {
      setFilteredCars(cars)
      return
    }

    const q = input.toLowerCase()
    const filtered = (cars || []).filter((car) => {
      return (
        String(car?.brand || '').toLowerCase().includes(q) ||
        String(car?.model || '').toLowerCase().includes(q) ||
        String(car?.category || '').toLowerCase().includes(q) ||
        String(car?.transmission || '').toLowerCase().includes(q)
      )
    })
    setFilteredCars(filtered)
  }

  // search availability when search params change (run whenever search params change)
  useEffect(() => {
    const searchCarAvailability = async () => {
      if (!isSearchData) return
      setLoading(true)
      try {
        const { data } = await axios.post('/api/bookings/check-availablity', {
          location: pickupLocation,
          pickupDate,
          returnDate,
        })
        if (data?.success) {
          setFilteredCars(data.availableCars || [])
          if (!data.availableCars || data.availableCars.length === 0) {
            toast('No cars available')
          }
        } else {
          toast.error(data?.message || 'Availability check failed')
        }
      } catch (err) {
        toast.error(err.response?.data?.message || err.message || 'Error checking availability')
      } finally {
        setLoading(false)
      }
    }

    searchCarAvailability()
    // only when these exact params change
  }, [isSearchData, pickupLocation, pickupDate, returnDate, axios])

  // whenever `cars` arrives or `input` changes, update filteredCars (only when not using search params)
  useEffect(() => {
    if (isSearchData) {
      // when searching by dates, availability response controls filteredCars
      return
    }

    setLoading(true)

    if (cars && cars.length > 0) {
      // apply filter to real cars
      applyFilter()
      setLoading(false)
    } else {
      // fallback to local dummy data until real cars arrive
      setFilteredCars(dummyCarData)
      setLoading(false)
    }
  }, [cars, input, isSearchData]) // run when cars, input or isSearchData changes

  return (
    <div className="pb-30 bg-[#EEEEEE] ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center py-20 bg-[#FFFED3] max-md:px-4"
      >
        <Title
          title="Drive Your Choice"
          subTitle="Discover our handpicked fleet of luxury vehicles, designed to make every journey unforgettable"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center bg-[#FFF8E1] px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow"
        >
          <img src={assets.search_icon} alt="search-icon" className="w-4.5 h-4.5 mr-2" />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by Name, Model, Features..."
            className="w-full h-full outline-none text-gray-400"
          />
          <img src={assets.filter_icon} alt="filter-icon" className="w-4.5 h-4.5 ml-2" />
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="px-6 md:px-14 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          {loading ? 'Loading cars...' : `Showing ${filteredCars.length} Cars`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {filteredCars.map((car, index) => (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} key={car._id ?? index}>
              <CarCards car={car} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Cars
