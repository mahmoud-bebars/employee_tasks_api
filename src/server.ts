import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";
import { routes } from "./routes/router";
import { config } from "./config/config.env";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
const app: Application = express();

// Enable CORS
app.options("*", cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

// Set CORS headers
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Logger middleware
app.use(logger("tiny"));

// Body parsing middleware
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  }),
);

const APP_URL = config.appUrl;

// welcome Route
app.get("/", (req, res) => {
  res.redirect(APP_URL);
});

// Setup routes
routes.forEach((route: { prefix: string; router: express.Router }) =>
  app.use(`/api/v1/${route.prefix}`, route.router),
);

const PORT = config.port;

app.listen(PORT, () => {
  console.info(
    `🚀 Server up & running on port: ${PORT} at http://localhost:${PORT}`,
  );
});

export default app;
