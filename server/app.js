import express from "express";
import fileUpload from "express-fileupload";
import routes from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import "./config/passport";
import morgan from "morgan";
import cors from "cors";
const app = express();
import path from "path";
/* ====================== Middlewares =============================*/

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

app.use(session({ secret: "p5", saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());

/* ====================== Routes =============================*/
app.use("/api", routes);

/* ====================== Routes =============================*/
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

export default app;
