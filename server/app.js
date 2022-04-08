import express from "express";
import routes from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import "./config/passport";
const app = express();

/* ====================== Middlewares =============================*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({ secret: "p5", saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());

/* ====================== Routes =============================*/
app.use("/api", routes);

export default app;
