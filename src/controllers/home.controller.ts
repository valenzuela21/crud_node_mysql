import {Request, Response} from "express";

export const index = (req: Request, res: Response) => {
    res.render("home",{ title: "Server Typescript And Node Js!" });
};