import Booking from "../models/Booking.js"
import Car from "../models/Car.js"

// Function to check car availability for given dates
const checkAvailability = async(car,pickupDate, returnDate) =>{
    const bookings = await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$gte: pickupDate}
    })
    return bookings.length === 0
}

// API to check car availability for given dates and location
export const checkAvailabilityOfCar = async(req, res) => {
    try {
        const {location, pickupDate, returnDate} = req.body
        // Find cars in the specified location
        const cars = await Car.find({location, isAvailable: true})
        // Check availablity for each car using promise
        const availableCarsPromises = cars.map(async(car) =>{
            const isAvailable = await checkAvailability(car._id, pickupDate, returnDate)
            return {...car._doc, isAvailable: isAvailable}
        })

        let availableCars = await Promise.all(availableCarsPromises)
        availableCars = availableCars.filter(car => car.isAvailable === true)
        res.json({success: true, availableCars})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// API to create booking
export const createBooking = async(req, res) =>{
    try {
        const {_id}= req.user
        const {car, pickupDate, returnDate} = req.body
        const isAvailable = await checkAvailability(car, pickupDate, returnDate)
        if(!isAvailable){
            res.json({success: false, message: "Car not available for the selected dates"})
        }
        const carData = await Car.findById(car)

        // Calculate total price
        const picked = new Date(pickupDate)
        const returned = new Date(returnDate)
         const noOfDays = Math.ceil((returned - picked) / (1000*60*60*24))
         const totalPrice = noOfDays * carData.pricePerDay

         await Booking.create({car, owner: carData.owner, user: _id, pickupDate, returnDate, price: totalPrice})
         res.json({success: true, message: "Booking created successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// API to list user bookings
export const getUserBooking = async(req, res) =>{
    try {
        const {_id} = req.user
        const bookings = await Booking.find({user: _id}).populate('car').sort({createdAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// API to get owner bookings
export const getOwnerBooking = async(req, res) =>{
    try {
        if(req.user.role !== 'owner'){
            return res.json({success: false, message: "Unauthorized Access"})
        }
        const bookings = (await Booking.find({owner: req.user._id}).populate('car user')).select('-user.password').sort({createdAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// API to update booking status
export const changeBookingStatus = async(req, res) =>{
    try {
        const {_id} = req.user
        const {bookingId, status} = req.body
        const booking  = await Booking.findById(bookingId)
        if(booking.owner.toString() !== _id.toString()){
            res.json({success: false, message: "Unauthorized access"})
        }
        booking.status = status
        await booking.save()
        res.json({success: true, message: "Booking status updated successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}