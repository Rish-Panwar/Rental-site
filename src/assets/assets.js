import logo from "./logo.png";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./amg-1.jpg"
import car_image2 from "./amg-2.jpg"
import car_image3 from "./amg-3.jpg"
import car_image4 from "./audi-1.jpg"
import car_image5 from "./audi-2.jpg"
import car_image6 from "./audi-r8.jpg"
import car_image7 from "./audi-r8-2.jpg"
import car_image8 from "./bmw-1.jpg"
import car_image9 from "./bmw-2.jpg"
import car_image10 from "./bmw-3.jpg"
import car_image11 from "./bugatti-1.jpg"
import car_image12 from "./bugatti-2.jpg"
import car_image13 from "./camaro.jpg"
import car_image14 from "./camaro-1.jpg"
import car_image15 from "./corvette-1.jpg"
import car_image16 from "./ferrari-1.jpg"
import car_image17 from "./ferrari-2.jpg"
import car_image18 from "./ferrari-3.jpg"
import car_image19 from "./ferrari-4.jpg"
import car_image20 from "./gtr-1.jpg"
import car_image21 from "./gtr-2.jpg"
import car_image22 from "./g-wagon.jpg"
import car_image23 from "./g-wagon-2.jpg"
import car_image24 from "./hellcat.jpg"
import car_image25 from "./hellcat-2.jpg"
import car_image26 from "./lambo-1.jpg"
import car_image27 from "./lambo-2.jpg"
import car_image28 from "./lambo-3.jpg"
import car_image29 from "./mclaren.jpg"
import car_image30 from "./mclaren-2.jpg"
import car_image31 from "./mustang.jpg"
import car_image32 from "./mustang-1.jpg"
import car_image33 from "./mustang-2.jpg"
import car_image34 from "./mustang-3.jpg"
import car_image35 from "./mustang-4.jpg"
import car_image36 from "./porsche-1.jpg"
import car_image37 from "./porsche-2.jpg"
import noBg_image1 from "./twin-nobg.png"
import noBg_image2 from "./lambo-nobg.png"


export const cityList = ['New York', 'Los Angeles', 'Houston', 'Chicago']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6,
    car_image7,
    car_image8,
    car_image9,
    car_image10,
    car_image11,
    car_image12,
    car_image13,
    car_image14,
    car_image15,
    car_image16,
    car_image17,
    car_image18,
    car_image19,
    car_image20,
    car_image21,
    car_image22,
    car_image23,
    car_image24,
    car_image25,
    car_image26,
    car_image27,
    car_image28,
    car_image29,
    car_image30,
    car_image31,
    car_image32,
    car_image33,
    car_image34,
    car_image35,
    car_image36,
    car_image37,
    noBg_image1,
    noBg_image2
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "GreatStack",
  "email": "admin@example.com",
  "role": "owner",
  "image": "",
}

export const dummyCarData = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Mercedes-AMG",
        "model": "GT",
        "image": car_image1,
        "year": 2022,
        "category": "Sport Coupe",
        "seating_capacity": 2,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 300,
        "location": "New York",
        "description": "The Mercedes-AMG GT is a high-performance sports car produced by Mercedes-Benz. It made its debut in 2015 as a successor to the SLS AMG.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Toyota",
        "model": "Corolla",
        "image": car_image2,
        "year": 2021,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 130,
        "location": "Chicago",
        "description": "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Jeep ",
        "model": "Wrangler",
        "image": car_image3,
        "year": 2023,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 200,
        "location": "Los Angeles",
        "description": "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ford",
        "model": "Neo 6",
        "image": car_image4,
        "year": 2022,
        "category": "Sedan",
        "seating_capacity": 2,
        "fuel_type": "Diesel",
        "transmission": "Semi-Automatic",
        "pricePerDay": 209,
        "location": "Houston",
        "description": "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    }
];

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 130,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
}