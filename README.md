# Hospital Analytics Management System

A comprehensive full-stack Next.js web application designed for MCA/BCA final year projects. Connects directly to MongoDB, providing beautiful visualizations, patient records management, and real-time dashboard analytics.

## Tech Stack
- Frontend: Next.js (App Router), React, Tailwind CSS
- Charts: Recharts
- Icons: Lucide React
- Backend: Next.js API Routes (Node.js/Express-like syntax)
- Database: MongoDB (via Mongoose)
- Security: JWT via jose (implemented structure)

## Setup Guide

1. Rename \`.env.example\` to \`.env.local\`
2. Set your \`MONGODB_URI\` in the environment variables.
3. Install dependencies: \`npm install\`
4. Run the development server: \`npm run dev\`

Once running, the application will detect if MongoDB is available. If it's not set up yet, it falls back to a high-quality mock data generator so your UI does not break!

## Deployment (Vercel)
This app is natively built with Next.js, meaning you can easily deploy it on Vercel:
1. Push your code to GitHub.
2. Sign in to Vercel and import the repository.
3. Add the \`MONGODB_URI\` to the Vercel Environment Variables.
4. Click Deploy.

## Deployment (Render)
1. In Render, select "New Web Service" and link your GitHub.
2. Build Command: \`npm install && npm run build\`
3. Start Command: \`npm start\`
4. Add \`MONGODB_URI\` and \`JWT_SECRET\` to Render's Environment Variables.
