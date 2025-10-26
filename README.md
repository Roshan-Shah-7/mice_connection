# The MICE Connection Website

This is the website for The MICE Connection, featuring a React frontend with a Node.js/Express backend for handling email sending functionality.

## Project Structure

- `src/` - Frontend React components and code
- `server/` - Backend Express server code
- `public/` - Static assets

## Prerequisites

- Node.js 18+
- npm or yarn package manager

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the project root with your email credentials:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

3. Run both frontend and backend:
```bash
npm run start-all
```

This will start the frontend on `http://localhost:5173` and backend on `http://localhost:3001`.

### Running Backend Only

```bash
npm run server
```

### Building for Production

```bash
# Build frontend
npm run build

# Build backend
npm run build:server
```

## Environment Variables

Create a `.env` file in your project root with the following variables:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

For production deployment, you may also need:

```
VITE_API_BASE_URL=https://your-backend-domain.com
FRONTEND_URL=https://your-frontend-domain.com
```

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Backend API

The backend provides a single endpoint:
- `POST /api/send-email` - Send an email with the provided data

## Technologies Used

- Frontend: React 19, TypeScript, Vite
- Styling: Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Email: Nodemailer with Gmail SMTP
- Animation: GSAP, Framer Motion