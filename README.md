# 🚗 Car Rental Platform

A full-stack car rental web application that allows users to browse, explore, and rent cars seamlessly. Built with modern web technologies and deployed for real-world usage.

🌐 **Live Demo:** https://rental-site-theta.vercel.app/

---

## 📌 Features

* 🚘 Browse available rental cars
* 🔍 View detailed car information
* 🧾 RESTful API architecture
* 🌐 Public routes for fetching car listings
* 🗄️ MongoDB database integration
* ⚡ Fast and optimized backend performance
* 🔐 Environment-based configuration
* 📦 Scalable folder structure (MVC pattern)

---

## 🛠️ Tech Stack

### **Frontend**

* React.js (assumed if used with Vercel frontend)
* Tailwind CSS / CSS Modules (if applicable)

### **Backend**

* Node.js
* Express.js

### **Database**

* MongoDB
* Mongoose ODM

### **Deployment**

* Vercel (Frontend / Serverless)
* GitHub (Version Control)

---

## 📂 Project Structure

```
├── configs/        # Database configuration
├── controllers/    # Business logic for routes
├── middleware/     # Custom middleware
├── models/         # Mongoose schemas
├── routes/         # API route definitions
├── seedCars.js     # Script to seed initial data
├── server.js       # Entry point
├── .env            # Environment variables
├── vercel.json     # Deployment config
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/car-rental.git
cd car-rental
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the server

```bash
npm run dev
```

---

## 🌱 Seed Database (Optional)

To populate initial car data:

```bash
node seedCars.js
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| GET    | /api/cars     | Get all cars  |
| GET    | /api/cars/:id | Get car by ID |

---

## 🚀 Deployment

This project is deployed using **Vercel**.
Ensure `vercel.json` is configured correctly for serverless deployment.

---

## 📈 Future Improvements

* 🧑‍💻 User authentication (JWT)
* 💳 Payment integration
* 📅 Booking system with date selection
* ⭐ Reviews & ratings
* 📊 Admin dashboard

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a PR.

---

## 📬 Contact

**Rishabh Panwar**
📧 [panwarrishabh00@gmail.com](mailto:panwarrishabh00@gmail.com)
🔗 GitHub: https://github.com/Rish-Panwar
🔗 LinkedIn: https://www.linkedin.com/in/rishabh-panwar-1738-cj/

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
