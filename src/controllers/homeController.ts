import { Request, Response } from "express";

import { Client } from '../models/Client';

export const home = async (req: Request, res: Response) => {
    //buscando Todos os clientes no banco de Dados.
    let clients = await Client.findAll();

    //encaminhando para a pagina home com os dados dos clientes
    res.render('pages/home', {
        clients
    });
}