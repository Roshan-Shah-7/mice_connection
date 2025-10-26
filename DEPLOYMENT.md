# Deployment Guide

## Backend Deployment

### Prerequisites
- Node.js 18+ installed
- Environment variables configured (see .env.example)

### Deployment Steps

#### Option 1: Deploy to Render.com
1. Create a new Web Service
2. Connect to your GitHub repository
3. Set build command to: `npm install && npm run build:server`
4. Set start command to: `npm start`
5. Add environment variables: `EMAIL_USER` and `EMAIL_PASS`
6. Make sure to set `PORT` variable if not automatically set

#### Option 2: Deploy to Railway
1. Import your GitHub repository
2. Railway will automatically detect it's a Node.js project
3. In Environment Variables, add:
   - `EMAIL_USER`: your Gmail address
   - `EMAIL_PASS`: your Gmail app password
4. The `PORT` variable will be set automatically

#### Option 3: Deploy to Heroku
1. Create a new Heroku app
2. Connect to your GitHub repository
3. Enable automatic deploys
4. In Settings > Config Vars, add:
   - `EMAIL_USER`: your Gmail address
   - `EMAIL_PASS`: your Gmail app password
5. The `PORT` variable will be set automatically

## Frontend Configuration

Once your backend is deployed, update your frontend environment variables:

```
VITE_API_BASE_URL=https://your-backend-deployed-url.com
```

## Environment Variables Required

### For Backend
- `EMAIL_USER`: Your Gmail address for sending emails
- `EMAIL_PASS`: Your Gmail app password (not regular password)

### For Frontend (if building separately)
- `VITE_API_BASE_URL`: The URL where your backend is deployed

## Building for Production

To build the backend server:
```
npm run build:server
```

To start the production server:
```
npm start
```

## Notes
- Make sure to use Gmail app passwords, not your regular Gmail password
- The backend will listen on the PORT environment variable (for cloud deployments) or default to port 3001
- The frontend uses Vite's environment variable system (VITE_ prefix)