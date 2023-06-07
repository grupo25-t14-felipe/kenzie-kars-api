import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors/AppError";
import { announcementRoutes } from "./routers/announcement.routes";
import { usersRoutes } from "./routers/user.routes";
import { loginRoutes } from "./routers/login.routes";

const app: Application = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/announcements", announcementRoutes);

app.use(handleErrors);

export default app;
