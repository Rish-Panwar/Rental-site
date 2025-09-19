import express from 'express'
import { protect } from '../middleware/Auth.js'
import { addCar, changeRoleToOwner, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailablity, updateUserImage } from '../controllers/OwnerController.js'
import upload from '../middleware/Multer.js'

const ownerRouter  = express.Router()

ownerRouter.post('/change-role', protect, changeRoleToOwner)
ownerRouter.post('/add-car', upload.single("image"), protect, addCar )
ownerRouter.get('/cars', protect, getOwnerCars )
ownerRouter.post('/toggle-car', protect, toggleCarAvailablity )
ownerRouter.post('/delete-car', protect, deleteCar )

ownerRouter.get('/dashboard', protect, getDashboardData)
ownerRouter.post('/update-image', upload.single("image"), protect, updateUserImage)
export default ownerRouter