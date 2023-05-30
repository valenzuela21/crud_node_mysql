import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import {API_ROUTER} from "./routes";
import {connectDB} from "./config/db";

const app =  express();

dotenv.config({path: ".env"});

export const paths = {
    home:       "/",
    user:       "/user",
};

connectDB();

console.log(__dirname);

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../../views"));
app.set("view engine", "pug");
app.set("env", process.env.APP_MODE || "production");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());


app.use( paths.home, API_ROUTER.homeRouter);
app.use( paths.user, API_ROUTER.userRouter);

export default app;
