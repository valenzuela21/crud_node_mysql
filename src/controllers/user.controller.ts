import {Request, Response} from "express";
import User from "../db/models/user";

export const addUser = async (req: Request, res: Response) => {
    try {

        const {fullName, country} = req.body;

        const user = await User.create({
            fullName,
            country
        });

        return res.status(201).send({
            status: 201,
            message: "OK",
            data: user
        });
    } catch (e) {
        return res.status(500).json({
            msg: "Error: " + e
        });
    }
};

export const allUser = async (req: Request, res: Response) => {
    try{
        const user: User[] = await User.findAll();

        return res.status(201).send({
            status: 201,
            message: "OK",
            data: user
        });
    }catch (e){
        return res.status(500).json({
            msg: "Error: " + e
        });
    }
};


export const updateUser =  async(req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const { fullName, country } = req.body;

        const user: User | null = await User.findByPk(id);

        if (!user) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            });
        }

        user.fullName = fullName;
        user.country = country;

        await user.save();

        return res.status(201).send({
            status: 201,
            message: "OK",
            data: user
        });

    }
    catch (e){
        return res.status(500).json({
            msg: "Error: " + e
        });
    }
};


export const deleteUser = async (req: Request, res: Response) => {

    try {
        const {id} = req.params;
        const user: User | null = await User.findByPk(id);

        if (!user) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            });
        }

        await user.destroy();

        return res.status(201).json({
            status: 201,
            msg: "User delete success fully.."
        });

    }catch (e){
        return res.status(500).json({
            msg: "Error: " + e
        });
    }

};


export const findOneUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            });
        }

        return res.status(201).send({
            status: 201,
            message: "OK",
            data: user
        });
    }catch (e){
        return res.status(500).json({
            msg: "Error: " + e
        });
    }
};