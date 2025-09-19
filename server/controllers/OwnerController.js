import imagekit from "../configs/imagekit.js"
import Booking from "../models/Booking.js"
import Car from "../models/Car.js"
import User from "../models/User.js"
import fs from "fs"

// API to change role to owner
export const changeRoleToOwner = async (req, res) => {
    try {
        const { userID } = req.user
        await User.findByIdAndUpdate(userID, { role: 'owner' })
        res.json({ success: true, message: "Now you are an owner" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// API to list car
export const addCar = async (req, res) => {
    try {
        const { _id } = req.user
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file
        // Upload image to ImageKit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })
        // Optimization through ImageKit URL transformation
        var optimizedImageURL = imagekit.url({
            path: response.filePath,            
            transformation: [
                {width: "1280"}, // Resize of width
                {quality: "auto"}, // Auto Compression
                {format: "webp"}  // Convert to webp format 
            ]
        });
        const image = optimizedImageURL
        await Car.create({...car, owner: _id, image})
        res.json({success: true, message: "Car listed successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// API to list owner's car
export const getOwnerCars = async(req, res) =>{
    try {
        const {_id} = req.user
        const cars = await Car.find({owner: _id})
        console.log(error.message)
        res.json({ success: true, cars})
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
// API to toggle car availablity
export const toggleCarAvailablity = async(req, res) => {
    try {
        const {_id} = req.user
        const {carId} = req.body
        const car = await Car.findById({carId})
        // Checking of the car belongs to the owner or not
        if(car.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unauthorized Access"})
        }
        car.isAvailable = !car.isAvailable
        await car.save()
        res.json({success: true, message: "Car availablity updated"})
        console.log(error.message)
        res.json({ success: true, cars})
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// API to delete a car
export const deleteCar = async(req, res) => {
    try {
        const {_id} = req.user
        const {carId} = req.body
        const car = await Car.findById({carId})
        // Checking of the car belongs to the owner or not
        if(car.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unauthorized Access"})
        }
        car.owner = null
        car.isAvailable = false
        await car.save()
        res.json({success: true, message: "Car removed"})
        console.log(error.message)
        res.json({ success: true, cars})
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data
export const getDashboardData = async(req, res) => {
    try {
        const {_id, role} = req.user
        if(role !== 'owner'){
            res.json({success: false, message: "Unauthorized Access"})
        }
        const cars = await Car.find({owner: _id})
        const bookings = await Booking.find({owner: _id}).populate('car').sort({createdAt: -1})
        const pendingBookings = await Booking.find({owner: _id, status: 'pending'})
        const completedBookings = await Booking.find({owner: _id, status: 'completed'} )
        
        // Calculate monthly income from completed bookings
        const monthlyIncome = bookings.slice().filter(booking => booking.status === 'completed').reduce((acc, booking)=> acc + booking.price, 0)
        const dashboardData = {
            totalCars: cars.length,
            totalBookings: bookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings: completedBookings.length,
            recentBookings: recentBookings.slice(0,3),
            monthlyIncome
        }
        res.json({success: true, dashboardData})
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// API to update user image
export const updateUserImage = async(req, res) => {
    try {
        const {_id} = req.user
        const imageFile = req.file
        // Upload image to ImageKit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/users'
        })
        // Optimization through ImageKit URL transformation
        var optimizedImageURL = imagekit.url({
            path: response.filePath,            
            transformation: [
                {width: "400"}, // Resize of width
                {quality: "auto"}, // Auto Compression
                {format: "webp"}  // Convert to webp format 
            ]
        });
        const image = optimizedImageURL
        await user,findByIdAndUpdate(_id, {image})
        res.json({success: true, image, message: "Profile image updated successfully"})
        res.json({success: true, message: "Car listed successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}