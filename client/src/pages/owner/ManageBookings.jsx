import { useEffect, useState } from "react"
import Title from "../../components/owner/Title"
import { assets, dummyMyBookingsData } from "../../assets/assets"

const ManageBookings = () => {
  const currency = import.meta.env.VITE_CURRENCIES

  const [bookings, setBookings] = useState([])
  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData)
  }
  useEffect(() => {
    fetchOwnerBookings()
  })
  return (
    <div className='px-4 pt-10 md:px-10 w-full bg-[#FEE8D9]'>
      <Title title={'Manage bookings'} subTitle={'View and manage all bookings for your vehicles'} />
      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-gray-400 mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-700">
          <thead className='text-gray-500'>
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {bookings.map((bookings, index) => (
              <tr key={index} className='border-t border-gray-400 text-gray-600'>
                <td className="p-3 flex items-center gap-3">
                  <img src={bookings.car.image} alt="" className="h-12 w-12 aspect-square rounded-md object-cover" />
                    <p className="font-medium max-md:hidden">{bookings.car.name} {bookings.car.model}</p>
                </td>
                <td className="p-3 max-md:hidden">{bookings.pickupDate.split('T')[0]} <span className="font-medium text-gray-800">to</span> {bookings.returnDate.split('T')[0]}</td>
                <td className="p-3">{currency}{bookings.price}</td>

                <td className="p-3 max-md:hidden">
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-xs">Offline</span>
                </td>
                <td className="p-3">
                  {bookings.status === 'pending' ? (
                    <select value={bookings.status} className="px-2 py-1.5 mt-1 border border-gray-400 rounded-md outline-none">
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="canceled">Canceled</option>
                    </select>
                  ) : (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${bookings.status === 'confirmed' ? 'bg-green-200 text-green-500' : 'bg-red-200 text-red-500'}`}>{bookings.status}</span>
                  )}                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings
