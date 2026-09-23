const {
  statCardsByPeriod,
  revenueChartByPeriod,
  topDishesByPeriod,
  upcomingReservations,
  lowStockItems,
  importantToday,
  getRestaurantStatus,
  updateRestaurantStatus,
} = require("../data/dashboard.data");

const PERIODS = new Set(["today", "7d", "30d"]);
const WORK_STATUSES = new Set(["works", "break", "closed"]);

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function readPeriod(url, res) {
  const period = url.searchParams.get("period") || "today";

  if (!PERIODS.has(period)) {
    sendJson(res, 400, {
      error: "Invalid period",
      allowed: [...PERIODS],
    });
    return null;
  }

  return period;
}

function readLimit(url, fallback, max = 50) {
  const raw = Number(url.searchParams.get("limit"));
  if (!Number.isInteger(raw) || raw <= 0) return fallback;
  return Math.min(raw, max);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";

    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });

    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });

    req.on("error", reject);
  });
}

async function handleDashboardRequest(req, res, url) {
  const path = url.pathname.replace(/^\/api\/dashboard\/?/, "");

  // Optional aggregate endpoint for loading the whole dashboard with one request.
  if (req.method === "GET" && path === "") {
    const period = readPeriod(url, res);
    if (!period) return true;

    sendJson(res, 200, {
      statCards: statCardsByPeriod[period],
      revenueChart: revenueChartByPeriod[period],
      topDishes: topDishesByPeriod[period],
      restaurantStatus: getRestaurantStatus(),
      upcomingReservations: [...upcomingReservations].sort((a, b) => a.time.localeCompare(b.time)),
      lowStock: lowStockItems,
      importantToday,
    });
    return true;
  }

  // Response shape is intentionally identical to StatCardData[] on the frontend.
  if (req.method === "GET" && path === "stat-cards") {
    const period = readPeriod(url, res);
    if (!period) return true;
    sendJson(res, 200, statCardsByPeriod[period]);
    return true;
  }

  // Matches the current `source` object in revenue-chart.ts.
  if (req.method === "GET" && path === "revenue-chart") {
    const period = readPeriod(url, res);
    if (!period) return true;
    sendJson(res, 200, revenueChartByPeriod[period]);
    return true;
  }

  // Response shape is Dish[].
  if (req.method === "GET" && path === "top-dishes") {
    const period = readPeriod(url, res);
    if (!period) return true;
    const limit = readLimit(url, 5);
    sendJson(res, 200, topDishesByPeriod[period].slice(0, limit));
    return true;
  }

  if (req.method === "GET" && path === "restaurant-status") {
    sendJson(res, 200, getRestaurantStatus());
    return true;
  }

  // The status select can update works/break/closed. This is in-memory for now.
  if (req.method === "PATCH" && path === "restaurant-status") {
    let body;
    try {
      body = await readJsonBody(req);
    } catch (error) {
      sendJson(res, 400, { error: error.message });
      return true;
    }

    if (!WORK_STATUSES.has(body.status)) {
      sendJson(res, 400, {
        error: "Invalid status",
        allowed: [...WORK_STATUSES],
      });
      return true;
    }

    sendJson(res, 200, updateRestaurantStatus(body.status));
    return true;
  }

  // Response shape is Reservation[].
  if (req.method === "GET" && path === "upcoming-reservations") {
    const limit = readLimit(url, 4);
    const sorted = [...upcomingReservations].sort((a, b) => a.time.localeCompare(b.time));
    sendJson(res, 200, sorted.slice(0, limit));
    return true;
  }

  // Response shape is StockItem[].
  if (req.method === "GET" && path === "low-stock") {
    const limit = readLimit(url, 3);
    sendJson(res, 200, lowStockItems.slice(0, limit));
    return true;
  }

  // Response shape is Notice[].
  if (req.method === "GET" && path === "important-today") {
    const limit = readLimit(url, 4);
    sendJson(res, 200, importantToday.slice(0, limit));
    return true;
  }

  return false;
}

module.exports = {
  handleDashboardRequest,
  sendJson,
};
