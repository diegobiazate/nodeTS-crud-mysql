import { Router } from "express";
import * as HomeController from '../controllers/homeController';
import * as ClientController from '../controllers/clientController';


const router = Router();

//rota para a  página home
router.get('/', HomeController.home);
//rota para adição de um novo cliente no banco
router.post('/newClient', ClientController.newclient);
//rota para pegar os dados do cliente e preencher o formulário
router.get('/client/:id/update', ClientController.updateClient);
//rota para realizar o update dos dados do cliente no banco
router.post('/update', ClientController.update);
//rota para deletar um cliente
router.get('/client/:id/delete', ClientController.deleteClient);

//exportando as rotas
export default router;