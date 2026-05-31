# 🚗 DriveFleet — Car Rental Platform

**Live Site:** [https://your-drivefleet-live-url.vercel.app](https://your-drivefleet-live-url.vercel.app)

---

## 📌 About the Project

DriveFleet is a full-stack car rental platform where users can browse available vehicles, view detailed car information, make bookings, manage their rentals, and maintain personal profiles. Admins and registered users can add, update, and delete car listings with ease.

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Email/password login and registration with JWT-based route protection. Private routes remain accessible on page reload without redirecting to login.

- 🚘 **Car Listings & Details** — Browse all available cars with images, pricing, and specifications. View individual car detail pages with availability status and booking options.

- 📅 **Booking Management** — Authenticated users can rent cars, view their booking history, and cancel or modify upcoming reservations from a dedicated dashboard.

- ✏️ **Full CRUD Operations** — Users can add new car listings, update existing ones, and delete their own listings. All actions reflect in real-time with toast notifications (no default browser alerts).

- 🔍 **Search & Filter** — Search cars by name using MongoDB `$regex` operator and filter listings by car type for a smoother browsing experience.

- 📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop screens with a consistent, recruiter-friendly UI built with modern layout techniques.

---

## 🛠️ Tech Stack

**Frontend:**

- React.js (Next.js App Router)
- Tailwind CSS
- Axios
- React Router / Next.js routing
- Firebase / JWT for authentication

**Backend:**

- Node.js + Express.js
- MongoDB (with Mongoose)
- JWT for secured API endpoints
- dotenv for environment variable management

---

## 📦 Dependencies

```bash
# Client
npm install

# Server
npm install
```

---

## 🔧 Environment Variables

Create a `.env.local` file in the client root and a `.env` file in the server root:

**Client `.env.local`:**

```
NEXT_PUBLIC_API_URL=your_server_base_url
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```

**Server `.env`:**

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

> ⚠️ Never commit your `.env` files. They are listed in `.gitignore`.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/drivefleet-client.git

# Navigate and install dependencies
cd drivefleet-client
npm install

# Run the development server
npm run dev
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── form/
│   │   └── [id]/
│   │       └── page.jsx
│   │   └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── components/
```

---

## 🌐 Deployment

- **Client:** Deployed on [Vercel](https://vercel.com)
- **Server:** Deployed on [Render](https://render.com)

> Reloading any route — including private routes — works without errors or unexpected redirects.

---

## 📄 License

This project was built as part of an academic assignment. All rights reserved.
