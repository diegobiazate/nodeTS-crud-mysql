import { Request, Response } from "express";
import { Client } from '../models/Client';

export const newclient = async (req: Request, res: Response) => {
    //pegando todos os dados do formulário
    let {firstName, lastName, email, aboutYou} = req.body;
    
    //verificando se o Nome e o Sobrenome estão preenchidos
    if(firstName && lastName){
        //setando os valores em seus devidos campos
        const cliente = Client.build({
            firstName: firstName,
            lastName: lastName,
            email: email,
            aboutYou: aboutYou
        });
        //salvando as alterações no banco
        //Neste caso em específico, está sendo criado no banco
        await cliente.save();
    }
    res.redirect('/');
}

export const updateClient = async (req: Request, res: Response)=>{
    //pegando o ID do cliente
    let idCliente: string = req.params.id;

    //buscando o cliente no banco pelo ID
    let cliente = await Client.findByPk(idCliente);

    //enviando os dados para a página home
    res.render('pages/home', {
        cliente
    })
}

export const update = async (req: Request, res: Response) => {
    //pegando os dados do formulário
    let {id, firstName, lastName, email, aboutYou} = req.body;
    
    //usando o trycatch para verificação de possíveis erros
    try {
        //buscando o cliente pelo ID
        let cliente = await Client.findByPk(id);
        //verificando se houve retorno
        if(cliente){
            //atualizando os dados
            cliente.firstName = firstName;
            cliente.lastName = lastName;
            cliente.email = email;
            cliente.aboutYou = aboutYou;
            
            //salvando as alterações no banco
            await cliente.save();
        }
    } catch (error) {
        //exibindo o erro caso possua.
        console.log("ERROR: ", error);
    }
    res.redirect('/');
}

export const deleteClient = async (req: Request, res: Response)=>{
    //pegando o ID do cliente
    let idCliente: string = req.params.id;

    //buscando o cliente no banco pelo ID
    let cliente = await Client.findByPk(idCliente);
    //verificando se existe
    if(cliente){
        //destriundo os dados do cliente no banco
        await cliente.destroy();
    }
    res.redirect('/');
}