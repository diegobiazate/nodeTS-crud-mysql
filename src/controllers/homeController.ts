import { Request, Response } from "express";
import { sequelize } from "../instances/mysql";

import { Client } from '../models/Client';

export const home = async (req: Request, res: Response) => {
    // testando conexão com o banco:
    try {
        await sequelize.authenticate();
        console.log("Conexão estabelecida com Sucesso!");
    } catch (error) {
        console.log("Erro: ", error);
    }

    res.render('pages/home');
}