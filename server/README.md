# ProfitPlate Dashboard API

The backend uses Node.js built-in HTTP modules, so it adds **zero backend dependencies**. The mock response shapes are intentionally aligned with the current Angular Dashboard component interfaces.

## Run

```bash
npm run api:dev
```

Angular can keep running separately with:

```bash
npm start
```

Default API URL: `http://localhost:3000/api`

## Dashboard endpoints

- `GET /api/dashboard/stat-cards?period=today|7d|30d`
- `GET /api/dashboard/revenue-chart?period=today|7d|30d`
- `GET /api/dashboard/top-dishes?period=today|7d|30d&limit=5`
- `GET /api/dashboard/restaurant-status`
- `PATCH /api/dashboard/restaurant-status` body: `{ "status": "works" | "break" | "closed" }`
- `GET /api/dashboard/upcoming-reservations?limit=4`
- `GET /api/dashboard/low-stock?limit=3`
- `GET /api/dashboard/important-today?limit=4`
- `GET /api/dashboard?period=today|7d|30d` — optional aggregate endpoint
- `GET /api/health`

At this stage data is held in `server/data/dashboard.data.js`. You can replace those values/functions with DB queries later without changing the frontend response contracts.

## Environment

Copy `.env.example` values into your hosting environment. Node does not load `.env` automatically here, so set variables in your shell/hosting panel:

- `PORT=3000`
- `CORS_ORIGIN=http://localhost:4200`

For several origins, separate them with commas.
