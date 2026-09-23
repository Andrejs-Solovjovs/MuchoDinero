const http = require("node:http");
const { handleDashboardRequest, sendJson } = require("./routes/dashboard.routes");

const PORT = Number(process.env.PORT) || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:4200";
const allowedOrigins = CORS_ORIGIN.split(",").map((item) => item.trim());

function applyCors(req, res) {
  const origin = req.headers.origin;
  const allowAny = allowedOrigins.includes("*");
  const allowed = allowAny || !origin || allowedOrigins.includes(origin);

  if (allowed && origin) {
    res.setHeader("Access-Control-Allow-Origin", allowAny ? origin : origin);
    res.setHeader("Vary", "Origin");
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, OPTIONS");

  return allowed;
}

const server = http.createServer(async (req, res) => {
  try {
    const allowed = applyCors(req, res);

    if (!allowed) {
      return sendJson(res, 403, { error: "Origin is not allowed by CORS" });
    }

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      return res.end();
    }

    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

    if (req.method === "GET" && url.pathname === "/api/health") {
      return sendJson(res, 200, { status: "ok" });
    }

    if (url.pathname === "/api/dashboard" || url.pathname.startsWith("/api/dashboard/")) {
      const handled = await handleDashboardRequest(req, res, url);
      if (handled) return;
    }

    return sendJson(res, 404, {
      error: "Not found",
      path: url.pathname,
    });
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      sendJson(res, 500, { error: "Internal server error" });
    } else {
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log(`ProfitPlate API: http://localhost:${PORT}`);
  console.log(`Dashboard API: http://localhost:${PORT}/api/dashboard`);
});
