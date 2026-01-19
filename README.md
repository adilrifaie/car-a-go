# Carago

A car rental web application built with Node.js and Express.

## Features

**Customers**
- Browse and search available cars
- Book cars with date selection
- Track booking history
- Submit reviews and ratings

**Admin**
- Manage car inventory
- Handle bookings (approve/reject)
- Moderate reviews
- Publish blog posts

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL with Sequelize ORM
- **View Engine:** EJS
- **Auth:** bcrypt, express-session

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd carago
npm install
```

### 2. Configure Environment

Create `.env` file (use `.env.example` as reference):

```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=carago
DB_PORT=3306
SESSION_SECRET=your_random_secret_key
```

### 3. Setup Database

Create a MySQL database named `carago`. Tables are auto-created on first run.

### 4. Run

```bash
# Development
npm run dev

# Production
npm start
```

Server runs at `http://localhost:1620`

## Project Structure

```
carago/
├── controllers/     # Route handlers
│   ├── admin/       # Admin features
│   ├── auth/        # Login, register, logout
│   └── customer/    # Customer features
├── models/          # Database models
├── routers/         # Route definitions
├── views/           # EJS templates
├── public/          # Static files
├── middleware/      # Auth, session, uploads
└── server.js        # Entry point
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/cars` | Browse cars |
| `/auth/login` | Login |
| `/auth/register` | Register |
| `/account` | Customer dashboard |
| `/admin` | Admin dashboard |

## Database Models

- **Users** - Customer and admin accounts
- **Cars** - Vehicle inventory
- **Bookings** - Rental reservations
- **Reviews** - Customer feedback
- **Blogs** - Blog posts

## License

MIT
