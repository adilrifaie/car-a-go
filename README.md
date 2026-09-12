# CaraGo 🚗

A full-stack car rental web application where customers can browse, book, and review cars — and admins can manage the entire operation from a dedicated dashboard.

## What It Does

**For customers:**
- Browse available cars and filter by category
- Book a car by selecting pickup dates and location
- Track booking history and statuses
- Leave reviews for completed rentals
- Read articles and guides on the blog

**For admins and staff:**
- Manage car inventory with photo uploads
- Approve, update, or cancel bookings
- Moderate customer reviews before they go live
- Write and publish blog posts
- Manage user accounts and roles

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express.js |
| Database | MySQL + Sequelize ORM |
| Frontend | EJS templates + Bootstrap |
| Authentication | Session-based auth + bcrypt |
| File Uploads | Multer |
| Security | CSRF protection, parameterized queries |

## Getting Started

```bash
# Clone and install
git clone https://github.com/adilrifaie/car-a-go.git
cd carago
npm install

# Set up environment variables
cp .env.example .env
# Fill in your DB credentials and session secret

# Run in development
npm start
```

App runs at `http://localhost:1620`

> Database tables are auto-created on first run. Seed data available via `node database/mockData.js`.

## Project Structure

```
carago/
├── controllers/     # Business logic (admin, auth, customer)
├── models/          # Database models via Sequelize
├── routers/         # Route definitions
├── views/           # EJS templates
├── middleware/       # Auth guards, CSRF, file uploads
├── public/          # Static assets and uploaded images
└── server.js        # Entry point
```

## License

MIT